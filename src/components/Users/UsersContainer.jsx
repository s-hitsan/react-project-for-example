import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, requestUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/preloader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/user-selectors';


class UsersContainer extends React.Component {

  componentDidMount() {
    const {pageSize, currentPage, requestUsers} = this.props;
    requestUsers(pageSize, currentPage)
  }

  onPageChanged = (pageNumber) => {

    const {requestUsers, pageSize, setCurrentPage } = this.props

    requestUsers(pageSize, pageNumber)
    setCurrentPage(pageNumber)
  }


  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}


export default
  compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, requestUsers })
  )(UsersContainer)