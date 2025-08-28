import { Request, Response, NextFunction } from "express";

// In-memory store for IP request counts and timestamps
const ipRequests: Record<string, { count: number; firstRequest: number }> = {};
const MAX_REQUESTS = 10;
const WINDOW_MS = 60 * 1000; // 1 minute

export function rateLimiter(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip;
    const now = Date.now();
    if (!ipRequests[ip] || now - ipRequests[ip].firstRequest > WINDOW_MS) {
        // Reset count and window
        ipRequests[ip] = { count: 1, firstRequest: now };
        next();
    } else {
        ipRequests[ip].count++;
        if (ipRequests[ip].count > MAX_REQUESTS) {
            res.status(429).json({ error: "Too many requests. Please try again later." });
        } else {
            next();
        }
    }
}
