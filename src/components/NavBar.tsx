import {SearchIcon} from '@shopify/polaris-icons';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Integrations</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tracking Page
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Partner with Us</a>
        </li>
        <li className="nav-item">
            {/* Example usage of the SearchIcon */}
            <span className="nav-link">
              <SearchIcon />
            </span>
          </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;
