var http = require('http');
var url = require('url');

function startserver(route, handle){

    http.createServer(onRequest).listen(8888);

    function onRequest(request, response){
        var reviewData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Requesting received for " + pathname);
        request.setEncoding("utf8");

        request.addListener("data",function(chunk){
            reviewData += chunk;
        });

        request.addListener("end",function(){
            route(handle,pathname,response,reviewData);
        });
    }
    console.log("Server started on localhost port 8888");
}

exports.startserver = startserver;