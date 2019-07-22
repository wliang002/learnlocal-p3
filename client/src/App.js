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
                <PrivateRoute exact path='/dashboard' component={TeacherProfile} />
                <PrivateRoute exact path='/teachform' component={TeachForm} />
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
