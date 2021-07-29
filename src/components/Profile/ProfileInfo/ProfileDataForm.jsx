const ProfileDataForm = ({ profile, deactivateEditeMode }) => {
  return (
    <div>
      <div>
        <div>
          <b>{profile.fullName}</b>
        </div>
        <div>
          <b>Looking for a job</b> : <input type={'checkbox'}/>
        </div>
        {profile.lookingForAJob && <div>
          <b>My professional skills</b> : {profile.lookingForAJobDescription}
        </div>}
        <div>
          {profile.aboutMe ? <div>About me: {profile.aboutMe}</div> : null}
        </div>
      </div>
      <button onClick={deactivateEditeMode}>Save</button>
    </div>
  )
}

export default ProfileDataForm