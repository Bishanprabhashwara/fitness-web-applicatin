import React from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.png'
import { useCookies } from 'react-cookie';

function Header() {
  const [cookies] = useCookies(['id', 'password']);
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li><a className="nav-link" href="/Home">
                  Home
                </a></li>

                <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/login">
                  Login
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Login
                </a>
              )}</li>

              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/exercieseqp">
                  LogOut
                </a>
              ) : (
                <a className="nav-link" href="/register">
                  Register
                </a>
              )}</li>



            <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/running">
                  Running Tracking
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Running Tracking
                </a>
              )}
              </li>

            

            <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/selection">
                  Select Schedule
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Select Schedule
                </a>
              )}</li>

              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/bmi">
                  profile
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  profile
                </a>
              )}</li>


              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/exercies">
                  Schedule
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Schedule
                </a>
              )}</li>

              <li>{cookies.id && cookies.password ? (
                <a className="nav-link" href="/exercieseqp">
                  Machines
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Machines
                </a>
              )}</li>
            
        </ul>
    </div>
  )
}

export default Header