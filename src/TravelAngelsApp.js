import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback  } from 'react-native';
import Style from './Style';
import MapView from 'react-native-maps';
import locations from './dataSource';
import TravelMap from './TravelMap';
import haversine from 'haversine';

const undColor = "#569299"
const zoom = {
  latitudeDelta: 0.0202,
  longitudeDelta: 0.0111,
}

class TravelAngelsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 50.0647,
        longitude: 19.9170,
        ...zoom
      },
      userPositionCoords: "dunno",
      mapHeight: 0.382
    };
    this.onRegionChange = this.onRegionChange.bind(this);

  }

  componentWillMount() {
    console.log("willMount")
    navigator.geolocation.watchPosition(position => {
      var userPositionCoords = position.coords;
      this.setState({userPositionCoords});
      console.log("callback")
    }, (error) => {
        alert(error)
    }, {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000});
  }

  render() {
    console.log("render")
    return (
      <View style={Style.rootContainer}>
        <TravelMap
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          userPositionCoords={this.state.userPositionCoords}
          mapHeight={this.state.mapHeight}
          />
        <View style={Style.questionContainer}><TouchableWithoutFeedback onPress={this.onPressQuestion.bind(this)}><View><Text style={Style.questionText}>Position1: {this.state.userPositionCoords.longitude} {this.state.userPositionCoords.latitude}</Text></View></TouchableWithoutFeedback></View>
        <View style={Style.answerContainer}>
          <View style={Style.buttonRow}>
            <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton.bind(this, "1")}>
              <Text style={Style.answerButtonText}>Eat</Text>
            </TouchableHighlight>
            <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton.bind(this, "2")}>
              <Text style={Style.answerButtonText}>Chillout</Text>
            </TouchableHighlight>
          </View>
          <View style={Style.buttonRow}>
            <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton.bind(this, "3")}>
              <Text style={Style.answerButtonText}>Monuments</Text>
            </TouchableHighlight>
            <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton.bind(this, "4")}>
              <Text style={Style.answerButtonText}>Back</Text>
            </TouchableHighlight>
          </View>

        </View>
      </View>
    );
  }

  onRegionChange(region) {
    this.setState({region})
  }

  onPressQuestion() {
    if(this.state.mapHeight < 0.5) {
      mapHeight = 0.618;
    } else {
      mapHeight = 0.382;
    }
    this.setState({mapHeight})
  }

  onPressButton(input) {
    let coordinate = {
      latitude: 50.0647,
      longitude: 19.9170,
    };

    let userLocation = {
      latitude: this.state.userPositionCoords.latitude,
      longitude: this.state.userPositionCoords.longitude,
    };

    let location;
    switch(input) {
      case "1":
        coordinate = locations.filter(loc => loc.category === "food").sort((loc1, loc2) => haversine(userLocation, loc1.coordinate) - haversine(userLocation, loc2.coordinate))[0].coordinate
        break;
      case "2":
        coordinate = locations.filter(loc => loc.category === "chillout").sort((loc1, loc2) => haversine(userLocation, loc1.coordinate) - haversine(userLocation, loc2.coordinate))[0].coordinate
        break;
      case "3":
        coordinate = locations.filter(loc => loc.category === "monument").sort((loc1, loc2) => haversine(userLocation, loc1.coordinate) - haversine(userLocation, loc2.coordinate))[0].coordinate
        break;
      case "4":
        break;
    }
    let region = {
      ...coordinate,
      ...zoom
    }
    this.setState({region})
  }

}

AppRegistry.registerComponent('TravelAngelsApp', () => TravelAngelsApp);
