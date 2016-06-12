'use strict';

var React = require('react');
var ReactNative = require('react-native');

import {
  StyleSheet,
  ListView,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';

var realm = require('./BillSchema.js');

var ViewBills = React.createClass({
    getInitialState: function() {
      return {
        // count: realm.objects('Bill').length,
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      };
    },
    componentDidMount: function() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(realm.objects('Bill'))
      });
    },  
    back(){
      this.props.navigator.pop();
    },
    render(){
      return(
        <View>
          <ListView 
            dataSource={this.state.dataSource}
            renderRow={(bill)=>{return <Text>{bill.amt}</Text>;}} />
          <TouchableHighlight onPress={this.back}>
              <Text>Back</Text>
          </TouchableHighlight>
        </View>);
    }
});

module.exports = ViewBills;