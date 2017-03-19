import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight  } from 'react-native';
import Style from './Style'
import MapView from 'react-native-maps';

const undColor = "#569299"
class TravelAngelsApp extends Component {
  render() {
    return (
      <View style={Style.rootContainer}>
        <MapView style={Style.map}
          initialRegion={{
            latitude: 50.06825,
            longitude: 19.9600,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

        // <View style={Style.questionContainer}><Text style={Style.questionText}>What would you like to do now?</Text></View>
        // <View style={Style.answerContainer}>
        //   <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this._onPressButton}>
        //     <Text style={Style.answerButtonText}>Eat</Text>
        //   </TouchableHighlight>
        //   <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this._onPressButton}>
        //     <Text style={Style.answerButtonText}>Sleep</Text>
        //   </TouchableHighlight>
        //   <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this._onPressButton}>
        //     <Text style={Style.answerButtonText}>Fun</Text>
        //   </TouchableHighlight>
        //   <TouchableHighlight style={Style.answerButton} underlayColor={undColor} onPress={this._onPressButton}>
        //     <Text style={Style.answerButtonText}>Nope</Text>
        //   </TouchableHighlight>
        // </View>

    );
  }
  _onPressButton() {

  }

}

AppRegistry.registerComponent('TravelAngelsApp', () => TravelAngelsApp);
