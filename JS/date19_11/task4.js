String.prototype.toCapitalize = function (){
    return this[0].toUpperCase() + this.slice(1, this.length)
}
String.prototype.removeWhiteSpaces = function() {
    return this.replace(" ", "")
}
String.prototype.filterDigits = function (){
    let str = this.split("")
    let a = []
    str.forEach(elem =>{
        if(!isNaN(elem)) a.push(elem)
    }) 
    return a
}
let str = "test"
let str1 = "t est"
let str2 = "t1e2s3t4"
console.log(str1.removeWhiteSpaces())
console.log(str.toCapitalize())
console.log(str2.filterDigits())