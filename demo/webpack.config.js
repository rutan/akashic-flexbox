const path = require('path');

const paths = (() => {
  const root = __dirname;
  return {
    root,
    src: path.join(root, 'src'),
    out: path.join(root, 'game', 'script'),
    nodeModules: path.join(root, 'node_modules')
  };
})();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    bundle: [path.join(paths.src, 'index.ts')]
  },
  output: {
    libraryTarget: 'commonjs',
    path: paths.out,
    publicPath: '.',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: paths.src,
        loader: 'ts-loader'
      }
    ]
  }
};
