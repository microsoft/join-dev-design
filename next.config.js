const path = require('path')
const glob = require('glob')

module.exports = {

  distDir: 'public',

  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },

}
