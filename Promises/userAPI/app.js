const db = {
    posts: [],
    users: [
        {isDelete: false, name: "a", id: 1, age: 11, password: "1234"},
        {isDelete: false, name: "b", id: 2, age: 12, password: "124"},
        {isDelete: false, name: "c", id: 3, age: 13, password: "12345"},
        {isDelete: false, name: "d", id: 4, age: 14, password: "01234"},
    ]
}

//      SERVICE

const getUserByIdDB = (userId) => db.users.find(({id}) => id === +userId)
const getAllUsersDB = () => db.users
const creatUserDB = ({isDelete, name, age, password}) =>{
    const id = Date.now()
    db.users = db.users.concat({isDelete, name, id, age, password})
    return id;
}
const editUserDB = (user) =>{
    if(!db.users.find(({id})=> user.id === id)){
        return -1;
    }
    db.users = db.users.map((_user)=>{
        if(_user.id === user.id){
            return user;
        }
        return _user;
    })
    return user.id;
}
const deleteUserDB = (_id) => {
    db.users = db.users.map((user)=>{
        if(user.id === id){
            return {...user, isDelete: true}
        }
        return user;
    })
}

//      CONTROLLER

const deleteUser = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const userId = deleteUserDB(id)
            if(userId === -1){
                reject({status: 404, statusText: "Not Found", data: null})               
            }else{
                resolve({status: 200, statusText: "OK", data: userId})
            }
        }, 500)
    })
}
const editUser = (user)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const userId = editUserDB(user)
            if(userId === -1){
                reject({status: 404, statusText: "Not Found", data: null})               
            }else{
                resolve({status: 200, statusText: "OK", data: userId})
            }
        }, 500)
    })
}
const getUserById = (userId, password) =>{
    return new Promise((resolve, reject)=>{
        const foundUser = getUserByIdDB(userId)
        setTimeout(()=>{
            if(password === foundUser.password){
                if(!foundUser){
                reject({status: 404, statusText: "Not Found", data: null})
            }
            resolve({status: 200, statusText: "OK", data: foundUser})
        }else{
            reject({status: 401, statusText: "Unauthorized", data: null})
        }
        
    }, 500)
    })
}
const creatUser = ({isDelete, name, age, password})=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(!name || !password || !age || isNaN(age)){
                reject({status: 400, statusText: "Bad request", data: null})
            }else{
                const creatUserId = creatUserDB({isDelete, name, age, password})
                resolve({status: 200, statusText: "OK", data: creatUserId})
            }
        }, 500);
    })
}
const getAllUsers = () =>{
    return new Promise((resolve, reject)=>{
        const users = getAllUsersDB()
        setTimeout(()=>{
            resolve({status: 200, statusText: "OK", data: users})
        }, 500)
    })
}


setTimeout(()=>{
    getAllUsers().then(({data})=>{
    console.log(data)
    })
}, 3000 );

creatUser({isDelete: false, name: "lala", age: 18, password: "abc"}).then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log(err.status, err.statusText)
})

getUserById(2, "124")
    .then((resp)=>{
        console.log(`Hello, ${resp.data.name}`)
    })
    .catch((err)=>{
        console.log(`Error`)
        console.log(err)
    })

editUser({isDelete: false, name: "d1", id: 4, age: 14, password: "01234"}).then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log(err.status, err.statusText)
})

