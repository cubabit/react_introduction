# Installation and Setup


This project uses Node and all of the packages are listed in the `package.json` file. To install the packages navigate to the project root and run

```
npm install
``` 

We need to use `gulp` from the command line, therefore it must be installed globally:

```
npm install gulp -g
```

Once this has been setup you view the site by running:

```
gulp
```

The default gulp task will move all code and related artifacts into the `dist` folder. This includes `src/index.html` and the required bootstrap css files from the node_modules folder. 

Before moving the code, Gulp will perform all the required transpiling (converting one form of code into another). The task will move all JavaScript into a single file at `dist/scripts/bundle.js`. This file is referenced in `index.html`.

`browserify` is being used, which means we can use the module pattern from CommonJS (aka the require syntax used in Node). There will be more on the as we progress.

The default gulp task will run `eslint` which should inform you of any syntax errors or style guide errors. 

Once all this has completed, gulp will launch a browser. The gulp file uses `gulp-connect` (with LiveReload) which will refresh the browser after a file is saved.

Note: `gulp-connect` does not always behave as expected when adding new files. If you notice odd behavior, restart gulp.

If the gulp task has worked correctly, you should see a web page with "Mix Tape" on it.