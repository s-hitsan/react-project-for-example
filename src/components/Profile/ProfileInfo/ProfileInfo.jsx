import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

  const [editMode, setEditeMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.descriptionBlock}>
      <img className={s.ProfileImg} src={profile.photos.large || userPhoto} />
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    {editMode ? 
    <ProfileDataForm profile={profile} deactivateEditeMode={()=>{setEditeMode(false)}}/> : 
    <ProfileData profile={profile} isOwner={isOwner} activateEditeMode={()=>{setEditeMode(true)}}/>}
    </div>
  )
}

const ProfileData = ({ profile, isOwner, activateEditeMode }) => {
  return (
    <div>
      {isOwner && <button onClick={activateEditeMode}>Edit</button>}
      <div>
        <div>
          <b>{profile.fullName}</b>
        </div>
        <div>
          <b>Looking for a job</b> : {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob && <div>
          <b>My professional skills</b> : {profile.lookingForAJobDescription}
        </div>}
        <div>
          {profile.aboutMe ? <div>About me: {profile.aboutMe}</div> : null}
        </div>
      </div>
      <div className={s.contactTab}>
        <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b> : {contactValue}
    </div>)
}

export default ProfileInfo;