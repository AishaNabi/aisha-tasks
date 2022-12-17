const productServiceDB = {
    getProductId: (_id) => db.product.find(({id}) => id === _id),
    getProductType: (_type) => db.product.filter(({type}) => _type === type),
    editProduct: (_product) => {
        if(!db.product.find(({id}) => _product.id === id)){
            return -1;
        }
        db.product = db.product.map((elem)=>{
            if(elem.id === _product.id){
                elem.price = _product.price
            } 
            return elem
        })
        return _product
    },
    deleteProduct: (id) => {
        //db.product = db.product.map((p_id)=> id !== p_id)
        db.product = db.product.filter(({id})=> id !== id)
        return id
    },
    addProduct: ({type, name,  price, brand}) => {
        const _Id = Math.floor(Date.now() / 360000)  
        db.product = db.product.concat({id: _Id, type, price, name, brand})
        return _Id
    },    
    buyProduct: (productIds) => {
        const sum = productIds.reduce((cem, id)=>{
            let new_pro = productServiceDB.getProductId(id)
            productServiceDB.deleteProduct(id)
            return cem + new_pro.price
        }, 0)
        return sum
    },
}