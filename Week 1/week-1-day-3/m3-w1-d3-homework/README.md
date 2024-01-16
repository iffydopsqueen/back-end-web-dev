# Week 1 Day 3 Homework

## Task

Convert the **foodblog** page into an Express application using `Pug` as the templating engine.

- Also use the `include` and `components` technique while making your conversion

Follow these steps to perform the task:

### Steps:

1. First, let's convert our `foodblog` page into an ExpressJS app

   In your `foodblog` folder/directory, run this command:

   ```bash
   npm init
   ```

2. Now use this `package.json` file to configure yours.

   ```json
   {
     "name": "foodblog",
     "version": "1.0.0",
     "description": "My Foodblog App using Pug",
     "main": "app.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "node app.js"
     },
     "author": "IE",
     "license": "ISC"
   }
   ```

3. Next, install the necessary dependencies. Beware, when you run this command, a `node_modules` folder and a `package-lock.json` file will be created.

   ```bash
   npm install express
   npm install pug
   ```

4. Now, let's create an `app.js` file for our Express app with the following content:

   **Note:**This file should be created in the `food_blog` directory.

   ```js
   var express = require("express");
   var path = require("path");
   var serverRouter = require("./routes/server");
   var app = express();

   app.use("/public", express.static(path.join(__dirname, "public")));

   app.set("views", path.join(__dirname, "views"));
   app.set("view engine", "pug");

   app.use("/components", serverRouter);

   app.get("/", function (req, res) {
     res.render("food_blog");
   });

   var hostname = "localhost";
   var port = 3000;

   app.listen(port, function () {
     console.log(`Server is running on http://${hostname}:${port}`);
   });
   ```

5. To structure our project, let's create the following files and folders

   ```bash
   foodblog/
   |-- app.js
   |-- public/
   |   |-- css/
   |   |   |-- styles.css
   |   |-- js/
   |   |   |-- vue.js
   |   |-- images/
   |   |   |-- chili.jpg
   |   |   |-- profile.png
   |-- views/
   |   |-- headcomp.pug
   |   |-- blogtitle.pug
   |   |-- authorinfo.pug
   |   |-- food_blog.pug
   |-- routes/
   |   |-- server.js
   |-- package.json
   ```

The `food_blog.pug` will be the `food_blog.html` file you converted to `pug`.

Here's an online tool that can help you convert your HTML file to Pug

[HTML-to-Pug](https://html-to-pug.com/)

6.  We are required to use the `include` and `components` technique, so we will break our `pug` files into simple templates.

    - Let's create these **pug** files:

      ```bash
      touch views/headcomp.pug
      touch views/blogtitle.pug
      touch views/authorinfo.pug
      ```

    Here's their respective contents:

    Content of `headcomp.pug`

         ```bash
         span Food Blog
         ```

    Content of `blogtitle.pug`

         ```bash
         span Comments
         ```

    Content of `authorinfo.pug`

         ```pug
         #info_box(v-for='post in posts' v-if='post.thisBox')
         p.closeBtn.closeBtnP(v-on:click="$emit('close', post.thisBox = false)") &#x2716;
         #info_title {{ post.name }}
         #info_foodie
             span Foodie Level:
             | {{ post.foodielevel }}
         #info_bio
             span
             | Bio:
             br
             | {{ post.bio }}
         button.closeBtn.closeBtnB(v-on:click="$emit('close', post.thisBox = false)") Close
         p#close_info
         ```

    Content of `food_blog.pug`

        ```pug
        doctype html
        html(lang='en')
          head
            title Food Blog
            meta(charset='UTF-8')
            meta(name='viewport', content='width=device-width, initial-scale=1.0')
            script(src='https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js')
            link(rel='preconnect', href='https://fonts.gstatic.com')
            link(href='https://fonts.googleapis.com/css2?family=Sacramento&display=swap', rel='stylesheet')
            link(rel='stylesheet', href='../public/css/styles.css')
          body
            aside#leftside
            aside#rightside
            #container
              header
                include ./headcomp.pug
              main
                aside#photos
                  img(src='../public/images/chili.jpg', alt='White Chicken Chili', width='180')
                h2
                  include ./blogtitle.pug
                section#blogposts
                  ul
                    li#posts(v-for='post in posts')
                      span.profile
                        img(v-bind:src='post.profilepic', v-on:click='authorinfo(posts, post)')
                      span.author {{ post.name }}
                      |  &mdash;
                      span.date {{ post.date }}
                      span.reply {{ post.reply }}
                      p
                        | {{ post.message }}
                    include ./authorinfo.pug
              footer
                | &copy; Copyright FOOD BLOG
            script(src='../public/js/vue.js')
        ```

7.  Now let's add the following content to our `server.js` file:

    Content of `server.js`:

    ```js
    var express = require("express");
    var router = express.Router();

    router.get("/components", function (req, res) {
      res.render("food_blog");
    });

    module.exports = router;
    ```

8.  In your `vue.js` file, make sure to adjust the file paths of the `profilepic`.

    - Change each of the `posts` to have a file path of `'/public/images/profile.png'` instead of `'images/profile.png'`.

9.  Remember, we were told to use the `components` technique in our application.

    To do this,

    - set up a route for `'/components'` in our `server.js` file

    - in your `app.js` file, include the `router` from `server.js` and use it as a middleware for the `/components` route.

    Here's how we add that to our `app.js` file:

    ```js
    var serverRouter = require("./routes/server"); // Import the server router

    // Use the serverRouter for the '/components' route
    app.use("/components", serverRouter);
    ```

10. We can now test our Express application to be sure its running properly.

    Start the app using the following command:

    ```bash
    npm start   # need to be in the 'food_blog' folder

    # OR
    node app.js   # need to be in the 'food_blog' folder
    ```

11. Your Express app should now be running on the specified port.

    To access your application, open the web browser and navigate to

    - `http://localhost:3000`

    You should see the content of the **foodblog** displayed.
