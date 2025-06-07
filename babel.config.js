module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['>0.25%', 'not dead', 'ie 11']
      },
      useBuiltIns: 'usage',
      corejs: 3
    }],
    '@babel/preset-react'
  ]
};
