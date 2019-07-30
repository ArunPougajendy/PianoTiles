import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PianoTile from './src/components/PianoTile';
import Animate from './src/components/animate';

const SCREEN_DIMENSIONS = Dimensions.get('window');

class App extends Component {
  constructor(props) {
    super(props);
  }
  // animate = () => {
  //   this.animatedValue.setValue(0);
  //   Animated.timing(this.animatedValue, {
  //     toValue: 1,
  //     duration: 5000,
  //     easing: Easing.linear,
  //   }).start();
  // };
  // componentDidMount() {
  //   this.animate();
  // }

  render() {
    return (
      <View>
        <Animate />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    backgroundColor: 'grey',
  },
  pianoTile: {
    height: 150,
    width: 100,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default App;
