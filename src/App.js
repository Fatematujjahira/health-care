
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
import Register from './pages/register/Signup';
import AuthProvider from './contexts/AuthProvider';
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
          <Route path= "/services">
            <Services></Services>
          </Route>
          <Route path= "/about">
            <About></About>
          </Route>
          <Route path= "/shop">
          <Shop></Shop>
          </Route>
          <Route path= "/contact">
          <Contact></Contact>
          </Route>
          <Route path= "/login">
         <Login></Login>
          </Route>
          <Route path= "/register">
         ,<Register></Register>
          </Route>
          <Route path= "*">
       <NotFound></NotFound>
          </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
