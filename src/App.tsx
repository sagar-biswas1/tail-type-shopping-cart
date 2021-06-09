import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {

  return (
    <Router>
      <Navbar/>
       <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
       </Switch>
    </Router>

  );
}

export default App;
