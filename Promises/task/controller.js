const getProductId = (_id) =>{
    return new Promise((resolve, reject)=>{
        const productsid = productServiceDB.getProductId(_id);
        if(productsid){
            resolve({status: 200, statusText: 'OK', data: productsid})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}
const buyProduct = (productIds) => {
    return new Promise((resolve, reject) => {
        const id = productServiceDB.buyProduct(productIds)
        if(id==-1){
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }else{
            resolve({status: 200, statusText: 'OK', data: id})
        }
    })
}
const getProductType = (_type) => {
    return new Promise((resolve, reject)=>{
        const producttype = productServiceDB.getProductType(_type)
        if(producttype){
            resolve({status: 200, statusText: 'OK', data: producttype})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}
const editProduct = (_product) => {
    return new Promise((resolve, reject)=> {
        const product_id = productServiceDB.editProduct(_product)
        if(product_id){
            resolve({status: 200, statusText: 'OK', data: product_id})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}
const addProduct = ({type, price, name, brand}) => {
    return new Promise((resolve, reject)=> {        
        if(!type||!price||!name||!brand){
            reject({status: 400, statusText: 'BAD REQUEST', data: null})
        }else{
            const new_product = productServiceDB.addProduct({type, price, name, brand})
            resolve({status: 200, statusText: 'OK', data: new_product})
        }
    })
}
const deleteProduct = (p_id) => {
    return new Promise((resolve, reject)=> {
        const _id = productServiceDB.deleteProduct(p_id)
        if(_id){
            resolve({status: 200, statusText: 'OK', data: _id})
        }else{
            reject({status: 404, statusText: 'NOT FOUND', data: null})
        }
    })
}





editProduct({id: 3, price: 0.90}).then(({data})=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
getProductType('shire').then(({data})=>{
console.log(data)
}).catch((err)=>{
console.log(err)
})
getProductId(9).then(({data})=>{
console.log(data)
}).catch((err)=>{
console.log(err)
})
setTimeout(()=>{
    addProduct({type: "qida", price: 1.00, name: "sokolad", brand: "milky"}).then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log(err)
})
}, 300)
setTimeout(()=>{
deleteProduct(4).then((resp)=>{
    console.log(resp)
}).catch((err)=>{
    console.log(err)
})
}, 600)
setTimeout(()=>{
    buyProduct([2, 7]).then(({data})=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}, 900)