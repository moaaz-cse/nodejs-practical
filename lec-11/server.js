const http = require("http"); //getting the http module from node.

//creating our server
const server = http.createServer(function (req, res) {
  //extra path
  if (req.url === "/getSecretData") {
    res.end("There is no secret data.");
  }
  res.end("Hello World"); //response will be send to the end user(client).
});

server.listen(7777); //assigning the port number to listen the request from client.

//Now when we open http://localhost:7777/ the response will be shown on the page.
//the server will remain until we close it.
// we can save this code into aws machine and people will hit this link and get the response.
