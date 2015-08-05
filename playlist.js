var Song = require('./song');

var Playlist = function(){
  this.songs = []
};

Playlist.prototype.isEmpty = function () {
  if(this.songs.length === 0){
    return true;
  }
  else {
    return false;
  }
  };

Playlist.prototype.addSong = function(song) {
  this.songs.push(song);
};

Playlist.prototype.songNames = function() {
  var results = [];
  for (var i = 0; i < this.songs.length; i++) {
    results.push(this.songs[i].name);
  }
  return results;
};

Playlist.prototype.removeSong = function (song) {
  var remove = this.songs.indexOf(song);
  this.songs.splice(remove, 1);
};

Playlist.prototype.totalLength = function () {
  var total = 0;

  for (var i = 0; i < this.songs.length; i++) {
    total += this.songs[i].length;
  }
  return total;
};

// Playlist.prototype.swap = function (song1, song2) {
//   // body...
// };


  module.exports = Playlist;
