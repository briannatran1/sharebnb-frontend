import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
// import jwt_decode from "jwt-decode";
import userContext from "./userContext";
import PhotoForm from './PhotoForm';

/** App.
 *  Renders Nav and Routes for Sharebnb App. */
function App() {

  const [currUser, setCurrUser] = useState(null);



  // return (
  //   <div className="App">
  //     <PhotoForm />
  //   </div>
  // );
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
