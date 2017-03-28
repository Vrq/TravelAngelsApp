import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const test = 200;
var Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  questionContainer: {
    flex: 2,
    backgroundColor: '#337799',
    justifyContent: 'center',
  },
  answerContainer: {
    flex: 3,
    backgroundColor: '#223344'
  },
  questionText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  answerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },
  answerButtonText: {
    fontSize: 24,
    color: 'white'
  },
  answerButtonHighlighted: {
    color: '#943473'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default Style;
