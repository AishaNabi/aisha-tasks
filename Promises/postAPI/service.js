const postServiceDB = {
    getPostById: (postID) => db.posts.find(({ id })=>id === postID),
    getAllPosts: (index) => db.posts.slice(index, index+4),
    getPostsByUserID: (_userId)=> db.posts.filter(({userId})=> userId === _userId),
    creatPost: ({text, userId}) => {
        const newPostId = Date.now() + ''
        db.posts = db.posts.concat({ id: newPostId, text, timestamp: newPostId / 60000, userId})
        return newPostId
    },
    editPost: ({text, id})=>{
        db.posts = db.posts.map((post) =>{
            if(id === post.id){
                return {...post, text}
            }
            return post
        })
        return id
    },
    deletePost: (postId) => db.posts.filter(({id})=> id === postId)
}

