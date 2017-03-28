import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

var TravelMapStyle = StyleSheet.create({
  map: {
    width: width,
    height: height*0.618//0.382 ///0.618
  }
})

export default TravelMapStyle;
