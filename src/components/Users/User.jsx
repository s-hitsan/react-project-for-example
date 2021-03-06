import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

let User = ({ user, followingInProgress, unfollow, follow }) => {

  return <div className={s.item}>
    <span>
      <div>
        <NavLink to={'/profile/' + user.id}>
          {<img src={user.photos.small != null ? user.photos.small : userPhoto} />}
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button>
          : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>}
      </div>
    </span>
    <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
    </span>
  </div>;
}

export default User