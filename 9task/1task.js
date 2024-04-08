function getDateFormat(date, separator = '.'){
  const day = date.getDate().toString().padStart(2,'0')
  const month = (date.getMonth() + 2).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}${separator}${month}${separator}${year}`
}

const today = new Date()
const formattedDate = getDateFormat(today, '.')
console.log(formattedDate)