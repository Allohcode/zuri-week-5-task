const fs = require("fs");
const http = require("http");
//using url for routing...
const url = require("url");

/*SERVER*/ //creating our server using the create server method..

const homeView = fs.readFileSync(`${__dirname}/home.html`, "utf-8");
const AboutTemp = fs.readFileSync(`${__dirname}/about.html`, "utf-8");
const contactTemp = fs.readFileSync(`${__dirname}/contact.html`, "utf-8");

//console.log(productData);

const server = http.createServer((req, res) => {
  //implementing routin..
  const { query, pathname } = url.parse(req.url, true);
  // const pathname = req.url;

  //overview Page...
  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });

    //replacing placeholder as we by looping through it and save it to a new array...

    const output = homeView;

    res.end(output);
    //product page
  } else if (pathname === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    //figuring out the product to be display..
    // const product = dataObj[query.id];
    const output = AboutTemp;
    res.end(output);

    //API
  } else if (pathname === "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    const output = contactTemp;
    res.end(output);
  } else {
    // not found
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header":
        "Page not found check your network connection and try again ",
    });
    res.end("Page not Found");
  }
});

server.listen(9000, "127.0.0.1", () => {
  console.log("Listning to req on port 9000");
});
