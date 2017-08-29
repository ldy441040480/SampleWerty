import React, {Component} from 'react';

import {Text} from 'react-native';

export default class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(() => {
                this.setState(previousState => {
                    return {showText: !previousState.showText};
                });
        }, 1000);
    }

    render() {
        var display = this.state.showText ? this.props.text : '';
        return (
            <Text>
                {display}
            </Text>
        );
    }

}