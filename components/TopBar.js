'use strict';

var React = require('react');
var ReactNative = require('react-native');
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
} from 'react-native';
var styles = StyleSheet.create({
    topBar:{
    	flexDirection: 'row',
    	height: 56,
    	alignItems : 'center',
    },
    menuIconWrapper:{
    	position: 'absolute',
    	left:0,
    	top: 16,
    },
    titleWrapper:{
    	flex: 1,
    }
});
var TopBar = React.createClass({
	propTypes: {
		textColor: React.PropTypes.string
	},
	render(){
		return (
			<View style={styles.topBar}>
				<View style={styles.menuIconWrapper}>
					<Image style={{opacity: 0.6}} source={require('../images/settings.png')}/>
				</View>
				<View style={styles.titleWrapper}>
					<Text style={{color: this.props.textColor, textAlign: 'center', fontSize: 18}}>2016/07/01-2016/07-02</Text>
				</View>
			</View>);
	}
});

module.exports = TopBar;
