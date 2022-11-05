import { useState } from "react";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import AOS from 'aos';
function Header() {
  const [showHader, setShowHeader] = useState(false);
  AOS.init({
    duration : 2000
  });

  const showHaderNav = () => {
    setShowHeader(true);
  };
  const HideHeaderNav = () => {
    setShowHeader(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <span className="navbar-brand logo-header">
            <FaUser />
          </span>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <div className="countent-menu">
              <div className={!showHader ? "menu-one " : "menu-two"}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-header justify-content-center" >
                  <li className="nav-item" onClick={HideHeaderNav}>
                    <span className="nav-link">Home</span>
                  </li>
                  <li className="nav-item" onClick={showHaderNav}>
                    <span className="nav-link">Link</span>
                  </li>
                  <li className="nav-item" onClick={showHaderNav}>
                    <span className="nav-link active" aria-current="page">
                      Home
                    </span>
                  </li>
                  <li className="nav-item" onClick={showHaderNav}>
                    <span className="nav-link" rel="noopener noreferrer">
                      Link
                    </span>
                  </li>
                </ul>
                {showHader && (
                  <div className="countent">
                    <div className="row">
                      <div className="col-md-2"><span class="badge text-bg-primary">test</span></div>
                      <div className="col-md-2"><span class="badge text-bg-secondary">test</span></div>
                      <div className="col-md-2"><span class="badge text-bg-success">test</span></div>
                      <div className="col-md-2"><span class="badge text-bg-danger">test</span></div>
                      <div className="col-md-2"><span class="badge text-bg-warning">test</span></div>
                      <div className="col-md-2"><span class="badge text-bg-info">test</span></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <span className="logo-header p-2">
              <FaUser />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
