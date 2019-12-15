## Webpack V2 Step By Step

Webpack is a module bundler. Webpack can take care of bundling alongside a separate task runner. However, the line between bundler and task runner has become blurred thanks to community developed webpack plugins. Sometimes these plugins are used to perform tasks that are usually done outside of webpack, such as cleaning the build directory or deploying the build.

#### In this Branch use multiple Html files with file-loader and html-webpack-plugin

### Steps :-
1) add new HTML file
2) Add new rule in webpack.config.js:-
	```
	// Use could use this to add all HTML files
			{
				test:/\.html$/,
				use:[
					{
						loader:"file-loader",
						options:{
							name:'[name].[ext]'
						}
					}
				],
				exclude: path.join(__dirname,"/src/index.html")
			}
  ```
 3) npm run build