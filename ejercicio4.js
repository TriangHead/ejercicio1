'use strict';
let request = "Get /test/hi-there.txt HTTP/1.1";

let findRequest= request.split(" ");

let [method, path, protocol] = findRequets

alert (method);

alert(path);

alert(protocol);

//let response ="HTTP/1.0 200 OK";

//let [protocol2, code, messag] response.split(" ");

//alert(protocol2); alert(code);

//alert(messag);