const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:5200/"
        : "https://frontend-1byj.onrender.com/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 5200,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.(png|svg|gif|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "autotraficFrontend",
      filename: "remoteEntry.js",
      remotes: {
        smartForm:
          argv.mode === "development"
            ? "smartForm@http://localhost:5100/remoteEntry.js"
            : "smartForm@https://smart-form-rqmr.onrender.com/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
    new Dotenv({ systemvars: true }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/favicon.ico",
      outputPath: 'auto/assets',
  }),
  ],
});
