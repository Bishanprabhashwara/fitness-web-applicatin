import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navibar.css'; // Assuming this is your custom CSS file
import { useCookies } from 'react-cookie';


const Navybar = () => {
  const [cookies] = useCookies(['id', 'password']);
  //const navLinkUrl = cookies.id && cookies.password ? '/running' : '/login';
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary main">
      <div className="container-fluid nav-main-div">
        <a className="navbar-brand" href="#">
          LOGO
        </a>
        <button
          className="navbar-toggler navbar-toggler-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="./images/toggler-icon.png" alt="#" className="navbar-toggler-img" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-item pulse">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
            {cookies.id && cookies.password ? (
                <a className="nav-link" href="/running">
                  Running Tracking
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Running Tracking
                </a>
              )}
            </li>
            <li className="nav-item">
            {cookies.id && cookies.password ? (
                <a className="nav-link" href="/selection">
                  Select Schedule
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Select Schedule
                </a>
              )}
            </li>
            <li className="nav-item">
            {cookies.id && cookies.password ? (
                <a className="nav-link" href="/selection">
                  Select Schedule
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Select Schedule
                </a>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="box" id="search">
              <input type="text" placeholder="Search" />
              <a href="#">
                <img src="search.gif" alt="" width="20px" className="fas fa-search" />
              </a>
            </div>
          </form>
          <form className="d-flex" role="search">
            <button className="btn btn-sm" id="btn-loging" type="submit">
              <img src="./images/profile1.png" alt="" width="20px" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navybar;
