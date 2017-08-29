import React, {
    Component
} from 'react';

import {
    AppRegistry, ScrollView, Image, Text, View
} from 'react-native'

import Images from '../../../res/Images';

export default class ScrollViewDemo extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Image style={{marginBottom: 5}}
                       source={Images.demo.demo_favicon}/>
                <Text style={{fontSize: 80}}>React Native</Text>
            </ScrollView>
        );
    }
}