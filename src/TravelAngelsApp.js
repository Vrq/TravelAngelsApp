import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight } from 'react-native';
import Style from './Style';
import MapView from 'react-native-maps';

const undColor = "#569299"

class TravelAngelsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 50.0647,
        longitude: 19.9170,
        latitudeDelta: 0.0202,
        longitudeDelta: 0.0111,
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onPressButton = this.onPressButton.bind(this);
    this.onPressButtonBack = this.onPressButtonBack.bind(this);
  }
  render() {
    return (
      <View style={Style.rootContainer}>
        <MapView style={Style.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          showsUserLocation={true}
          showsMyLocationButton={true}
        ><MapView.Marker
          coordinate={{
            latitude: 50.0617,
            longitude: 19.9370,
          }}
          title={"Rynek"}
          description={"Centrum miasta Kraków"}
          />
        </MapView>
        <View style={Style.questionContainer}><Text style={Style.questionText}>What would you like to do now?</Text></View>
        <View style={Style.answerContainer}>
          <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton}>
            <Text style={Style.answerButtonText}>Eat</Text>
          </TouchableHighlight>
          <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton}>
            <Text style={Style.answerButtonText}>Sleep</Text>
          </TouchableHighlight>
          <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButton}>
            <Text style={Style.answerButtonText}>Fun</Text>
          </TouchableHighlight>
          <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this.onPressButtonBack}>
            <Text style={Style.answerButtonText}>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  onPressButton() {
    let region = {
      latitude: 50.0617,
      longitude: 19.9370,
      latitudeDelta: 0.0202,
      longitudeDelta: 0.0111,
    }
    this.setState({region})
  }
  onPressButtonBack() {
    let region = {
      latitude: 50.0647,
      longitude: 19.9170,
      latitudeDelta: 0.0202,
      longitudeDelta: 0.0111,
    }
    this.setState({region})
  }
  onRegionChange(region) {
    this.setState({region})
  }

}

AppRegistry.registerComponent('TravelAngelsApp', () => TravelAngelsApp);
