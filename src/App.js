import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
// import jwt_decode from "jwt-decode";
import userContext from "./userContext";
import PhotoForm from './PhotoForm';
import ShareBnbApi from './api';

/** App.
 *  Renders Nav and Routes for Sharebnb App. */
function App() {
  const [currUser, setCurrUser] = useState({});

  /** logs a user in */
  async function login(formData) {
    const token = await ShareBnbApi.login(formData);

    localStorage.setItem("token", token);
    setToken(token);
  }

  /** registers a user */
  async function signup(formData) {
    const token = await ShareBnbApi.register(formData);

    localStorage.setItem("token", token);
    setToken(token);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <NavBar currentUser={currentUser} />
  //       <RoutesList
  //         login={login}
  //         signup={signup}
  //         currentUser={currentUser} />
  //     </BrowserRouter>
  //   </div>
  // );
}

export default App;
