// {
//     let a = 10;
//     var b = 1;
// }
//
// a;
// b;

// function bar(x = y, y = 2) {
//     return [x, y];
// }
//
// bar(); // 报错
//
//
// var tmp = new Date();
//
// function f() {
//     console.log(tmp);
//     if (false) {
//         var tmp = 'hello world';
//     }
// }
//
// var s = 'hello';
//
// for (var i = 0; i < s.length; i ++) {
//     console.log(s[i]);
// }
//
// console.log(i);

//
// function f1() {
//     let n = 5;
//     if (true) {
//         let n = 10;
//     }
//     console.log(n);
// }
//
//
// {
//     {
//         {
//             {
//                 {
//                     {
//                         let insane = 'hello world'
//                     }
//                 }
//             }
//         }
//     }
// }
// ;


// function f() {
//     console.log('i am outside')
// }
//
// (function () {
//
//     function f() {
//         console.log('i am inside')
//     }
//     if (false) {
//     }
//     f();
// }());

// {
//     let a = 'secret';
//
//     function f() {
//         return a;
//     }
// }
//
// {
//     let a = 'secret'
//     let f = function () {
//         return a;
//     };
// }
//
// {
//     let t = f();
// }
//
//
// let x = do {
//     let t = f();
//     t * t + 1;
// }
//
// const PI = 3.1415926;
//
// var a = PI;
//
// const foo = {};

// foo.prop = 123;
// foo.prop;
//
// foo = {}
//
//
// const a = [];
// a.push('hello')
// a.length = 0;
// a = ['dave'];
//
// window.a = 1;
//
// 'use strict';
//
// (typeof window !== 'undefined'
//     ? window
//     : (typeof process === 'object' &&
//         typeof require === 'function' &&
//         typeof global === 'object')
//         ? global
//         : this);
//
//
// // var global = require('system.global')();
//
// import getGlobal from 'system.global';
//
// const global = getGlobal();


// let a = 1;
//
// let [a, b ,c] =[1, 2, 3];
// a;
// b;
//
// let[foo] = 1;
// foo;
//
//
//
//
// let [x, y, z] = new Set(['a', 'b', 'c']);

// let [foo = true] = [];
// foo;// true
//
//
// function f() {
//     console.log('aaaaa')
// }
//
// let [x = f()] = [1];
//
// if ([1][0] === undefined) {
//     x = f();
// } else {
//     x = [1][0];
// }
//
//
// var promise = new Promise(function (resolve, reject) {
//     if (true) {
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });
//
//
// promise.then(function (value) {
//
// }, function (error) {
//
// });
//
//
// function timeout(ms) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, ms, 'done')
//     });
// }
//
//
// function timeout2(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done')
//     });
// }
//
// timeout2(100).then((value) => {
//
// });


import React, {
    Component
} from 'react';

import {
    AppRegistry,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Toast from '../comm/util/ToastUtil';

Toast.showToast();

export default class Test extends Component {

    render() {
        return (
            <View style={style.container}>

                <TouchableOpacity onPress={() => {
                    onClick()
                }}>
                    <Text style={style.welcome}>fuck you test</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {

                    preloadImage('http://interesting.babytreeimg.com/pregnancy/video/ent/bbt_ent_119.mp4_screenshot10s.jpg').then((value) => {
                        console.log(value);
                    }).catch((e) => {
                        console.log(e);
                    });

                    // loadImageAsync('http://interesting.babytreeimg.com/pregnancy/video/ent/bbt_ent_119.mp4_screenshot10s.jpg').then((value) => {
                    //     Toast.showToast(value)
                    // }).catch((e) => {
                    //     Toast.showToast(e);
                    // });
                }}>
                    <Text style={style.instructions}>
                        测试内容1
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    timeout(1000).then((value) => {
                        Toast.showToast(value)
                    });
                }}>
                    <Text style={style.instructions}>
                        测试内容2
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

function onClick() {
    Toast.showToast("fuck you")
}

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
    })
}

let promise = new Promise((resolve, reject) => {
    console.log("promise");
    resolve();
});

function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        var image = new Image();
        console.log('loadImageAsync=' + url);
        image.onload = (() => {
            console.log('resolve=' + url);
            resolve('resolve' + image);
        });
        image.onerror = (() => {
            console.log('onerror=' + url);
            reject('error' + url);
        });
        image.src = url;
    });
}


const preloadImage = function (path) {
    return new Promise((resolve, reject) => {
        console.log(path);
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FcFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


