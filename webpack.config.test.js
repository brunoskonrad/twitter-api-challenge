module.exports = {
  entry: {},
  output: {},
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.json/,
        loader: 'json',
        excluse: '/node_modules/'
      }
    ]
  },
  resolve: {
    alias: {
      components: __dirname + '/src/components',
      fixtures: __dirname + '/specs/fixtures'
    }
  }
};
