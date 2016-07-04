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
  Animated,
  Easing
} from 'react-native';

var TopBar = require('../components/TopBar.js');
var _VARS = require('../variables.js');

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
        borderRadius: 10,
        top: -40,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    iconColor2:{
        backgroundColor: '#89cd01',
    },
    iconColor1:{
        backgroundColor: '#3ea3ed',
    },
    buttonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff'
    },
    buttonWave:{
        borderRadius:40,
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        opacity: 0.6,
    },
});

var MainPage = React.createClass({
    getInitialState: function() {
        return {
            waveMove1: new Animated.Value(0), 
            waveMove2: new Animated.Value(0),
            waveMove3: new Animated.Value(0),
        };
    },
    componentDidMount() {
        this.startAnimation();
    },
    startAnimation(){
        this.state.waveMove1.setValue(0); 
        this.state.waveMove2.setValue(0);   
        this.state.waveMove3.setValue(0); 
        Animated.sequence([
            Animated.parallel([         
                Animated.timing(this.state.waveMove1, {
                    toValue: 5,
                    duration: 5000    
                }),
                Animated.timing(this.state.waveMove2, {   
                    toValue: -15,
                    duration: 5000    
                }),
                Animated.timing(this.state.waveMove3, {   
                    toValue: 20,
                    duration: 5000    
                }),
            ]),
            Animated.parallel([         
                Animated.timing(this.state.waveMove1, {
                    toValue: 0,
                    duration: 5000    
                }),
                Animated.timing(this.state.waveMove2, {   
                    toValue: 0,
                    duration: 5000    
                }),
                Animated.timing(this.state.waveMove3, {   
                    toValue: 0,
                    duration: 5000    
                }),
            ]),
        ]).start(()=>this.startAnimation());
    },
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
                    <Text style={styles.buttonText}>Normal</Text>
                    <Animated.Image style={[styles.buttonWave, {bottom: this.state.waveMove1}]} source={require('../images/wave1.png')}/>
                    <Animated.Image style={[styles.buttonWave, {bottom: this.state.waveMove2}]} source={require('../images/wave2.png')}/>
                    <Animated.Image style={[styles.buttonWave, {bottom: this.state.waveMove3}]} source={require('../images/wave3.png')}/>
                </View>
                <View style={[styles.addIcon, styles.iconColor2]}>
                    <Text style={styles.buttonText}>Speak</Text>
                    <Animated.Image style={[styles.buttonWave, {bottom: this.state.waveMove1}]} source={require('../images/wave1.png')}/>
                    <Animated.Image style={[styles.buttonWave, {bottom: this.state.waveMove2}]} source={require('../images/wave2.png')}/>
                    <Animated.Image style={[styles.buttonWave, {bottom: this.state.waveMove3}]} source={require('../images/wave3.png')}/>
                </View>
            </View>
        </View>);
    }
});
module.exports = MainPage;
