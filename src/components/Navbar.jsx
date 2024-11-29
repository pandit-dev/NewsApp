import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-primary "
        data-bs-theme="dark"
      >
        <div className="container-fluid px-4">
          <div className="navbar-brand fs-3">DailyNews</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(e)=>{return e.isActive?"nav-link active badge bg-danger text-light mx-2 mt-2":"nav-link active badge bg-light text-primary mx-2 mt-2"}}
                  to="/"
                  onClick={() => setCategory("general")}
                >
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e)=>{return e.isActive?"nav-link active badge bg-danger text-light mx-2 mt-2":"nav-link active badge bg-light text-primary mx-2 mt-2"}}
                  to="/business"
                  onClick={() => setCategory("business")}
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e)=>{return e.isActive?"nav-link active badge bg-danger text-light mx-2 mt-2":"nav-link active badge bg-light text-primary mx-2 mt-2"}}
                  to="/entertainment"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e)=>{return e.isActive?"nav-link active badge bg-danger text-light mx-2 mt-2":"nav-link active badge bg-light text-primary mx-2 mt-2"}}
                  to="/health"
                  onClick={() => setCategory("health")}
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e)=>{return e.isActive?"nav-link active badge bg-danger text-light mx-2 mt-2":"nav-link active badge bg-light text-primary mx-2 mt-2"}}
                  to="/science"
                  onClick={() => setCategory("science")}
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e)=>{return e.isActive?"nav-link active badge bg-danger text-light mx-2 mt-2":"nav-link active badge bg-light text-primary mx-2 mt-2"}}
                  to="/sports"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e)=>{return e.isActive?"nav-link active badge bg-danger text-light mx-2 mt-2":"nav-link active badge bg-light text-primary mx-2 mt-2"}}
                  to="/technology"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
