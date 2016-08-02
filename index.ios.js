/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Blink extends Component {

  constructor(props) {
      super(props);
      this.state={showText:true};

      setInterval(() => {
        this.setState({ showText: !this.state.showText });
      }, 1000);
    }


  render() {
    let txt =  this.state.showText? this.props.text : '';
    return (
      <Text>{txt}</Text>
    );
  }
}

class meterialApp extends Component {
  render(){
    return(
      <View style={styles.container}>
      <Blink text='Blink _\|/_'  />
      </View>
    );
  }
}


AppRegistry.registerComponent('meterialApp', () => meterialApp);