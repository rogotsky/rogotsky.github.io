const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'sb-form.js',
    path: path.resolve( __dirname, 'build' )
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/assets/images/'
            }
          }
        ],
      }
    ]
  },
  devServer: {
    contentBase: './build',
  },
};
