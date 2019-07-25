import React, { Fragment, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/LoginRegister/Login'
import Register from './components/LoginRegister/Register'
import Header from './components/Header/Header'
import CategoryBtns from './components/CategoryBtns/CategoryBtns'
import Footer from './components/Footer/Footer'
import TeachForm from './components/TeachForm/TeachForm'
import TeacherProfile from './components/ClassDisplays/TeacherProfile'
import LearnByCategory from './components/ClassDisplays/LearnByCategory'
import Landing from './components/Landing/Landing'
import Alert from './components/LoginRegister/Alert'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/TeachForm/CreateProfile'
import EditProfile from './components/TeachForm/EditProfile'
import Profiles from './components/TeachersDisplays/Profiles'
import Profile from './components/StudentView/Profile'
import AllEvents from './components/StudentView/AllEvents'
import AllCraft from './components/StudentView/ByCategory/AllCraft'
import AllArt from './components/StudentView/ByCategory/AllArt'
import AllMovement from './components/StudentView/ByCategory/AllMovement'
import AllSocial from './components/StudentView/ByCategory/AllSocial'
import AllOther from './components/StudentView/ByCategory/AllOther'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  // runs when it's mounted same as componentdidmount
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <div>
            <section>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/classes/:id' component={Profile} />
                <Route exact path='/allclasses' component={AllEvents} />
                <Route exact path='/craft' component={AllCraft} />
                <Route exact path='/art' component={AllArt} />
                <Route exact path='/movement' component={AllMovement} />
                <Route exact path='/social' component={AllSocial} />
                <Route exact path='/other' component={AllOther} />
                <PrivateRoute exact path='/dashboard' component={TeacherProfile} />
                <PrivateRoute exact path='/add-classes' component={TeachForm} />
                <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                <Route exact path='/learn-by-category' component={LearnByCategory} />
              </Switch>
              <Alert />
            </section>
            <CategoryBtns />
            <Footer />
          </div>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
