const postObject = {};

type commentBody = {
    name:string
    email:string
    body:string
}

type postBody = {
    userId:string,
    title:string,
    body:string
}


async function fetchAllPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw Error('posts fetch response not ok');
    }
    const posts = await res.json();
    return posts;
}  

async function fetchComments(){
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    if(!res.ok){
        throw Error('comments fetch response not ok');
    }
    const comments = await res.json();
    return comments;
}

async function getPosts(){
    const posts = await fetchAllPosts();
    const comments = await fetchComments();
    for(let post of posts){
        postObject[post.id] = post
        postObject[post.id]["comments"] = [];
        for(let comment of comments){
            if(comment.postId === post.id){
                postObject[post.id]["comments"].push(comment);
            }
        }
    }
}

function getPostById(id:string){
    return postObject[id];
}

function getPostComments(id:string){
    return postObject[id]["comments"];
}

function updateComment(postId:string, commentId:string, body:commentBody){
    const postComments = postObject[postId]["comments"];
    const comment = postComments.find(c => c.id = commentId);
    comment.name = body.name;
    comment.email = body.email;
    comment.body = body.body;
}

function addPost(body:postBody){
    postObject[Object.keys(postObject).length + 1] = body;
}

function deletePostById(postId:string){
    delete postObject[postId];
    console.log(postObject);
}

function deleteCommentById(postId:string, commentId:string){
    const post = postObject[postId];
    const comments = post["comments"];
    console.log(comments);
    const commentToDelet = comments.find(c=>c.id == commentId);
    const commentIndex = comments.indexOf(commentToDelet);
    comments.splice(commentIndex,1);
    console.log(comments);
}

export default {getPosts, getPostById, getPostComments, updateComment, addPost, deletePostById, deleteCommentById};