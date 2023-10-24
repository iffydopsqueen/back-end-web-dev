# Week 1 Day 1 Homework

- [Task 1 - Output Modules](#task-1)
- [Task 2 - Output External Files](#task-2)

## Task 1

Create a simple `Node.js` script named `server_task1.js` that creates a basic web server and handles requests for `index.html`, `about.html`, and `contact.html`, and responds with appropriate content or an **"Invalid Request"** message when the URL doesn't match.

Follow these steps to perform the task:

### Steps:

1.  Create a new project directory and navigate into it:

    ```bash
    mkdir node-output-modules
    cd node-output-modules
    ```

2.  Create a `package.json` file using `npm init`. You can press **Enter** to accept the default values for most of the prompts:

    ```bash
    npm init
    ```

3.  Confirm your `package.json` file

    ````json
    {
    "name": "node-output-modules",
    "version": "1.0.0",
    "description": "Node HTTP Module",
    "main": "server_task1.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Ifeoma",
    "license": "ISC"
    }
        ```

    ````

4.  Make sure to have this line included in your `package.json` file if you plan to use `npm start` to run your `Node.js` application.

```json
{
  ...
  "scripts": {
    "start": "node server_task1.js", // Add this line
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

5. Create an `server_task1.js` file to write the server code:

   ```js
   // Import the required 'http' module to create an HTTP server
   var http = require("http");

   // Listen on port 5000
   var port = 5000;

   // Create an HTTP server using the HTTP module,
   // which takes a callback function with request and response parameters

   var server = http.createServer((req, res) => {
     // Get the URL from the request object
     var url = req.url;

     // Set the content type to HTML for all responses
     res.setHeader("Content-Type", "text/html");

     // Check the URL and respond accordingly
     if (url === "/") {
       // If the URL is '/', serve the "index.html" file
       res.statusCode = 200; // 200 code makes sure everything is ok
       res.end(`<html><body><h1>Welcome to the Home page</h1></body></html>`);
     } else if (url === "/about.html") {
       // If the URL is '/about.html', serve the "about.html" file.
       res.statusCode = 200; // 200 code makes sure everything is ok
       res.end(`<html><body><h1>Welcome to the About page</h1></body></html>`);
     } else if (url === "/contact.html") {
       // If the URL is '/contact.html', serve the "contact.html" file.
       res.statusCode = 200; // 200 code makes sure everything is ok
       res.end(`<html><body><h1>Contact Us</h1></body></html>`);
     } else {
       // If none of the above URL matches, respond with "Invalid Request!".
       res.statusCode = 404; // Not Found
       res.end(
         `<html><body><h1 style="color: red">Invalid Request!</h1></body></html>`
       );
     }
   });

   // Listen on the specified port => 5000 and
   // provide a callback function once the server starts
   server.listen(port, () => {
     console.log(`The NodeJS server on port ${port} is now running...`);
   });
   ```

6. Save all your changes

7. Start the `Node.js` server by running the command:

   ```bash
   node server_task1.js

   # OR
   npm start
   ```

The server will start on the specified port (in this case, `5000`).

Open a web browser and go to

- `http://localhost:5000/` for the **Home** page,
- `http://localhost:5000/about.html` for the **About** page and
- `http://localhost:5000/contact.html` for the **Contact** page.

You should see the content of your respective files displayed.

- Your `Node.js` server is now serving the HTML files as requested.

## Task 2

Create a simple `Node.js` script named `server_task2.js` that creates a web server and serves three HTML files (`home.html`, `about.html`, and `contact.html`) based on the requested URL.

Follow these steps to perform the task:

### Steps:

1.  Create the three HTML files (`home.html`, `about.html`, and `contact.html`) with basic content and CSS styles.

    ```bash
    touch node-output-modules/home.html
    touch node-output-modules/about.html
    touch node-output-modules/contact.html
    ```

2.  Add this line to your `package.json` file or simply just change the name of the script to `server_task2.js`

    ```json
    {
      "name": "node-output-modules",
      "version": "1.0.0",
      "description": "Node HTTP Module",
      "main": "server_task1.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server_task1",
        "server-task2": "node server_task2.js"
      },
      "author": "Ifeoma",
      "license": "ISC"
    }
    ```

3.  Because we have multiple `Node.js` scripts defined in your `package.json` by adding them to the "scripts" section of the file,

You can then run `server_task2.js` using the following command:

    ```bash
    npm run server-task2
    ```

And `server_task1.js` using:

    ```bash
    npm start
    ```

This allows you to manage and run multiple `Node.js` scripts from your `package.json`.

4. Create an `server_task2.js` file to write the server code:

   ```js
   // Import the required 'http' module to create an HTTP server
   var http = require("http");

   // Import the required modules: "fs" for file operations
   var fs = require("fs");
   var path = require("path");

   // Listen on port 5000
   var port = 5000;

   // Create an HTTP server using the HTTP module,
   // which takes a callback function with request and response parameters

   var server = http.createServer((req, res) => {
     // Get the URL from the request
     var url = req.url;

     // Set the content type to HTML for all responses.
     res.setHeader("Content-Type", "text/html");

     // Check the URL and serve the appropriate HTML file
     var filename;
     if (url === "/home") {
       filename = "home.html";
     } else if (url === "/about") {
       filename = "about.html";
     } else if (url === "/contact") {
       filename = "contact.html";
     }

     // If a valid URL was found, read the corresponding HTML file and send it as the response
     if (filename) {
       fs.readFile(path.join(__dirname, filename), (err, data) => {
         if (err) {
           res.statusCode = 500; // Internal Server Error
           res.end("Error loading the file");
         } else {
           res.statusCode = 200; // OK
           res.end(data);
         }
       });
     } else {
       // If none of the above URLs match, respond with a "Not Found" message
       res.statusCode = 404; // Not Found
       res.end("Not Found");
     }
   });

   // Listen on port 5000 and provide a callback function once the server starts
   server.listen(port, () => {
     console.log(`The NodeJS server on port ${port} is now running...`);
   });
   ```

5. Save all your changes

6. Start the `Node.js` server by running the command:

   ```bash
   node server_task2.js

   # OR
   npm run server_task2
   ```

The server will start on the specified port (in this case, `5000`).

Open a web browser and go to

- `http://localhost:5000/home` for the **Home** page,
- `http://localhost:5000/about` for the **About** page and
- `http://localhost:5000/contact` for the **Contact** page.

You should see the content of your respective files displayed.

- Your `Node.js` server is now serving the HTML files as requested.
