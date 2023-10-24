# Group Challenge

To create a `Node.js` HTTP server that reads the content of the provided HTML file and serves it on a specified port, follow these steps:

## Steps:

1. Create a new project directory and navigate into it:

  ```bash
  mkdir node-file-server
  cd node-file-server
  ```

2. Create a `package.json` file using `npm init`. You can press **Enter** to accept the default values for most of the prompts:

  ```bash
  npm init
  ```

3. Install the `http` and `fs` modules, which are required to create the server and read the HTML file:

  ```bash
  npm install http fs
  ```

4. Create an `index.js` file to write the server code:

  ```js
  const http = require("http");
  const fs = require("fs");
  const path = require("path");

  const port = 5000; // You can use any port you prefer

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      // Read the contents of the HTML file
      const htmlFilePath = path.join(__dirname, "index.html");
      fs.readFile(htmlFilePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });

  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
  ```

5. Make sure your `index.html` and `url.txt` are located in the same folder as your `node-file-server` file.

6. Save all your changes

7. Start the `Node.js` server by running the command:

  ```bash
  node index.js
  ```

The server will start on the specified port (in this case, `5000`).

Open a web browser and go to `http://localhost:5000/`.

- You should see the content of the `index.html` file displayed.
- Your `Node.js` server is now serving the HTML file as requested.
