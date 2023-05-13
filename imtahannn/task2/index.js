function propertyTaker(obj, key) {
    console.log(obj[key])
}

propertyTaker({ continent: 'Asia', country: 'Japan' }, 'continent') // 'Asia' 
propertyTaker({ country: 'Sweden', continent: 'Europe' }, 'country')  // 'Sweden' 
propertyTaker({ name: 'ali', age: 12 }, 'name')  // 'ali'