import React, { Component } from 'react';
import './app.css';
import ReactMapGL, { Marker } from 'react-map-gl';


const accessToken = process.env.MAPBOX_TOKEN;

class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      you_are_here: null,
      viewport: {
        latitude: 39.7392,
        longitude: -104.9903,
        zoom: 8
      }
    };
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
    }
  }

  showPosition = (position) => {
    this.setState((prev_state) => {
      prev_state.you_are_here = {};
      prev_state.you_are_here.latitude = position.coords.latitude;
      prev_state.you_are_here.longitude = position.coords.longitude;
      prev_state.viewport.latitude = position.coords.latitude;
      prev_state.viewport.longitude = position.coords.longitude;
      return prev_state;
    });
  }

  onViewportChange = viewport => {
    const { width, height, ...etc } = viewport
    this.setState({ viewport: etc })
  }

  render() {
    const {
      viewport, you_are_here
    } = this.state;
    return (
      <div style={{ width: "100vw", height: "100vh", textAlign: "start" }}>
        <ReactMapGL
          width='100vw'
          height='100vh'
          mapboxApiAccessToken={accessToken}
          {...viewport} onViewportChange={(viewport) => this.onViewportChange(viewport)}
        >
          {you_are_here ? 
           <Marker latitude={you_are_here.latitude} longitude={you_are_here.longitude} offsetLeft={-20} offsetTop={-10}>
            <div>You are here</div>
          </Marker>
          : ""}
        </ReactMapGL>
      </div>
    );
  }
}

export default App;