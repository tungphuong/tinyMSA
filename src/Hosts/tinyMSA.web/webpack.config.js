const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const extractCSS = new ExtractTextPlugin("[name].fonts.css");
const extractSCSS = new ExtractTextPlugin("[name].styles.css");

const bundleOutputDir = "./wwwroot/dist";

module.exports = env => {
  const isDevBuild = !(env && env.prod);
  return [
    {
      stats: { modules: false },
      //entry: { 'main': './ClientApp/boot.tsx' },
      entry: { main: "./ClientApp/boot.js" },
      resolve: { extensions: [".js", ".jsx"] },
      output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: "[name].js",
        publicPath: "dist/"
      },
      module: {
        rules: [
          //{ test: /\.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
          {
            test: /\.(js|jsx)$/,
            include: /ClientApp/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["react", "env"]
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              use: isDevBuild ? "css-loader" : "css-loader?minimize"
            })
          },
          {
            test: /\.(scss)$/,
            use: ["css-hot-loader"].concat(
              extractSCSS.extract({
                fallback: "style-loader",
                use: [
                  {
                    loader: "css-loader",
                    options: { alias: { "../img": "../../wwwroot/img" } }
                  },
                  {
                    loader: "sass-loader"
                  }
                ]
              })
            )
          },

          { test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=25000" }
        ]
      },
      plugins: [
        //new CheckerPlugin(),
        new ExtractTextPlugin("site.css"),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require("./wwwroot/dist/vendor-manifest.json")
        })
      ].concat(
        isDevBuild
          ? [
              // Plugins that apply in development builds only
              new webpack.SourceMapDevToolPlugin({
                filename: "[file].map", // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(
                  bundleOutputDir,
                  "[resourcePath]"
                ) // Point sourcemap entries to the original file locations on disk
              })
            ]
          : [
              // Plugins that apply in production builds only
              new webpack.optimize.UglifyJsPlugin()
              //new ExtractTextPlugin('site.css')
            ]
      )
    }
  ];
};
