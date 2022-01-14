import react from 'react'

const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }
  if (isError) {
    return (
      <div className="error">
        <h2>{message}</h2>
      </div>
    )
  } else return (
    <div className="notif">
      <h2>{message}</h2>
    </div>
  )
}

export default Notification