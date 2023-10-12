import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ListingsList from "./ListingsList";
import Home from "./Home";
import PhotoForm from "./PhotoForm";
import ListingForm from "./ListingForm";


/** RoutesList: All routes.
 *
 */

function RoutesList() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignUpForm />} />

      <Route path='/listings' element={<ListingsList />} />
      <Route path='/listings/add' element={<ListingForm />} />
      <Route path='/listings/:listing_id/photos' element={<PhotoForm />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default RoutesList;