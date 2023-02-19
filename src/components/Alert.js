import React from 'react'

function Alert(props) {
  return (
    <>
    {props.alertMessage !== null && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertMessage.text}</strong> {props.alertMessage.subText}
    </div>}
    </>
  )
}

export default Alert