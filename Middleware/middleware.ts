

function logger(req,res,next){
    const date = new Date().toDateString();
    const method = req.method;
    const url = req.url;
    console.log(date, method, url);
    next();
}

export default {logger};