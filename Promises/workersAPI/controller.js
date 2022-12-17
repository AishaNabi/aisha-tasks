const getUserByPosition = (_position)=>{
    return new Promise((resolve, reject)=>{
        if(!_position){
            reject({status: 400, statusText: "Bad request", data: null})
        }
        const workers = workersService.getUserByPosition(_position.trim())
        resolve({status: 200, statusText: "OK", data: workers})
    })
}
const deleteUser = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const workerId = deleteUserDB(id)
            if(workerId === -1){
                reject({status: 404, statusText: "Not Found", data: null})               
            }else{
                resolve({status: 200, statusText: "OK", data: workerId})
            }
        }, 500)
    })
}
const getAllUsers = (position) =>{
    return new Promise((resolve, reject)=>{
        const workers = getAllUsersDB()
        setTimeout(()=>{
            resolve({status: 200, statusText: "OK", data: workers})
        }, 500)
    })
}
const editUser = (worker)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const workerId = editUserDB(worker)
            if(workerId === -1){
                reject({status: 404, statusText: "Not Found", data: null})               
            }else{
                resolve({status: 200, statusText: "OK", data: workerId})
            }
        }, 500)
    })
}
const creatUser = ({isDelete, username, age, position, salary})=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(!username || !position|| !salary|| !age || isNaN(age)){
                reject({status: 400, statusText: "Bad request", data: null})
            }else{
                const creatUserId = creatUserDB({isDelete, username, age, position, salary})
                resolve({status: 200, statusText: "OK", data: creatUserId})
            }
        }, 500);
    })
}

// creatUser({isDelete: false, username: "lala", age: 18, position: "idk", salary: 1000}).then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err.status, err.statusText)
// })
// editUser({username: "d1", id: 6, age: 14, position: "developer", salary: "3000"}).then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err.status, err.statusText)
// })
// setTimeout(()=>{
//     getAllUsers().then(({data})=>{
//     console.log(data)
//     })
// }, 3000 );


const url = 'http://localhost:3000/workers'
// axios.get(url).then((resp)=>{
//     console.log(resp)
// })
// axios.patch(url + '/1',{
//     salary: 4000
// })

const usernameElem = document.getElementById('username')
const positionElem = document.getElementById('position')
const ageElem = document.getElementById('age')
const salaryElem = document.getElementById('salary')
const btnElem = document.getElementById('btn')

const userId = prompt("id plss:")
window.onload=()=>{
    axios.get(url + '/' + userId).then(({data})=>{
        usernameElem.value = data.username
        positionElem.value = data.position
        ageElem.value = data.age
        salaryElem.value = data.salary
    })
}
btn.onclick = () =>{
    const username = usernameElem.value
    const position = positionElem.value
    const age = ageElem.value 
    const salary = salaryElem.value
    axios.patch(url+'/'+userId, {
        username,
        position,
        age,
        salary
    })
    location.reload()
}