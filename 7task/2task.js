function getSumOfSequence(number){
    let sum = [2, 4, 6, 87]
    for (let i = 1; i <= number; i++){
        sum.push(i)
    }
    let result = sum[0] + sum[sum.length - 1]
    return result
}

console.log(getSumOfSequence())