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
import Regestration from './Components/Regestration/Regestration';
import Appoinment from './Components/Appoinment/Appoinment';
import Authprovider from './context/Authprovider';
import Department from './Components/Department/Department';
import Doctors from './Components/Doctors/Doctors';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import User from './Components/User/User';


function App() {
  
  return (
    <div className="App">
      <Authprovider>
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
                <Route  exact path="/department" component={Department}>
                  <Department></Department>
                </Route>
                <PrivateRoute exact path="/appoinment" component={Appoinment}>>
                  <Appoinment></Appoinment>
                </PrivateRoute>
    
                <PrivateRoute exact path="/doctors" component={Doctors}>
                  <Doctors></Doctors>
                </PrivateRoute>
                <Route  exact path="/login" component={Login}>
                  <Login></Login>
                </Route>
                <Route  exact path="/regestration" component={Regestration}>
                  <Regestration></Regestration>
                </Route>
                <PrivateRoute exact path="/user" component={User}>
                  <User></User>
                </PrivateRoute>


                {/* Page Not Found */}
                <Route exact path="*">
                  <NotFound></NotFound>

                </Route>
              </Switch>
            </Router>
      </Authprovider>
     
      <Footer></Footer>



      
    </div>
  );
  }
export default App;
