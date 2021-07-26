import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader';
import store from './redux/redux-store';
import { compose } from 'redux';
const Music = React.lazy(() => import('./components/Music/Music'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
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
            <Route path='/news' render={() => <News />} />
            <Route path='/settings' render={() => <Settings />} />
          </Suspense>
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
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
  return <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp