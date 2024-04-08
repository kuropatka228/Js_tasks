function giveTalonsInOrder(patients, orders){
  const sortedPatients = patients.sort((a, b) => {
    return orders.indexOf(a.id) - orders.indexOf(b.id)})
  return sortedPatients
}

const ordersArr = [2, 3, 1, 4]
const people = [
  {id: 1, name: "Максим"},
  {id: 2, name: "Николай"},
  {id: 3, name: "Ангелина"},
  {id: 4, name: "Виталий"}
]

const result = giveTalonsInOrder(people, ordersArr)
console.log('result', result)