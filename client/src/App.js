import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/Header/Header'
import CategoryBtns from './components/CategoryBtns/CategoryBtns'
import Footer from './components/Footer/Footer'
import TeachForm from './components/TeachForm/TeachForm'
import TeacherProfile from './components/TeacherProfile/TeacherProfile'
import LearnByCategory from './components/LearnByCategory/LearnByCategory'
import Landing from './components/Landing/Landing'

class App extends Component {
  render () {
    return (
      <Router>
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
          </section>
          <CategoryBtns />
          <Footer />
        </div>

      </Router>

    )
  }
}

export default App
