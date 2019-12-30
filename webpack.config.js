switch (process.env.ENV) {
  case 'production':
    module.exports = require('./webpack/webpack.prod')
    break;
  case 'development':
  default:
    module.exports = require('./webpack/webpack.dev')
}
