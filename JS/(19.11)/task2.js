Object.prototype.objLength = function(){
    let length = 0
    for(key in this)
        // A: no need to check. for in only takes fields
    if(this.hasOwnProperty(key)) length++
    return length
}
let obj = {
    name: "a",
    age: 18
};
Object.prototype.firstProperty = function(){
    return Object.values(this)[0]
}
Object.prototype.lastProperty = function(){
    return Object.values(this)[this.objLength()-1]
}
console.log(obj.objLength())
console.log(obj.firstProperty())
console.log(obj.lastProperty())
