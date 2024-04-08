const clientsEstimations = []
function askClientToGiveEstination(){
    const estimation = prompt("как вы оцениваете нашу кофейню от 1 до 10")
    const numEstimation = parseInt(estimation)
    if (!isNaN (estimation) && estimation >= 1 && estimation <= 10){
        clientsEstimations.push(estimation)
    }
}

const goodEstimations = clientsEstimations.filter(e => e <= 5).length
const notGoodEstimations = clientsEstimations.filter(e => e <= 5).length

alert (`Всего положительных оценок ${goodEstimations}`)
alert (`Всего отрицательных оценок ${notGoodEstimations}`)