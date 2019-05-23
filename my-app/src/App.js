import React, { Component } from "react";
import Nav from './Nav';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import SideNav from './Streets';

import './App.css';

const style ={
  width: "70%",
  height: "90%"
};

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <SideNav/>
  
        <Map google={this.props.google} zoom={15}
        style = {style}
        justify= "left"
        initialCenter={{
          lat: 43.1340,
          lng: -70.9264
        }}
        >
        <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>

      </Map>

      </div>
      
      )
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyAZh-sq69yI6rpXdlr0iBOchlk3O-G21mc")
})(App)
 