function IsPrime(n){
    let count=0;
    for(let i=1; i<=n; i++){
        if(n%i==0) count++;
    }
    return count==2 ? true : false; 
}
console.log(IsPrime(5))
console.log(IsPrime(8))