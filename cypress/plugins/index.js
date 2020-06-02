// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
  const pathToConfigFile = path.resolve('cypress', 'support/config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.configFile || 'prod'

  return getConfigurationByFile(file)
}
