import React, { Component, Fragment, useEffect } from 'react'
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
// Redux
import { Provider } from 'react-redux'
import stroe from './store'

class App extends Component {
  render () {
    return (
      <Provider store={stroe}>
        <Router>
          <Fragment>
            <Header />
            <div>
              <section>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/teacher-profile' component={TeacherProfile} />
                  <Route exact path='/teachform' component={TeachForm} />
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
}

export default App
