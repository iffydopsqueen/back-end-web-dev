# Week 1 Day 2 Homework

## Task

Convert the **foodblog** website into an Express application using Express Generator.

But our `foodblog` website is in `Vue.js`, so we will need to convert this to an `Express.js` application. We will be achieving this using the `express-generator`.

Follow these steps to perform the task:

### Steps:

1. First, let's convert our website into an ExpressJS app

   In your `foodblog-express` directory, run this command:

   ```bash
   npm init
   ```

2. Now use this `package.json` file to configure yours.

   ```json
   {
     "name": "foodblog-express",
     "version": "1.0.0",
     "description": "My Foodblog Express App",
     "main": "vue.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Ifeoma Eleweke",
     "license": "ISC"
   }
   ```

3. Next, run this command to install the `express` package. Beware, when you run this command, a `node_modules` folder and a `package-lock.json` file will be created.

   ```bash
   npm install --save express
   ```

4. Now, let's setup our Express app by using the `express-generator`.

   Install the Express Generator globally (if not already installed). If globally isn't working for you, you can also install it locally by removing the `-g` flag.

   Be mindful, if you are getting a permission denied error, make sure you give it **admin** privileges by using the `sudo` command.

   ```bash
   # Install globally
   npm install -g express-generator

   # Using "admin" privileges
   sudo npm install -g express-generator

   # Install locally
   npm install express-generator
   ```

5. Create a new Express app named `foodblog-express` using the deafult **view engine**, which is `jade`.

   **Note:** If you don't specify the type of view engine to use, it defaults to **"jade"**. After running that "`express`" command, it will generate your `foodblog-express` app in a folder.

   ```bash
   # If you want to specify another "view engine"
   express --view=pug foodblog-express

   # If using the default, "jade", run this command instead:
   express
   ```

   When prompted if you want to continue in current directory where you currently have other files, simply enter `y` for yes to accept it. This will create the full structure of an express app for you.

6. Navigate to the project directory to be able to install the dependencies into the project directory.

   ```bash
   cd foodblog-express
   ```

7. Now, install the dependencies into your project. You can take a look at your `package.json` file to see all the dependencies it's going to install.

   ```bash
   npm install
   ```

8. Now to get our application working, let's move our files to the appropriate folders.

   - Move the existing files of the **foodblog** into the "`public`" folder of the newly created ExpressJS project.

     - The `vue.js` file should be moved into the `/public/javascripts/` folder

     - The `styles.css` file should be moved into the `/public/stylesheets/` folder

     - The `index.html` file should be moved into the `/public/` folder

     - The both images should be moved into the `/public/images/` folder

9. Update the newly created `app.js` file to define the new route of your `index.html` file

   ```js
   app.use("/", indexRouter);
   app.use("/users", usersRouter);

   // The lines below is what you add to your "app.js" file

   // Define the home route
   app.get("/", function (req, res) {
     res.sendFile(path.join(__dirname, "public", "index.html"));
   });
   ```

10. Now, we need to adjust the paths in our HTML file

    In the `index.html` file, update the paths to the CSS, JS and images files.

    ```html
    <!-- Custom CSS -->
    <link rel="stylesheet" href="./stylesheets/styles.css" />

    <!-- VUE script -->
    <script src="./javascripts/vue.js"></script>

    <!-- Make sure the images have their paths adjusted to this. We just care about the directory paths here -->
    <img :src="'./images/chili.jpg'" alt="White Chicken Chili" width="180" />

    <img
      :src="'./images/profile.png'"
      alt="Profile Image"
      width="40"
      @click="showProfile(post.author)"
    />
    ```

11. Save all your changes

12. If your HTML file relies on external libraries or scripts, make sure to install their dependencies as needed. For example, if you're using Vue.js, install `vue`.

    ```bash
    npm install vue
    ```

13. We can now test our Express application to be sure its running properly.

    Start the app using the following command:

    ```bash
    # if you are on a Mac, you can use this command or the other
    DEBUG=foodblog-express:* npm start

    # OR
    npm start  # in the foodblog-express directory
    ```

14. Your Express app should now be running on the specified port.

    To access your application, open the web browser and navigate to

    - `http://localhost:3000`

    You should see the content of the **foodblog** displayed.

## Glossary

When using the `express-generator` functionality, these should be its structure:

- **Routes** contains all your JS files that has all your modules and custom code. It tells the application how to load the page.

- **Views** is your template. This is using `jade` view engine for templating.

- **Public** contains all your `public` files like JS, images, css and html.

After you run an `npm install`, you would get this file and folder installed as well:

- **node_modules** has all the core node modules and libraries

- **package-lock.json** keeps track of all the modules and libraries of the project
