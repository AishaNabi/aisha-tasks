let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]

function countEvensAndOdds(numbers) {
    let evenCount = 0
    let oddsCount = 0
    for (num of numbers) {
        if(num % 2 === 0)
            evenCount++
        else{
            oddsCount++
        }
    }
    return `evens: ${evenCount}, odds: ${oddsCount}`
}
console.log(countEvensAndOdds(numbers))