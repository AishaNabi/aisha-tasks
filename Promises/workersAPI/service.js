const getAllUsersDB = () => db.workers.filter(({ isDelete})=> !isDelete)
const creatUserDB = ({isDelete, username, age, position, salary}) =>{
    const id = Date.now()
    db.workers = db.workers.concat({isDelete, id, username, age, position, salary})
    return id;
}
const editUserDB = (worker) =>{
    if(!db.workers.find(({id})=> worker.id === id)){
        return -1;
    }
    db.workers = db.workers.map((_worker)=>{
        if(_worker.id === worker.id){
            return worker;
        }
        return _worker;
    })
    return worker.id;
}
const deleteUserDB = (_id) => {
    db.workers = db.workers.map((worker)=>{
        if(worker.id === id){
            return {...worker, isDelete: true}
        }
        return worker;
    })
}