var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin= require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin= new ExtractTextPlugin({
	filename:"main.css"
})
module.exports={

	entry:"./src/js/app.js",
	output:{
		path: path.join(__dirname, "dist"),
		filename:"bundle.js",
		// publicPath:"dist/"
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				use:[
					{
						loader:"babel-loader",
						options:{
							presets:["es2015"]
						}
					}
				]
			},
			{
				test:/\.html$/,
				use:["html-loader"]
			},
			{
				test:/\.css$/,
				use:[
					"style-loader","css-loader"
				]
			},
			{
				test:/\.scss$/,
				use: extractPlugin.extract({
					use:["css-loader", "sass-loader"]
				})
			},
			{
				test:/\.(jpg|png)$/,
				use:[
					{
						loader:"file-loader",
						options:{
							name:'[name].[ext]',
							outputPath:"img/",
							publicPath:"img/"
						}
					}
				]
			},
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
		]
	},
	plugins:[
		new webpack.ProvidePlugin({
			"$":"jquery",
			"jQuery":"jquery"
		}),
		extractPlugin,
		new HtmlWebpackPlugin({
			filename:"index.html",
			template: "src/index.html"
		}),

		// Use could use one by one add HTML files
		// new HtmlWebpackPlugin({
		// 	filename:"AboutUs.html",
		// 	template: "src/AboutUs.html",
		// 	chunks:[]
		// })
		//new CleanWebpackPlugin(['dist'])
	]
}
