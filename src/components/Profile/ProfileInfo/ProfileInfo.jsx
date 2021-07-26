import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'


const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={s.descriptionBlock}>
      <img className={s.ProfileImg} src={profile.photos.large != null ? profile.photos.large : userPhoto} />
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;