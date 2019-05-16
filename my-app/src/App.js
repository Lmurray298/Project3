import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";

const style ={
  width: "70%",
  height: "80%"

};


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title"> Emergency Map</h1>
        </header>

        <Map google={this.props.google} zoom={14}
        style = {style}
        justify= "left"
        initialCenter={{
          lat: 42.3601,
          lng: -71.0589
        }}
        >
        <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>

      </Map>
        
      </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyAZh-sq69yI6rpXdlr0iBOchlk3O-G21mc")
})(App)
 


