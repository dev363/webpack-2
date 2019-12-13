## Webpack V2 Step By Step

Webpack is a module bundler. Webpack can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community developed webpack plugins. Sometimes these plugins are used to perform tasks that are usually done outside of webpack, such as cleaning the build directory or deploying the build.

#### In this Brach use "webpack-dev-server"

### Steps :-
1) npm install -D webpack-dev-server@2.*
3) make changes in package.json:-
	```
	"scripts": {
	  "build": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
	  "build:prod": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js -p"
	}

  ```
 4) npm run build