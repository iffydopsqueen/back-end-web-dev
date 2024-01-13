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
   var app = express();

   // Set the views directory and use Pug as the view engine
   app.set("views", path.join(__dirname, "views"));
   app.set("view engine", "pug");

   // Serve static files (css, js, images)
   app.use(express.static(path.join(__dirname, "public")));

   // Define routes
   app.get("/", function (req, res) {
     res.render("food_blog");
   });

   // Start the server
   var hostname = "localhost";
   var port = process.env.PORT || 3000;

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
   |   |-- components/
   |   |   |-- headcomp.pug
   |   |   |-- blogtitle.pug
   |   |   |-- authorinfo.pug
   |   |-- food_blog.pug
   |-- package.json
   ```

The `food_blog.pug` will be the `food_blog.html` file you converted to `pug`.

Here's an online tool that can help you convert your HTML file to Pug

[HTML-to-Pug](https://html-to-pug.com/)

6.  We are required to use the `include` and `components` technique, so we will break our `pug` files into components.

    - First, create a `components` folder in the `views` directory

      ```bash
      mkdir views/components
      ```

      - In the `components` directory, create the following files:

        ```bash
        touch views/components/headcomp.pug
        touch views/components/blogtitle.pug
        views/components/authorinfo.pug
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
        head
        title Food Blog
        meta(charset='UTF-8')
        meta(name='viewport' content='width=device-width, initial-scale=1.0')
        script(src='https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js')
        link(rel='preconnect' href='https://fonts.gstatic.com')
        link(href='https://fonts.googleapis.com/css2?family=Sacramento&display=swap' rel='stylesheet')
        link(rel='stylesheet' href='../public/css/styles.css')
        aside#leftside
        aside#rightside
        #container
        header
            include components/headcomp.pug
        main
            aside#photos
            img(src='../public/images/chili.jpg' alt='White Chicken Chili' width='180')
            h2
            include components/blogtitle.pug
            section#blogposts
            ul
                li#posts(v-for='post in posts')
                span.profile
                    img(v-bind:src='post.profilepic' v-on:click='authorinfo(posts, post)')
                span.author {{ post.name }}
                |  &mdash;
                span.date {{ post.date }}
                span.reply {{ post.reply }}
                p
                    | {{ post.message }}
                include components/authorinfo.pug
        footer
            | &copy; Copyright FOOD BLOG
        script(src='../public/js/vue.js')
        ```

7.  We can now test our Express application to be sure its running properly.

    Start the app using the following command:

    ```bash
    npm start   # need to be in the 'food_blog' folder

    # OR
    node app.js   # need to be in the 'food_blog' folder
    ```

8.  Your Express app should now be running on the specified port.

    To access your application, open the web browser and navigate to

    - `http://localhost:3000`

    You should see the content of the **foodblog** displayed.
