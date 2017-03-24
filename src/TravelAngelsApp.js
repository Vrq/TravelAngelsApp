import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight } from 'react-native';
import Style from './Style';
import MapView from 'react-native-maps';
import locations from './dataSource';
import TravelMap from './TravelMap';

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
      userPosition: "unknown"
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(position => {
      var userPosition = JSON.stringify(position);
      this.setState({userPosition});
    });
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <TravelMap
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          />
        <View style={Style.questionContainer}><Text style={Style.questionText}>What would you like to do now? Position: {this.state.userPosition}</Text></View>
        <View style={Style.answerContainer}>
          <View style={Style.buttonRow}>
            <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton.bind(this, "1")}>
              <Text style={Style.answerButtonText}>Eat</Text>
            </TouchableHighlight>
            <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton.bind(this, "2")}>
              <Text style={Style.answerButtonText}>Sleep</Text>
            </TouchableHighlight>
          </View>
          <View style={Style.buttonRow}>
            <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton.bind(this, "3")}>
              <Text style={Style.answerButtonText}>Fun</Text>
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

  onPressButton(input) {
    let coordinate = {
      latitude: 50.0647,
      longitude: 19.9170,
    }
    let location;
    switch(input) {
      case "1":
        coordinate = locations.filter(loc => loc.category === "food")[0].coordinate
        break;
      case "2":
        coordinate = locations.filter(loc => loc.category === "chillout")[0].coordinate
        break;
      case "3":
        coordinate = locations.filter(loc => loc.category === "monument")[0].coordinate
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
