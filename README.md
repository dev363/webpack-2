## Webpack V2 Step By Step

Webpack is a module bundler. Webpack can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community developed webpack plugins. Sometimes these plugins are used to perform tasks that are usually done outside of webpack, such as cleaning the build directory or deploying the build.

#### In this Brach use  file and html loader with "webpack-dev-server"

### Steps :-
1) 
```
	npm install -D file-loader@0.10.1
	npm install -D html-loader
	npm install -D html-webpack-plugin@3.2.0
```
2) add img folder
3) make changes in package.json:-
	```
	"scripts": {
	    "build": "webpack-dev-server",
	    "build:prod": "webpack -p"
	  }

  ```
 4) npm run build