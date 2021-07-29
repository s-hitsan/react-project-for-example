import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {


  return (
    <div className={s.profilePage}>
      <ProfileInfo profile={props.profile}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;