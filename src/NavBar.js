import { NavLink } from "react-router-dom";

/** NavBar: displays navbar
 *
 *
 */
function NavBar({ logout, currUser = null }) {
  /** renders if user is not logged in */
  function notLoggedIn() {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }

  function loggedIn() {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/listings/add">Add a new listing</NavLink>
        </li>
        <button
          className='btn link-danger text-decoration-none'
          onClick={logout}>Log Out</button>
      </>
    );
  }

  return (
    <nav className="Nav navbar navbar-light navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/listings">ShareBnB</NavLink>

        <ul className="list-unstyled">
          {currUser
            ? loggedIn()
            : notLoggedIn()
          }
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;