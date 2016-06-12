/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

var MainPage = require('./MainPage.js');
var AddBill = require('./AddBill.js');
var ViewBills = require('./ViewBills.js');


var RouteMapper = function(route, navigator) {
  if (route.page === 'main') {
    return (<MainPage navigator={navigator}/>);
  } else if (route.page === 'add') {
    return (<AddBill navigator={navigator}/>);
  } else if (route.page === 'view') {
    return (<ViewBills navigator={navigator}/>);
  }
};

class AwesomeProject extends Component {
  render() {
    return ( <Navigator style = {styles.container}
      initialRoute = {{page: 'main'}}
      renderScene = {RouteMapper}
      configureScene = {(route) => {          
          if (route.sceneConfig) {            
            return route.sceneConfig;          
          }          
          return Navigator.SceneConfigs.FloatFromBottom;        
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);