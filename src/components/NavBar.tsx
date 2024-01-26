// import { SearchIcon, PersonIcon, SettingsIcon } from "@shopify/polaris-icons";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5 py-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Integrations</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tracking Page
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action 1</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">Partner With Us</a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <form className="d-flex" role="search">
            <input className="me-2 border-0" type="search" placeholder="Search" aria-label="Search" style={{ borderBottom: '2px solid #000' }} />
            </form>

            <li className="nav-item">
              <a className="nav-link">Account</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default NavBar;
