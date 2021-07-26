import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollow, follow }) => {

  return (
    <div>

      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount} pageSize={pageSize} />

      <div>
        {users.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)}
      </div>
      
    </div>
  )
}

export default Users