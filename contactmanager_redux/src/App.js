import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/layout/Header'
import Contacts from './component/contacts/Contacts'
import AddContact from './component/contacts/AddContact'
import EditContact from './component/contacts/EditContact'
import About from './component/pages/About'
import NotFound from './component/pages/NotFound'

import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path='/'><Contacts /></Route>
                <Route exact path='/contact/add'><AddContact /></Route>
                <Route exact path='/contact/edit/:id'><EditContact /></Route>
                <Route exact path='/about'><About /></Route>
                <Route ><NotFound /></Route>
              </Switch>
            </div>  
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
