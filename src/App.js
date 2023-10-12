import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import jwt_decode from "jwt-decode";
import userContext from "./userContext";

/** App.
 *  Renders Nav and Routes for Sharebnb App. */
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currentUser={currentUser} />
        <RoutesList
          login={login}
          signup={signup}
          currentUser={currentUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
