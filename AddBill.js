'use strict';

var React = require('react');
var ReactNative = require('react-native');

import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';


var realm = require('./BillSchema.js');


var AddBill = React.createClass({
    getInitialState(){
        return {
            amt: '',
            messages: [],
        };
    },
    add(){
      var _this = this;
      realm.write(() => {
        realm.create('Bill', {amt: _this.state.amt});
        _this._appendMessage('Saved selection to disk: ' + _this.state.amt);
      });
    },
    back(){
      this.props.navigator.pop();
    },
    _handleAmtChange(amt){
        this.setState({amt: amt});
    },
    _appendMessage(message){
        this.setState({messages: this.state.messages.concat(message)});
    },

    render(){
        return (
        <View>
            <TextInput placeholder="fill amount" onChangeText={(amt) => this._handleAmtChange(amt)} value={this.state.amt}/>
            <TouchableHighlight onPress={this.add}>
                <Text>Confirm</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.back}>
                <Text>Back</Text>
            </TouchableHighlight>
             <Text>Messages:</Text>
             {this.state.messages.map((m) => <Text key={m}>{m}</Text>)}
        </View>);
    }
});
module.exports = AddBill;