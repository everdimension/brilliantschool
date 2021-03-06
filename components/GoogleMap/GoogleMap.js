/* global google */
import React from 'react'
import './GoogleMap.css'

const API_KEY = 'AIzaSyAOsxnjLHuwUVL6HVjik_moNSqAtULtc6E'
// const API_KEY = ''
const OFFICE_COORDS = { lat: 55.757230, lng: 37.591102 }

let scriptjs
let map
let mapLoaded
let mapNodeInstance

class GoogleMap extends React.Component {
  constructor () {
    super()
    this.state = {
      shouldReattachPreviousMap: false,
    }
    this.mount = this.mount.bind(this)
    this.mountReattachNode = this.mountReattachNode.bind(this)
    this.initMap = this.initMap.bind(this)
  }

  componentWillMount () {
    if (mapNodeInstance && mapLoaded) {
      this.previousMapElement = mapNodeInstance
      this.setState({ shouldReattachPreviousMap: true })
    }
  }

  componentDidMount () {
    if (this.state.shouldReattachPreviousMap) {
      this.reattachNode.appendChild(this.previousMapElement)
      return
    }
    if (!scriptjs) {
      scriptjs = require('scriptjs')
    }

    if (!mapLoaded) {
      window.initMap = () => {
        console.log('map loaded!...')
        mapLoaded = true
        delete window.initMap
        this.initMap()
      }
      scriptjs(`//maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`)
    } else {
      this.initMap()
    }
    mapNodeInstance = this.mapElement
  }

  mount (node) {
    this.mapElement = node
  }

  mountReattachNode (node) {
    this.reattachNode = node
  }

  initMap () {
    map = new google.maps.Map(this.mapElement, {
      center: OFFICE_COORDS,
      zoom: 16,
      scrollwheel: false,
      mapTypeControl: false,
    })

    const markerImage = {
      url: require('../../assets/img/map-marker_sm_blue.png'),
      size: new google.maps.Size(40, 55),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(20, 55),
    }

    this.marker = new google.maps.Marker({
      position: OFFICE_COORDS,
      map,
      icon: markerImage,
    })
  }

  render () {
    if (this.state.shouldReattachPreviousMap && this.previousMapElement) {
      return <div ref={this.mountReattachNode} />
    }
    return <div ref={this.mount} id="map" />
  }
}

export default GoogleMap
