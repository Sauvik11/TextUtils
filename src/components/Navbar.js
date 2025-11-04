import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.backgroundColor.navback} bg-${props.backgroundColor.navback}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:props.textColor}} >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color:props.textColor}} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:props.textColor}} to="/About">{props.aboutText}</Link>
            </li>
          </ul>
          
          <form className="d-flex" role="search" style={{color:props.textColor}}>
             <div className="form-check form-switch  mx-2">
              <input className="form-check-input"  id="green" value='Green' disabled={props.mode !== 'light' && props.mode !== 'green'}  onClick={props.togglemode} type="checkbox" role="switch"/>
              <label className="form-check-label" for="flexSwitchCheckDefault">Green</label>
            </div>
            <div className="form-check form-switch mx-2">
              <input className="form-check-input" id="yellow" value='Yellow'  disabled={props.mode !== 'light' && props.mode !== 'yellow'}  onClick={props.togglemode} type="checkbox" role="switch" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Yellow</label>
            </div>
            <div className="form-check form-switch mx-2">
              <input className="form-check-input" id="purple" value='Purple' disabled={props.mode !== 'light' && props.mode !== 'purple'}  onClick={props.togglemode} type="checkbox" role="switch" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Purple</label>
            </div>
             <div className="form-check form-switch mx-2">
               <input className="form-check-input" id="dark" value='Dark' disabled={props.mode !== 'light' && props.mode !== 'dark'} onClick={props.togglemode} type="checkbox" role="switch" />
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
            </div>
           
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
        </div>
      </div>
    </nav>
  )
}

// ✅ Correct property name
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}