import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';


function App() {
  
  return (
    <div className="App">
      <Router>
      <Header></Header>
       <Switch>
       <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home" component={Home}>
            <Home></Home>
          </Route>
          <Route  exact path="/About" component={About}>
            <About></About>
          </Route>
          <Route  exact path="/login" component={Login}>
            <Login></Login>
          </Route>


          {/* Page Not Found */}
          <Route exact path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>
      </Router>
      <Footer></Footer>



      
    </div>
  );
  }
export default App;
