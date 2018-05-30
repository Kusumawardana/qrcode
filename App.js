/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,Linking,Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataqr: " ",
      status: "ready"
    };
  }
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
      Alert.alert(
        "code:" + e.data,
        { cancelable: false }
      )
  }
  render() {
    return (
      <QRCodeScanner
      onRead={this.onSuccess.bind(this)}
      topContent={
        <View style={styles.centerText}>
          <Text style={styles.textBold}>
            Aplikasi Scan website
          </Text>
        </View>

      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>Kusuma Wardana</Text>
        </TouchableOpacity>
      }
    />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    padding: 32,
  backgroundColor: "purple",
  width: "100%"

  },
  textBold: {
    flex: 1,
    color: 'white',
    fontSize: 25,
    
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
