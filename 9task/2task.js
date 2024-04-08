function convertMsToDays(milliseconds){
  return Math.round(milliseconds / (1000 * 60 * 60 * 24))
}

function getDaysBeforeBirthday(nextBirthdayDate){
  const today = new Date()
  const currentYear = today.getFullYear()
  const nextBirthday = new Date(currentYear, nextBirthdayDate.getMonth(), nextBirthdayDate.getDate())
  if (today > nextBirthday){
    nextBirthday.setFullYear(currentYear + 1)
  }
  const daysUntilNextBirthday = convertMsToDays(nextBirthday - today)
  return daysUntilNextBirthday
}

const nextBirthdayDate = new Date('2005-06-25')
const daysUntilNextBirthday = getDaysBeforeBirthday(nextBirthdayDate)
console.log(`до вашего дня рождения осталось ${daysUntilNextBirthday} дней`)