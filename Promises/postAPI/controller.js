const getPostById = (postID) => {
    return new Promise ((resolve, reject)=>{
        const post = postServiceDB.getPostById(postID)
        if(post){
            resolve({status: 200, statusText: 'OK', data: post})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}
const getAllPosts = (index) => {
    return new Promise ((resolve, reject)=>{
        const all = postServiceDB.getAllPosts(index)
        if(all){
            resolve({status: 200, statusText: 'OK', data: all})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}
const creatPost = ({text, userId}) =>{
    return new Promise((resolve, reject)=>{
        const newPostId = postServiceDB.creatPost({text, userId})
        setTimeout(()=>{if(!text||!userId){
            reject({status: 400, statusText: 'BAD REQUEST', data: null})
        }else{
            resolve({status: 200, statusText: 'OK', data: newPostId})
        }
    }, 300)
    })
}
const getPostsByUserID =(_userId)=>{
    return new Promise ((resolve, reject)=>{
        const posts = postServiceDB.getPostsByUserID(_userId)
        if(posts){
            resolve({status: 200, statusText: 'OK', data: posts})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}
const editPost = ({text, id})=>{
    return new Promise ((resolve, reject)=>{
        const texts = postServiceDB.editPost({text, id})
        if(texts){
            resolve({status: 200, statusText: 'OK', data: texts})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}
const deletePost = (postId)=>{
    return new Promise ((resolve, reject)=>{
        const id = postServiceDB.deletePost(postId)
        if(id == -1){
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }else{
            resolve({status: 200, statusText: 'OK', data: id})
        }
    })
}




editPost({text: ":)", id: 2}).then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log(err)
})
setTimeout(()=> {getAllPosts(1).then(({data})=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
}, 750)
creatPost({text: 'helloouu', userId: 1}).then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log(err)
})
getPostById(3).then(({data})=>{
    console.log(data)
}).catch((err)=>{
    console.log(err.status, err.statusText)
})
getPostsByUserID(1).then(({data})=>{
    console.log(data)
})