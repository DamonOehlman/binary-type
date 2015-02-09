var fs = require('fs');

module.exports = {
  jpeg: fs.readFileSync(__dirname + '/1_rocinha_night_2014_panorama.jpg'),
  png: fs.readFileSync(__dirname + '/Open_Source_Media_Framework_Logo.png'),
  pdf: fs.readFileSync(__dirname + '/helloworld.pdf')
};
