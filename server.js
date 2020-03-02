// const express = require("express");

// const PORT = 4000;
// const app = express();

// app.get("/hello", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(PORT, () => {
//  console.log(`Server is listening on port: ${PORT}`);
// });

const http = rewquire('http');

const server = http.createServer((req,res) => {
  console.log(req);
  process.exit();
});

server.listen(4000);