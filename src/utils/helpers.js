export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question
  const { name, avatarURL } = author
  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOne: optionOne.votes.length,
    optionTwo: optionTwo.votes.length,
  
    
  }
}

