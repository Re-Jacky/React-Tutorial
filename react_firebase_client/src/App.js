import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import store, { rrfProps }  from './store'

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";
import LogIn from "./components/auth/LogIn";
import Registration from "./components/auth/Registration";
import NotFound from "./components/pages/NotFound";
import Settings from "./components/settings/Settings";
import { UserIsAuthenticated, UserIsNotAuthenticated} from "./helpers/auth";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>  
          <div className="App">
              <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={UserIsAuthenticated(Dashboard)}></ Route>
                  <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)}></Route>
                  <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)}></Route>
                  <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)}></Route>
                  <Route exact path="/login" component={UserIsNotAuthenticated(LogIn)}></Route>
                  <Route exact path="/settings" component={UserIsAuthenticated(Settings)}></Route>
                  <Route exact path="/register" component={UserIsNotAuthenticated(Registration)}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
