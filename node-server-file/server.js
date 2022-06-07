const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000; //Save the port number where your server will be listening
var path = require("path");
var fs = require("fs");
//Idiomatic expression in express to route and respond to a client request
app
  .get("/", (req, res) => {
    res.json("Hello Server");
  })
  .on("error", function (err) {
    // Handle errors
    fs.unlink(myFile); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });

app.get("/doc", function (req, res) {
  const file = `${__dirname}/nucleo_f767zi_https_client_iap_dual_bank_green_image_scenario_1.img`;
  let filename = path.basename(file);
  // console.log(mimetype);
  res.setHeader("Content-disposition", "attachment; filename=" + filename);
  res.setHeader("Content-Encoding", "x-gzip");
  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`<< Now Listening On Port ${port}  >>`);
  console.log(`  << http://localhost:${port}/ >>`);
});
