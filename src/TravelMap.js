import MapView from 'react-native-maps';
import locations from './dataSource';
import TravelMapStyle from './TravelMapStyle';
import React, { Component } from 'react';
import haversine from 'haversine';
import round from 'round-to';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class TravelMap extends Component {
  constructor(props) {
    super(props);
    this.getMarkersFrom = this.getMarkersFrom.bind(this);
  }

  render() {
    return(
      <MapView style={{width: width, height: height*this.props.mapHeight}}
        region={this.props.region}
        onRegionChange={this.props.onRegionChange}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
      {this.getMarkersFrom(locations)}
      </MapView>
    )
  }

  getMarkersFrom(locations) {
    let userLocation = {
      latitude: this.props.userPositionCoords.latitude,
      longitude: this.props.userPositionCoords.longitude,
    };
    let markers = [];

    for(let loc of locations) {
      let marker = <MapView.Marker
                    coordinate={loc.coordinate}
                    title={loc.title}
                    description={loc.description+ " Distance: " + round(haversine(userLocation, loc.coordinate, {unit: 'meter'}),2)}
                    key={loc.placeID}
                    />;
                  markers.push(marker);
    }
    return markers;
  }

}
