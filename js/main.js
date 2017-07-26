'use strict';

//Global params
var apiKey = '4ZTK2X91QPSFVBV0';
var searchUrl = 'https://freemusicarchive.org/api/trackSearch?q=';
var searchLimit = 10;

$(document).ready(function() {
  var container = document.querySelector('div.container');
  var form = document.getElementById('main-form');
  var input = form.querySelector('input[type="text"]');
  var button = form.querySelector('button[type="submit"]');

  button.addEventListener('click', function(event) {
    event.preventDefault();
    container.innerHTML = '';
    
    //Main search!
    if (input.value.length > 0) {
      searchGlobal(input.value, searchLimit);
    }
  });

  function createUrl(dataset, apiKey) {
    return 'https://freemusicarchive.org/api/get/' + dataset + '.json?api_key=' + apiKey;
  }

  function searchGlobal(searchStr, limit) {
    $.ajax({
      method: 'GET',
      url: searchUrl + searchStr + '&limit=' + limit,
      success: function(data) {
        var searchResult = JSON.parse(data).aRows;

        searchResult.forEach(function(item) {
          getTrackDataById( getTrackId(item) );
        });
      },
      error: function(e) {
        console.log(e);
      }
    });
  }

  function getTrackDataById(id) {
    $.ajax({
      method: 'GET',
      url: createUrl('tracks', apiKey) + '&track_id=' + id,
      success: function(data) {
        var trackData = JSON.parse(data).dataset[0];

        addTrackBlock(container, trackData);
      },
      error: function(e) {
        console.log(e);
      }
    });
  }

  function getTrackId(string) {
    var id = string.match(/\(\d{0,9}\)/)[0].slice(1, -1);

    return id;
  }

  function addTrackBlock(parentBlock, data) {
    var div = document.createElement('div');
    var title = document.createElement('h3');
    var artist = document.createElement('p');
    var album = document.createElement('p');
    var audio = document.createElement('audio');

    div.className = 'track';
    title.className = 'track-title';
    artist.className = 'track-artist';
    album.className = 'track-album';
    audio.className = 'track-audio';

    title.innerHTML = data.track_title;
    artist.innerHTML = data.artist_name;
    album.innerHTML = data.album_title;
    audio.setAttribute('src', 'https://files.freemusicarchive.org/' + data.track_file);
    audio.setAttribute('controls', 'controls');

    parentBlock.appendChild(div);
    div.appendChild(title);
    div.appendChild(artist);
    div.appendChild(album);
    div.appendChild(audio);
  }
});
//