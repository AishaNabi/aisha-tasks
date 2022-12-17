// 1. buyProduct(id: [1,23,45,67,84]) // bu id-li product-lari ordan silmelidir. ve, yekun price-i bize qaytarmalidir. 

// 2. getProduct(id) // melumat getirmelidir. Mehsulu almir, sadece melumat xarakterlidir. 

// 3. getProduct(type)  // shireleri falan category uzre

// 4. editProduct (product)  // edit-lemek

// 5. deleteProduct(id) // xarab olmus mehsul

// 6. addProduct(product) // mehsul elave etmek.

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