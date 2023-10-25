# Week 1 Day 2 Homework

## Task

Convert the **foodblog** page into an Express application using Express Generator.

Follow these steps to perform the task:

### Steps:

1.  Install the Express Generator globally (if not already installed)

```bash
npm install -g express-generator
```

2. Create a new Express app named `foodblog-express` using `pug` as the **view engine**

   **Note:** If you don't specify the type of view engine to use, it defaults to **"jade"**. After running that "`express`" command, it generates your `foodblog-express` app in a folder.

```bash
express --view=pug foodblog-express
```

3. Navigate to the project directory

```bash
cd foodblog-express
```

4. Install project dependencies

```bash
npm install
```

5. Move your HTML, CSS, and Vue.js code to their appropriate folders.

```bash
# move your "homework_foodblog.html" file to "views/index.pug"
mv homework_foodblog.html views/index.pug

# move your "styles.css" and "vue.js" files into the "public" directory
mv styles.css public/stylesheets/styles.css
mv vue.js public/javascripts/vue.js
```

In your `index.pug` file, replace `<!DOCTYPE html>` with `doctype html`, and convert HTML tags to `pug` syntax.

6. Update references to your CSS and JavaScript files in `views/index.pug` to reflect the new locations in the `public` directory

```bash
link(rel='stylesheet', href='/styles.css') // Update the CSS reference
script(src='/vue.js') // Update the JavaScript reference
```

7. Modify your `app.js` file with these changes:

```js
var express = require('express');
var path = require('path');

var app = express();

// Set the 'views' directory and use the Pug template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'));

// Define a route to render your HTML file
app.get('/', (req, res) => {
  res.render('index');
});

var port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

8. Save all your changes

9. If your HTML file relies on external libraries or scripts, make sure to install their dependencies as needed. For example, if you're using Vue.js, install `vue`

```bash
npm install vue
```

10. Start your Express app using the following command:

```bash
# if you are on a Mac
DEBUG=foodblog-express:* npm start

# OR
npm start  # in the foodblog-express directory
```

11. Your Express app should now be running on the specified port.

To access your application, open the web browser and navigate to

- `http://localhost:3000`

You should see the content of your page displayed.
