import MapView from 'react-native-maps';
import locations from './dataSource';
import TravelMapStyle from './TravelMapStyle';
import React, { Component } from 'react';

export default class TravelMap extends Component {
  constructor(props) {
    super(props);
    this.getMarkersFrom = this.getMarkersFrom.bind(this);
  }

  render() {
    return(
      <MapView style={TravelMapStyle.map}
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
    let markers = [];
    for(let loc of locations) {
      let marker = <MapView.Marker
                    coordinate={loc.coordinate}
                    title={loc.title}
                    description={loc.description+ " Average Price: " + loc.avgPrice}
                    key={loc.placeID}
                    />;
                  markers.push(marker);
    }
    return markers;
  }

}
