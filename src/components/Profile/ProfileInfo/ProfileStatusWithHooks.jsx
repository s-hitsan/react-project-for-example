import { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditeMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => { 
    setStatus(props.status) }, 
    [props.status])

  const activateEditeMode = () => {
    setEditeMode(true)
  }

  const deactivateEditeMode = () => {
    setEditeMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditeMode} >{props.status || 'No status'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onStatusChange} onBlur={deactivateEditeMode} autoFocus={true} value={status}></input>
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;