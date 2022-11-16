function calculate(ifade){
    let a = +ifade.slice(0, 1)
    let b = +ifade.slice(-1)
    let m = ifade.slice(2, 3)
    switch(m){
        case "+": console.log(a+b); break;
        case "*": console.log(a*b); break;
        case "-": console.log(a-b); break;
        case "/": console.log(a/b); break;
    }
}
calculate('3 + 5')
calculate('4 * 5')