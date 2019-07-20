import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/Header/Header'
import CategoryBtns from './components/CategoryBtns/CategoryBtns'
import Footer from './components/Footer/Footer'
import TeachForm from './components/TeachForm/TeachForm'
import Landing from './components/layout/Landing'

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
            </Switch>
          </section>
          {/* Testing out the TeachForm */}
          {/* <TeachForm /> */}
          <CategoryBtns />
          <Footer />
        </div>

      </Router>

    )
  }
}

export default App
