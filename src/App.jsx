import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  About,
  Contact,
  // Faq,
  Services,
  Footer,
  Header,
  Home,
  // Newsletter,
  Preloader,
  Portfolios,
  StyleSwitcher,
  Testinomial,
} from './components/'
import Error from './components/Error'

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Preloader />
        <Switch className='p-0'>
          <Route exact path='/'>
            <React.Fragment>
              <Header />
              <Home />
              <About />
              <Services />
              <Portfolios />
              <Testinomial />
              {/* <Faq /> */}
              {/* <Newsletter /> */}
              <Contact />
              <Footer />
              <StyleSwitcher />
            </React.Fragment>
          </Route>
          <Route>
            <Header />
            <Error />
            <Footer />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}
