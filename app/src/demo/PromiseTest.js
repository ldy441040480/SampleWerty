// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done')
//     })
// }
//
// let promise = new Promise((resolve, reject) =>{
//     console.log("promise");
//     resolve();
// });
//
// promise.then(()=>{
//     console.log('resolve')
// })
//
// console.log('hi')

// import {Image} from 'react-native';
//
// function loadImageAsync(url) {
//     return new Promise((resolve, reject) =>{
//        var image = new Image();
//        image.onload = () =>{
//            resolve(image);
//        };
//        image.onerror = ()=> {
//            reject(new Error('could not load image at' + url));
//        };
//        image.src = url;
//     });
// }
//
// loadImageAsync(');http://interesting.babytreeimg.com/pregnancy/video/ent/bbt_ent_119.mp4_screenshot10s.jpg';


// var p1 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 1000, 'aaa');
// });
//
// var p2 = new Promise((resolve, reject) =>{
//     console.log('p2 promise');
//     resolve(p1.then((value) =>{
//         console.log('p1 resolve=' + value);
//     }));
// });
//
//
// p2.then(()=>{
//     console.log('p2 then');
// });

//
// // --------------------------------------------------------
// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('p1 fail'));
//         console.log('ceshi');
//     }, 3000)
// });
//
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve(p1)
//     }, 1000);
// });
//
// p2.then((result => console.log(result))).catch(error => console.log(error));
//
//
// p2.then((resolve) => {
//     console.log(resolve);
// }, (reject) =>{
//     console.log(reject)
// });
//
// p2.then(resolve => console.log(resolve), reject => console.log(reject));
//
// // --------------------------------------------------------

//
// var promise = new Promise((resolve, reject) => {
//     reject('ok');
//     setTimeout(function () {
//         throw new Error('test');
//     });
// });
//
// promise.then(function (value) {
//     console.log(value);
// });

// promise.catch((error) => {
//     console.log(error);
// });
//
// promise.then((value) => {
//
// }).catch((error) => {
//
// });


// var p1 = new Promise((resolve, reject) => {
//     // throw new Error('p1 error');
//     resolve('p1 resolve');
// });
//
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // reject(new Error('p2 error'));
//         resolve('p2 resolve');
//     }, 100)
// });
//
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p3 resolve');
//     }, 2000);
//     setTimeout(() => {
//         reject('p3 reject');
//     }, 3000);
// })


// var promises = Promise.all([p1, p2, p3]);
//
// promises.then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

// var promises = Promise.race([p1, p2, p3]);
// promises.then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

//
// var p = new Promise((resolve) => {
//     resolve('a');
// });
//
// var p1 = new Promise(resolve => resolve('aa'));
//
// var p2 = new Promise(function (resolve) {
//     resolve('aaaa');
// });
//
// var p3 = Promise.resolve('aaaa')
//
// p3.then(result => console.log(result));


// let thenable = {
//     then: function (resolve, reject) {
//         resolve(42);
//     }
// };
//
// let thenable2 = {
//     then: (resolve, reject) => {
//         resolve(42)
//     }
// };
//
// let p1 = Promise.resolve(thenable);
//
// p1.then((value) => {
//     console.log(value);
// });


// var p = Promise.resolve();
//
// p.then((result) =>{
//     console.log(result);
// }).;


// const f = () => console.log('now');
//
// const f1 = function () {
//   console.log('now')
// };
//
// Promise.resolve().then(f);
//
// var p = new Promise((resolve) =>{
//     resolve();
// })
//
// var p1 = new Promise(resolve => resolve());
//
// // p.then(f1);
// p1.then(f1);
//
// console.log('next');

// const f = () => console.log('now');
//
// const f1 = function () {
//     console.log('now')
// };

// (async () => f())();

// (async function () {
//     f();
// })().then((value) => {
//     console.log(value);
// });


// var promise = (async function () {
//     f();
// }());
//
// promise.then(value => console.log(value));
//
// console.log('next');
//
//
// const [a, b, c] = [1, 2, 3];
//
// a;
// b;
// c;


// const a = 'fuck';
// const b = `foo${a}bar`;
// const c = '';


// const a = {};
// a.x = 3;
// Object.assign(a, {x: 3})

// const a = { x: null };
// a.x = 3;
// console.log(a.x);
//
// const obj = {
//     id:5,
//     name:'haha',
//     [getKey('enabled')]:true,
// };
//
// function getKey(key) {
//     return key + 'i';
// }

//
// var atom = {
//
//     // ref,
//
//     value:1,
//
//     addValue(value) {
//         return atom.value + value;
//     },
// };
//
// atom.value = 6;
// var value = atom.addValue(5);
//
//
// console.log(value);

//
// const items = [2, 3, 5, 8];
//
// const itemsCopy = [...items];
//
// console.log(itemsCopy);

// (() => {
//     console.log('welcome to ...')
// })();
//
// (function () {
//     console.log('welcome to ...2')
// })();
//
//
// [1, 2, 3].map((x) => {
//     return x * x;
// });
//
// function divide(a, b, option = false) {
//
// }
//
// function divide2(a, b, {option = false} = {}) {
//
// }
//



let map = new Map();
map.set(1);

console.log(map);


















