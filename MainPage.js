'use strict';

var React = require('react');
var ReactNative = require('react-native');
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator,
  Image,
  ToolbarAndroid,
} from 'react-native';

var TopBar = require('./components/TopBar.js');
var _VARS = require('./variables.js');

var styles = StyleSheet.create({
    commonText:{
        color: _VARS.TEXT_COLOR,
        fontSize: 16,
        lineHeight: 24,
    },
    textLarge: {
        fontSize: 36,
        lineHeight: 54
    },
    textBig:{
        fontSize: 22,
        lineHeight: 33
    },

    wrapper:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: _VARS.BG_COLOR, 
        padding: 15
    },
    stats:{
        flex: 1,
        borderRadius: 3,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bottomView:{
        height: 240,
        flexDirection:'row',
        alignItems:'center',
        justifyContent :'space-around'
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    addIcon:{
        width: 100,
        height: 100,
        borderRadius: 100,
        top: -40,
        justifyContent: 'center'
    },
    iconColor2:{
        backgroundColor: '#a6e22e',
    },
    iconColor1:{
        backgroundColor: '#3ea3ed',
    },
    buttonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff'
    }
});

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
        <View style={styles.wrapper}>
            <TopBar textColor={_VARS.TOPBAR_COLOR}/>
            <View style={styles.stats}>
                <View style={styles.row}>
                    <Text style={[styles.commonText,styles.textLarge]}>You have </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.commonText}>totally spent </Text>
                    <Text style={[styles.commonText,styles.textLarge]}>1000</Text>
                    <Text style={styles.commonText}> Yuan</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.commonText}>totally recorded for </Text>
                    <Text style={[styles.commonText, styles.textLarge]}>1</Text>
                    <Text style={styles.commonText}> Day</Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <View style={[styles.addIcon, styles.iconColor1]}>
                {/*
                    <Image source={require('./images/brokenHeart.png')}/>
                */}
                    <Text style={styles.buttonText}>Normal</Text>
                </View>
                <View style={[styles.addIcon, styles.iconColor2]}>
                {/*
                    <Image source={require('./images/lips.png')}/>
                */}
                    <Text style={styles.buttonText}>Speak</Text>
                </View>
            </View>
        </View>);
    }
});
module.exports = MainPage;
