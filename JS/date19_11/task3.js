Number.prototype.isPrime = function(){
    for(let i=2; i<Math.sqrt(this); i++){
        if(this%i===0) return false
    }
    return true
}
Number.prototype.isEven = function() {
    return this%2===0 ? true : false
}
Number.prototype.isInfinty = function() {
    return this === Infinity ? true : false
}
let num = 5
console.log(num.isPrime())
console.log(num.isEven())
console.log(num.isInfinty())