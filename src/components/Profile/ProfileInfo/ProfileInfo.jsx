import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileContact/ProfileDataForm';
import ProfileData from './ProfileContact/ProfileData';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

  const [editMode, setEditMode] = useState(false)

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
    <ProfileDataForm profile={profile} deactivateEditMode={()=>{setEditMode(false)}}/> :
    <ProfileData profile={profile} isOwner={isOwner} activateEditMode={()=>{setEditMode(true)}}/>}
    </div>
  )
}


export default ProfileInfo;