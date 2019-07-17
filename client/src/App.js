import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import TeachForm from './components/TeachForm'
import Landing from './components/layout/Landing'

class App extends Component {
  render () {
    return (
      <Router>
        <div>

          <Header />
          <section className='container'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
          {/* Testing out the TeachForm */}

          {/* <TeachForm /> */}
          {/* ******Original boilerplate React Code Below: ****** */}
          {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header> */}

          <Footer />
        </div>

      </Router>

    )
  }
}

// function App () {
//   return (
//     <div className='App'>
//       <Header />
//       <header className='App-header'>

//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//       <Footer />
//     </div>
//   )
// }

export default App
