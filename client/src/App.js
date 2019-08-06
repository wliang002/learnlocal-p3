import React, { Fragment, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/mainDisplay/LoginRegister/Login'
import Register from './components/mainDisplay/LoginRegister/Register'
import Header from './components/mainDisplay/Header/Header'
import CategoryBtns from './components/mainDisplay/CategoryBtns/CategoryBtns'
import Footer from './components/mainDisplay/Footer/Footer'
import TeachForm from './components/allForms/TeachForm/TeachForm'
import TeachersDashboard from './components/teachersView/dashboard/TeachersDashboard'
import MapViewAllClasses from './components/mapFlyOver/MapViewAllClasses'
import Landing from './components/mainDisplay/Landing/Landing'
import Alert from './components/mainDisplay/LoginRegister/Alert'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/allForms/teacherProfileForm/CreateProfile'
import EditProfile from './components/allForms/teacherProfileForm/EditProfile'
import AllTeachers from './components/studentView/teachersDirectory/AllTeachers'
import ClassBySelectTeacher from './components/studentView/teachersDirectory/ClassBySelectTeacher'
import AllCraft from './components/studentView/byCategory/AllCraft'
import AllArt from './components/studentView/byCategory/AllArt'
import AllMovement from './components/studentView/byCategory/AllMovement'
import AllSocial from './components/studentView/byCategory/AllSocial'
import AllOther from './components/studentView/byCategory/AllOther'
import AllCooking from './components/studentView/byCategory/AllCooking'
import AllGarden from './components/studentView/byCategory/AllGarden'
import AllWellness from './components/studentView/byCategory/AllWellness'
import AllCreative from './components/studentView/byCategory/AllCreative'
import AllTechnology from './components/studentView/byCategory/AllTechnology'
import NotFound from './components/mainDisplay/Landing/NotFound'
import StudentForm from './components/allForms/studentSignUpForm/StudentForm'
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
                <Route exact path='/profiles' component={AllTeachers} />
                <Route exact path='/classes/:id' component={ClassBySelectTeacher} />
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
                <PrivateRoute exact path='/dashboard' component={TeachersDashboard} />
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
