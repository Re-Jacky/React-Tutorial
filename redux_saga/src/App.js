import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import WeatherMain from './components/layout/weather/WeatherMain';
import Welcome from './components/layout/Welcome';
import Joker from './components/layout/joker/Joker';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"><Welcome /></Route>
          <Route exact path="/weather"><WeatherMain /></Route>
          <Route exact path="/joker"><Joker /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
