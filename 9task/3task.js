function addDays(date, days = 1){
  const timestamp = date.getTime() + (days * 24 * 60 * 60 * 1000)
  return new Date(timestamp)
}
const currentDate = new Date()
const futureDate = addDays(currentDate, 7)
console.log(futureDate)