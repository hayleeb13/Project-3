import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from "../CurrentLocation/map.js";
import $ from "jquery"
// import Nav from "../Nav/index.js";
// import "../Map/style.css";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      selectedGyms: {},
      gyms: []
    };
  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    componentDidMount() {
        


        var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.7157,-117.1611&radius=16000&type=gym&keyword=gym&key=AIzaSyBpAnHTdTlRhR2CnLcIfJTFszrI_YcaJ7Q`;
        
        $.ajaxPrefilter(function(options) {
          if (options.crossDomain && $.support.cors) {
              options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
          }
        });

        $.ajax({
                url: url,
                dataType: 'json',
                method: "GET"
            })
                .then(response => {
                    console.log('GYM RESULTS!!!', response)

                    var result = [];
                    for (let i = 0; i < response.results.length; i++) {
                      let tempObj = {}
                      tempObj["geocodes"] = response.results[i].geometry.location;
                      tempObj["name"] = response.results[i].name;
                      tempObj["address"] = response.results[i].vicinity;
                      result.push(tempObj)
                    }
                    console.log("result", result)
                    this.setState({...this.state, gyms: result})
                    console.log("state", this.state.gyms)
                })
      }

    render() {
      return (
        // <section className="hero is-fullheight is-bold">
        //     <Nav/>
        //         <div className="hero-body">
        //             <div className="container">
        //                 <div className="box">
                            <CurrentLocation
                            centerAroundCurrentLocation
                            google={this.props.google}
                            >
                            <Map 
                                google={this.props.google} 
                                zoom={12}
                                style={mapStyles}
                                initialCenter={{ lat: 32.7157, lng: -117.1611 }}>
                                <Marker onClick={this.onMarkerClick} name={'Current Location'} 
                                />
                                {
                                  this.state.gyms.map(result => <Marker onClick={this.onMarkerClick} name={result.name + ": " + result.address} position={result.geocodes}/>)
                                }

                                <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                                >
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                </div>
                                </InfoWindow>
                            </Map>
                            </CurrentLocation>
        //                 </div>
        //             </div>
        //         </div>
        // </section>
      );
    }
  }
  
  
  export default GoogleApiWrapper(
      (props) => ({
        apiKey: 'AIzaSyBpAnHTdTlRhR2CnLcIfJTFszrI_YcaJ7Q',
      }
    ))(MapContainer)