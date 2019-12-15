## Webpack V2 Step By Step

Webpack is a module bundler. Webpack can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community developed webpack plugins. Sometimes these plugins are used to perform tasks that are usually done outside of webpack, such as cleaning the build directory or deploying the build.

#### In this Brach use  babel, css, scss with "webpack-dev-server"

### Steps :-
1) 
```
	npm install -D babel-core
	npm install -D babel-preset-es2015
	npm install -D extract-text-webpack-plugin@2.1.0
	npm install -D sass-loader@7.3
	npm install -D babel-loader@7
```
2) add scss folder
3) make changes in package.json:-
	```
	"scripts": {
	    "build": "webpack-dev-server",
	    "build:prod": "webpack -p"
	  }

  ```
 4) npm run build