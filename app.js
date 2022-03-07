var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/review"] = handler.review;
console.log("******************");
console.log(handle);
console.log("******************");
server.startserver(router.route, handle);

