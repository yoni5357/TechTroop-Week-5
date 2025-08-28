const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]

function getUsers(){
    return users;
}

function  getUserById(userId:string){
    const user = users.find(u => u.id === Number(userId));
    return user;
}

export default {getUsers, getUserById};