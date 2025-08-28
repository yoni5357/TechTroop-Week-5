
export const postSchema = {
    type: "object",
    properties: {
        title:{type:"string", minLength:5, maxLength:100},
        content:{type:"string", minLength:10, maxLength:1000},
        category:{type:"string"},
        tags:{type:"array", items:{type:"string"}}
    },
    required: ["title","content","category","tags"]
}

