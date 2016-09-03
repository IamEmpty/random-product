module.exports = {
   entry: './app/main.ts',
   output: {
     path: './dist',
     filename: 'app.bundle.js'
   },
   loaders: [
    {
      test: /\.ts$/
      loaders: 'ts'
    }
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
 };
