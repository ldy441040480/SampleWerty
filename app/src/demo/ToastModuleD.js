import React, {
    Component
} from 'react';

import {
    View,
    Text,
    NativeModules,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class ToastModuleD extends Component {

    toast(message) {
        NativeModules.ToastAndroid.showWithGravity(message, NativeModules.ToastAndroid.SHORT, NativeModules.ToastAndroid.BOTTOM)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this.toast('fuck')
                }}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5,
    }

});