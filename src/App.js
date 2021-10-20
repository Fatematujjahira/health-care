
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './component/header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services'
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Contact from './Contact/Contact';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

import AuthProvider from './contexts/AuthProvider';
import Reset from './pages/reset/Reset';
import Signup from './pages/register/Signup';
import Details from './pages/Detail/Details/Details';
import Footer from './pages/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
         </Route>
          <Route path= "/home">
            <Home></Home>
          </Route>
          <Route path= "/service">
            <Services></Services>
          </Route>
          <Route path= "/about">
            <About></About>
          </Route>
          <PrivateRoute path= "/shop">
          <Shop></Shop>
          </PrivateRoute>
          <Route path= "/contact">
          <Contact></Contact>
          </Route>
          <Route path= "/login">
         <Login></Login>
          </Route>
          <Route path= "/signup">
         <Signup></Signup>
          </Route>
          
          <Route path="/reset">
              <Reset></Reset>
            </Route>

          <PrivateRoute path="/details/:serviceId">
              <Details></Details>
          </PrivateRoute>

          <Route path= "*">
       <NotFound></NotFound>
          </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
