import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, HashRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader';
import store from './redux/redux-store';
import { compose } from 'redux';
const Music = React.lazy(() => import('./components/Music/Music'));
const Login = React.lazy(() => import('./components/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path='/music' render={() => <Music />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/users' render={() => <UsersContainer />} />
          </Suspense>
          <Route path='/news' render={() => <News />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App)

const SamuraiJSApp = (props) => {
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp