import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  questionContainer: {
    flex: 1,
    backgroundColor: '#337799',
    justifyContent: 'center',
  },
  answerContainer: {
    flex: 2,
    backgroundColor: '#223344'
  },
  questionText: {
    fontSize: 32,
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
  map: {
    width: 400,
    height: 300
  }
})

export default Style;
