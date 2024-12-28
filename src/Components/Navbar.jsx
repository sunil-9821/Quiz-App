import React from "react";

function Navbar({ mode, toggleMode }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary shadow"
      data-bs-theme={mode}
    >
      <div className="container-fluid px-5">
        <a className="navbar-brand " href="#">
          Quiz App
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={toggleMode}
            />
            <label
              className={`form-check-label text-${
                mode === "secondary" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {mode === "secondary" ? "Enable Dark mode" : "Enable light mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
