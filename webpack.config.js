var path = require('path');

module.exports = (env, argv) => {
  const production = argv.mode === 'production';
  //console.log('ENV', env, argv)
  return {
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'www/js')
    },
    resolve: {
      alias: {
        conf: production?path.resolve(__dirname, 'src/conf.prod.js'):path.resolve(__dirname, 'src/conf.dev.js')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ]
    }
  };

}
