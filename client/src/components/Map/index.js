import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../CurrentLocation/map.js';
import MapContainer from "../MapContainer/index.js"
import Nav from "../Nav/index.js"

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

function mapDisplay() {
  return (
    <section className="hero is-fullheight is-bold">
        <Nav/>
        <div className="hero-body">
            <div className="container">
              <div className="box">
              <MapContainer/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Map;