import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/Nav";
import { Container} from "./components/Grid";
import { ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import {ToastProvider, useToasts} from "react-toast-notifications"

function App(){

  
    return (
      <div>
      
        <Nav/>
        <Router>
          <Container>
          {/* <ToastContainer/> */}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            transition={Zoom}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseOnHover
          />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/bookshelf" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      
      </div>
    );
  
}

export default App;