function giveJobToStudent(student, jobName){
  const updatedStudent = { ...student, job: jobName}
  const fullName = updatedStudent.fullName
  const message = `Поздравляем у студента ${fullName} появилась новая работа теперь он ${jobName}`
  alert(message)
  return updatedStudent
}

const student = {
  fullName: "Максимка",
  experienceInMonths: 12,
  stack: ['html', 'css', 'js', 'react']
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
console.log(updatedStudent)