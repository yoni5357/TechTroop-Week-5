const postsObject = {};

type postBody = {
  title: string;
  content: string;
  category: string;
  tags: string[];
};

type commentBody = {
  content: string;
  email: string;
};

function getPosts() {
  return postsObject;
}

function addPost(body: postBody) {
  postsObject[Object.keys(postsObject).length] = body;
}

function addComment(postId: string, body: commentBody) {
  if (!postsObject[postId]["comments"]) {
    postsObject[postId]["comments"] = [];
  }
  postsObject[postId]["comments"].push(body);
}

function getComments(postId: string) {
  if (!postsObject[postId]["comments"]) {
    return [];
  }
  return postsObject[postId]["comments"];
}

export default { addPost, getPosts, addComment, getComments };
