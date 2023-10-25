# Group Challenge

To create an `ExpressJS` app that displays a **form** with a username label, a password label, textboxes for both, and a submit button, follow these steps:

## Steps:

1. Create a new project directory and navigate into it:

```bash
mkdir my-express-app
cd my-express-app
```

2. Create a `package.json` file using `npm init`. You can press **Enter** to accept the default values for most of the prompts:

```bash
npm init
```

3. Confirm that these are the contents of your `package.json` file:

```json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "description": "Simple Express App",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  }
}
```

4. Now let's install our `express` package into our `package.json` file

```bash
npm install express --save
```

Confirm that this dependency was truly installed. This should now be the contents of your `package.json` file:

```json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "description": "Simple Express App",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

5. Create an `app.js` file to write the server code:

```js
// Require the 'express' module to create an Express application
var express = require("express");

// Require the 'path' module to work with file paths
var path = require("path");

// Create an Express application
var app = express();

// Define the port number & hostname on which the app will listen for incoming requests
var port = 3000;
var hostname = "localhost";

// Serve static files (like the "index.html" file) from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Start the Express app and listen on the specified port
app.listen(port, hostname, () => {
  console.log(`App is running on http://${hostname}:${port}`);
});
```

6. Create a `public` folder with an `index.html` file

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Express App</title>
    <style>
      .container {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
        align-items: center;
      }

      form {
        padding: 25px;
        width: 300px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      }

      label {
        display: inline-block;
        width: 45%;
        /* Adjust width as needed */
        text-align: left;
      }

      input[type="text"],
      input[type="password"] {
        display: inline-block;
        width: 45%;
        /* Adjust width as needed */
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 15px;
      }

      input[type="submit"] {
        width: 50%;
        padding: 7px;
        background-color: blue;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <form action="/login" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </body>
</html>
```

7. Save all your changes

8. Start the `Node.js` server by running the command:

```bash
node app.js

# OR
npm start
```

The server will start on the specified port (in this case, `3000`).

Open a web browser and go to `http://localhost:3000/`.

You should see the content of the `index.html` file displayed.

- Your `Node.js` server is now serving the HTML file as requested.
