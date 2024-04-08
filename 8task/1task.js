const users = [
  { username: 'David', status: 'online', listactivity: 10 },
  { username: 'Lucy', status: 'offline', listactivity: 22 },
  { username: 'Bob', status: 'online', listactivity: 104 }
]

const onlineUsers = users.filter(user => user.status === 'online')
const usersOnlineNames = onlineUsers.map(user => user.username).join(', ')
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)