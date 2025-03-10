import { Link } from "react-router-dom";

import LogoutButton from "../Login/Logout";
function NavBarKitchen() {
    return (
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Hola Chef!</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <LogoutButton />
    </div>
  </nav>
      </div>
    )
  }
  
  export default NavBarKitchen;