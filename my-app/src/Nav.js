import React from 'react';

import './Streets.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"> Durham Emergency Map</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                  <a className="nav-link" href="/">Logout</a>
                </li>
                
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-1" type="search" placeholder="Street Filter" aria-label="Search" />
               
              </form>
            </div>
          </nav>
        )
    }
}

export default Nav;