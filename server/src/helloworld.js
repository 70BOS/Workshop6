console.log("Hello World!");

var TestModule = require('./util');
var reverseString = TestModule.reverseString;
console.log(reverseString("Hello World!"));
