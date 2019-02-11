const Dotenv = require('dotenv-webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv({
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true
      })
    ]
  }
}