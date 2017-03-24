import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const test = 200;
var TravelMapStyle = StyleSheet.create({
  map: {
    width: width,
    height: height*0.618
  }
})

export default TravelMapStyle;
