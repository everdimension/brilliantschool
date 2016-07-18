import React, { PropTypes } from 'react';
import './GoogleMap.css';

let scriptLoader;
let mapLoaded;

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.mount = this.mount.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    console.log('didmount');
    if (!mapLoaded) {
      window.initMap = () => {
        console.log('map loaded!...');
        mapLoaded = true;
        delete window.initMap;
        this.initMap();
      };
      scriptLoader = require('scriptjs');
      scriptLoader('//maps.googleapis.com/maps/api/js?callback=initMap');
    } else {
      this.initMap();
    }
  }

  componentWillUnmount() {

  }

  mount(node) {
    console.log('mounted', node);
    this.mapElement = node;
  }

  initMap() {
    console.log('initializing map...');
    const officeCoords = { lat: 55.757230, lng: 37.591102 };
    this.map = new google.maps.Map(this.mapElement, {
      center: officeCoords,
      zoom: 16,
      scrollwheel: false,
    });

    this.marker = new google.maps.Marker({
      position: officeCoords,
      map: this.map,
    });
  }

  render() {
    return <div id="map" ref={this.mount} />;
  }
}

export default GoogleMap;
