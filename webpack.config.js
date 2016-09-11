// module.exports = require('./config/webpack.dev.js');

module.exports = {
   entry: {
     vendor: './app/vendor.ts',
     app: './app/main.ts'
   },
   output: {
     path: './dist',
     filename: 'app.bundle.js'
   },
   loaders: [
    {
      test: /\.ts$/,
      loaders: 'ts'
    }
  ]
};
