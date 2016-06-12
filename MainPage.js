'use strict';

var React = require('react');
var ReactNative = require('react-native');
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';


var MainPage = React.createClass({
    _addBill(){
        this.props.navigator.push({
            page: 'add'
        });
    },
    _viewBills(){
        this.props.navigator.push({
            page: 'view'
        });
    },
    render(){
        return (
        <View>
            <TouchableHighlight onPress={this._addBill}>
                <Text>Add a bill.</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._viewBills}>
                <Text>View Records</Text>
            </TouchableHighlight>
        </View>);
    }
});
module.exports = MainPage;
