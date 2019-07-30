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
import PianoTile from '../PianoTile';

const SCREEN_DIMENSION = Dimensions.get('window');

class Animate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      missed: false,
      arraya: new Array(5).fill(5),
    };
  }
  toggleMissed = () => {
    this.setState({
      // missed: true,
      // arraya: [],
    });
  };

  render() {
    // const arraya = new Array(10).fill(10);
    return this.state.missed ? (
      <View />
    ) : (
      <View style={styles.container}>
        {this.state.arraya.map((item, index) => {
          const tile = Math.floor(Math.random() * 4) + 1;
          if (tile === 1) {
            return (
              <PianoTile
                key={'piano' + index}
                range={index * 700}
                tile1="black"
                tile2="white"
                tile3="white"
                tile4="white"
                toggleMissed={this.toggleMissed}
              />
            );
          } else if (tile === 2) {
            return (
              <PianoTile
                key={'piano' + index}
                range={index * 700}
                tile1="white"
                tile2="black"
                tile3="white"
                tile4="white"
                toggleMissed={this.toggleMissed}
              />
            );
          } else if (tile === 3) {
            return (
              <PianoTile
                key={'piano' + index}
                range={index * 700}
                tile1="white"
                tile2="white"
                tile3="black"
                tile4="white"
                toggleMissed={this.toggleMissed}
              />
            );
          } else if (tile === 4) {
            return (
              <PianoTile
                key={'piano' + index}
                range={index * 700}
                tile1="white"
                tile2="white"
                tile3="white"
                tile4="black"
                toggleMissed={this.toggleMissed}
              />
            );
          }
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: 'grey',
  },
});

export default Animate;
