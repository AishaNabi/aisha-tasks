Number.prototype.isPrime = function(){
    for(let i=2; i<Math.sqrt(this); i++){
        if(this%i==0) return false
    }
    return true
}
// A: u can make it shorter. just `return this % 2 == 0  😉
Number.prototype.isEven = function() {
    return this%2==0 ? true : false
}
// just same as Line7. 
Number.prototype.isInfinty = function() {
    return this==Infinity ? true : false
}
let num = 2
console.log(num.isPrime())
console.log(num.isEven())
console.log(num.isInfinty())
