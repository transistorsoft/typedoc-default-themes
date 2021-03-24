module.exports = {
  gitRepo: function (project) {
    return project.packageInfo.name;
  },
  foo: function(value) {
  	console.log('- foo: ', value);
  	return 'foo-' + value;
  },
  bar: function(value) {
  	return 'bar-' + value;
  }
}
