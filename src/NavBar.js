import { NavLink } from "react-router-dom";

/** NavBar: displays navbar
 *
 *
 */
function NavBar() {
  return (
    <nav className="Nav navbar navbar-light navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/listings">ShareBnB</NavLink>

        <ul className="list-unstyled">
          <li className="nav-item">
            <NavLink className="nav-link" to="/listings/add">Add a new listing</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;