import React, {Component} from 'react'
import {View} from 'react-native'
import Blink from './Blink'

export default class BlinkApp extends Component {

    render() {
        return (
            <View>
                <Blink text='快速的房间快速点击水电费是的'/>
                <Blink text='快速的房间快速点击水电费是的'/>
                <Blink text='快水电费水电费水电费'/>
                <Blink text='快速的233费是的'/>
            </View>
        );
    }
}