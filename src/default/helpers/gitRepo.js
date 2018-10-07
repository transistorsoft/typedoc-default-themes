module.exports = {
  gitRepo: function (projectName ) {
    return projectName.replace(/\s/g, '-')
  }
}
