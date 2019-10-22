var EC = require('elliptic').ec;
var ec = new EC('curve25519');

var key1 = ec.keyFromPrivate('49c0c4a5647e43cb381b71a96d90c962a79353f386cbe2316e7f57dd64fe81aa');
var publicKey1 = key1.getPublic();

var key2 = ec.keyFromPrivate('9d0dbf885862123960795c21c2134262b24e69610ba189692b8619b6142e7a66');
var publicKey2 = key2.getPublic();

var shared1 = key1.derive(publicKey2);
var shared2 = key2.derive(publicKey1);

console.log(shared1.toString(16));
console.log(shared2.toString(16));
