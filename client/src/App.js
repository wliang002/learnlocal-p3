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
import MapViewAllClasses from './components/ClassDisplays/MapViewAllClasses'
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
import AllCooking from './components/StudentView/ByCategory/AllCooking'
import AllGarden from './components/StudentView/ByCategory/AllGarden'
import AllWellness from './components/StudentView/ByCategory/AllWellness'
import AllCreative from './components/StudentView/ByCategory/AllCreative'
import AllTechnology from './components/StudentView/ByCategory/AllTechnology'
import NotFound from './components/Landing/NotFound'
import StudentForm from './components/TeachForm/StudentForm'
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
          <div className='main-container'>
            <section>
              <Alert />
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/classes/:id' component={Profile} />
                <Route exact path='/allclasses' component={AllEvents} />
                <Route exact path='/craft' component={AllCraft} />
                <Route exact path='/art' component={AllArt} />
                <Route exact path='/cooking' component={AllCooking} />
                <Route exact path='/garden' component={AllGarden} />
                <Route exact path='/wellness' component={AllWellness} />
                <Route exact path='/movement' component={AllMovement} />
                <Route exact path='/creative' component={AllCreative} />
                <Route exact path='/technology' component={AllTechnology} />
                <Route exact path='/social' component={AllSocial} />
                <Route exact path='/other' component={AllOther} />
                <Route exact path='/sign-up/:userId/:id' component={StudentForm} />
                <PrivateRoute exact path='/dashboard' component={TeacherProfile} />
                <PrivateRoute exact path='/add-classes' component={TeachForm} />
                <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                <Route exact path='/map-all-classes' component={MapViewAllClasses} />
                <Route component={NotFound} />
              </Switch>
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
