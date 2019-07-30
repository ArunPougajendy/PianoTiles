import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import styles from './styles.js';

const SCREEN_DIMENSIONS = Dimensions.get('window');

class PianoTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tile1: undefined,
      tile2: undefined,
      tile3: undefined,
      tile4: undefined,
      navigated: false,
    };
    this.animatedValue = new Animated.Value(0);
  }
  animate = () => {
    this.animatedValue.setValue(0);
    // this.animatedValue.addListener(({ value }) => this._value = value);
    // this.animatedValue.removeAllListeners();

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start(() => this.validatePress());
  };
  componentDidMount() {
    setTimeout(() => {
      this.animate();
    }, this.props.range);
  }

  validatePress() {
    if (
      this.state.tile1 ||
      this.state.tile2 ||
      this.state.tile3 ||
      this.state.tile4
    ) {
    } else {
      console.log('inside stopAnimation ');
      // this.props.toggleMissed();
      // this.animatedValue.removeAllListeners();
      if (!this.state.navigated) {
      }
    }
  }

  componentWillUnmount() {
    this.animatedValue.removeAllListeners();
  }
  render() {
    const marginTop = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, SCREEN_DIMENSIONS.height],
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Animated.View
          style={{
            height: 150,
            width: 100,
            backgroundColor: this.state.tile1
              ? this.state.tile1
              : this.props.tile1,
            borderColor: 'grey',
            borderWidth: 1,
            transform: [{ translateY: marginTop }],
          }}>
          <TouchableOpacity
            style={{
              height: SCREEN_DIMENSIONS.height / 7,
              width: 100,
            }}
            disabled={this.props.tile1 === 'black' ? false : true}
            onPress={() => {
              this.setState({ tile1: 'green' });
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: marginTop }],
            height: 150,
            width: 100,
            backgroundColor: this.state.tile2
              ? this.state.tile2
              : this.props.tile2,
            borderColor: 'grey',
            borderWidth: 1,
          }}>
          <TouchableOpacity
            style={{
              height: SCREEN_DIMENSIONS.height / 7,
              width: 100,
            }}
            disabled={this.props.tile2 === 'black' ? false : true}
            onPress={() => {
              this.setState({ tile2: 'green' });
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: marginTop }],
            height: 150,
            width: 100,
            backgroundColor: this.state.tile3
              ? this.state.tile3
              : this.props.tile3,
            borderColor: 'grey',
            borderWidth: 1,
          }}>
          <TouchableOpacity
            style={{
              height: SCREEN_DIMENSIONS.height / 7,
              width: 100,
            }}
            disabled={this.props.tile3 === 'black' ? false : true}
            onPress={() => {
              this.setState({ tile3: 'green' });
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: marginTop }],
            height: 150,
            width: 100,
            backgroundColor: this.state.tile4
              ? this.state.tile4
              : this.props.tile4,
            borderColor: 'grey',
            borderWidth: 1,
          }}>
          <TouchableOpacity
            style={{
              height: SCREEN_DIMENSIONS.height / 7,
              width: 100,
            }}
            disabled={this.props.tile4 === 'black' ? false : true}
            onPress={() => {
              this.setState({ tile4: 'green' });
            }}
          />
        </Animated.View>
        {/* 
        <TouchableOpacity
          disabled={this.props.tile1 === 'white' ? true : false}
          title="Tile"
          style={[styles.pianoTile, { backgroundColor: this.props.tile1 }]}>
          <Text />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.props.tile2 === 'white' ? true : false}
          title="Tile"
          style={[styles.pianoTile, { backgroundColor: this.props.tile2 }]}>
          <Text />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.props.tile3 === 'white' ? true : false}
          title="Tile"
          style={[styles.pianoTile, { backgroundColor: this.props.tile3 }]}>
          <Text />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.props.tile4 === 'white' ? true : false}
          title="Tile"
          style={[styles.pianoTile, { backgroundColor: this.props.tile4 }]}>
          <Text />
        </TouchableOpacity>
        */}
      </View>
    );
  }
}

export default PianoTile;
