import "./Navbar.css";
import logo from "../../assets/images/Logo.png";
import { BsDiscord } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Muzo" width={35} />
          <h5 className="fw-bold ms-3 pt-2" style={{ color: "white" }}>
            Muzo
          </h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Roadmap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                NFT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn d-flex ms-md-0 align-items-center py-2 discord fw-bold mt-4 mt-md-0">
            <BsDiscord className="me-2 " /> Join Discord
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
