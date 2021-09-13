/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {String} songId - the ID of the song to play
 */
function playSong(songId)
{
    for(let song of player.songs) {
        document.getElementById('song' + song.id).classList.remove('playing');
        if(song.id === songId) {
            document.getElementById('song' + song.id).classList.add('playing');
        }
    }
    songIndex = sortedSongs.findIndex(x => x.id === songId);
}

/**
 * Creates a song DOM element based on a song object.
 */
function createSongElement({ id, title, album, artist, duration, coverArt }) 
{
    var songId = document.createElement("li");
    var songTitle = document.createElement("li");
    var songAlbum = document.createElement("li");
    var songArtist = document.createElement("li");
    var songDuration = document.createElement("li");
    var songCoverArt = document.createElement("img");
    songCoverArt.src = coverArt
    songId.innerText = id
    songTitle.innerText = title
    songAlbum.innerText = album
    songArtist.innerText = artist
    songDuration.innerText = duration
    songCoverArt.innerText = coverArt
    var div = document.createElement("div")
    div.append(songId, songTitle, songAlbum, songArtist, songDuration, songCoverArt)
    songLi.append(div)
    
    
    
    
    const children = [id , title , album , artist ,duration , coverArt];
    const classes = []
    const attrs = { onclick: `playSong(${id})`}
    
}

function mmss (duration)
{
  let newDuration = [Math.floor(duration/60) , duration%60];
  if (newDuration[1] < 10)
  {
      newDuration[1] = "0" + newDuration[1].toString();
  }
  if (newDuration[0] < 10)
  {
      newDuration[0] = "0" + newDuration[0].toString();
  }
  return newDuration.join(":");
}

/**
 * Creates a playlist DOM element based on a playlist object.
 */
function createPlaylistElement({ id, name, songs })
 {
    const list = []
    var newDiv = document.createElement("div")
    for (let key in arguments[0])
    {  
        let li = document.createElement("li")
        li.innerText = arguments[0][key]
        newDiv.appendChild(li)
    }
    console.log(list)
    const children = list
    const classes = ["A"]
    const attrs = {}
    return newDiv
}

/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */
function createElement(tagName, children = [], classes = [], attributes = {}) {
    // Your code here
}
let songLi = document.getElementById("songs");
for (let song of player.songs)
{
    createSongElement(song)
}

var playlist2 = document.getElementById("playlists")
console.log(playlists)
for (let playlist of player.playlists)
    playlist2.append(createPlaylistElement(playlist))
     
// You can write more code below this line



  