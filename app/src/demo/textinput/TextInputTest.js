import React, {Component} from 'react';

import {
    View,
    Text,
} from 'react-native';

import TextInputDemo from './TextInputDemo';

var examples = TextInputDemo.examples;

var example = examples[13];

export default class TextInputTest extends Component {

    render() {
        console.log('TextInputTest:' + example.title);
        return example.render();
    }

}


// import React, {
//     Component
// } from 'react';
//
// import {
//     View,
//     TextInput,
//     Text,
// } from 'react-native';
//
// export default class TextInputDemo extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {text: ''};
//     }
//
//     render() {
//         return (
//             <View style={{flex:1, padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate"
//                     onChangeText={(text) => this.setState({text: text})}
//                 />
//
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//
//             </View>
//         );
//     }
// }

