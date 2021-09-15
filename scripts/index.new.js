/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {Number} songId - the ID of the song to play
 */
function playSong(songId) {
    // Your code here
}

/**
 * Removes a song from the player, and updates the DOM to match.
 *
 * @param {Number} songId - the ID of the song to remove
 */
function removeSong(songId) {
    // Your code here
}

/**
 * Adds a song to the player, and updates the DOM to match.
 */
function addSong({ title, album, artist, duration, coverArt }) {
    // Your code here
}

/**
 * Acts on a click event on an element inside the songs list.
 * Should handle clicks on play buttons and remove buttons of songs.
 *
 * @param {MouseEvent} event - the click event
 */
function handleSongClickEvent(event) {
    // Your code here
}

/**
 * Handles a click event on the button that adds songs.
 *
 * @param {MouseEvent} event - the click event
 */
function handleAddSongEvent(event) {
    // Your code here
}

/**
 * Creates a song DOM element based on a song object.
 */
function createSongElement({ id, title, album, artist, duration, coverArt }) {
    const children = []
    const classes = []
    const attrs = {}
    const eventListeners = {}
    return createElement("div", children, classes, attrs, eventListeners)
}

/**
 * Creates a playlist DOM element based on a playlist object.
 */
function createPlaylistElement({ id, name, songs }) {
    const children = []
    const classes = []
    const attrs = {}
    const eventListeners = {}
    return createElement("div", children, classes, attrs, eventListeners)
}

/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"}, {click: (...) => {...}})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 * @param {Object} eventListeners - the event listeners on the element
 */
function createElement(tagName, children = [], classes = [], attributes = {}, eventListeners = {}) {
    // Your code here
}

/**
 * Inserts all songs in the player as DOM elements into the songs list.
 */
function generateSongs() {
    // Your code here
}

/**
 * Inserts all playlists in the player as DOM elements into the playlists list.
 */
function generatePlaylists() {
    // Your code here
}

// Creating the page structure
generateSongs()
generatePlaylists()

// Making the add-song-button actually do something
document.getElementById("add-button").addEventListener("click", handleAddSongEvent)

/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {String} songId - the ID of the song to play
 */
 function playSong(songId)
 {
       const songTime = 0;
       const indexSong = player.songs.findIndex(i => i.id === songId)
       const song = player.songs[indexSong]
       const setDur = document.getElementById("songdur");
       playingSong(song , indexSong)
 
 }
 
 function displaySong(song)
 {
     let songdisplay = "YOU ARE LISTENING TO: " + song.title + " from " + song.album + " by " + song.artist + " | " + durationDisplay(song.duration) + "."
     return songdisplay
 }
 
 /**
  * Creates a song DOM element based on a song object.
  */
 function createSongElement({ id, title, album, artist, duration, coverArt }) 
 {
     let song = arguments[0];
     const idEl = createElement("div" , [ id])
     const titleEl = createElement("div" , [title])
     const albumEl = createElement("div" , [album])
     const artistEl = createElement("div" , [artist])
     const CoverArtEl = createElement("img" , [] ,["coverImg"] , {src: coverArt , id: "img" + id})
     const durationEl = createElement("div" , [duration])
     let children = ["id :" , idEl , "title: " , titleEl , "album: " , albumEl , "duration: " , durationDisplay(duration) , CoverArtEl] 
     classes = ["songs"]
 
     const attrs = { onclick: `playSong(${id})` , id: song.id}
     return createElement("div", children, classes, attrs)
 }
 
 /**
  * Creates a playlist DOM element based on a playlist object.
  */
 function createPlaylistElement({ id, name, songs }) {
     const idPl = createElement("div" , ["playlist id: " , id])
     const children = []
     const classes = []
     const attrs = {}
     return createElement("div", children, classes, attrs)
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
 function createElement(tagName, children = [], classes = [], attributes = {}) 
 {
     let el = document.createElement(tagName);
     
     for (let child of children)
     {
         console.log(child)
         el.append(child)
     }
 
     for (let cls of classes)
     {
         el.classList.add(cls)
     }
 
     for (let attr in attributes)
     {
         el.setAttribute(attr , attributes[attr])
     }
     return el
 }
 
 // You can write more code below this line
 for (let song of player.songs)
 {
     console.log("dg")
     document.body.append(createSongElement(song))
 }
 
 console.log(songIds)
 
 document.addEventListener("mouseover" , function(event)
 {
     if(event.target.matches("img"))
     {
         const targetTag = event.target
         targetTag.style.width = "120px";
         targetTag.style.border = "5px solid green";
     }
 }
 )
 
 document.addEventListener("mouseout" , function(event)
 {
     if(event.target.matches("img"))
     {
         const targetTag = event.target
         targetTag.style.width = "100px";
         targetTag.style.border = "0";
     }
 }
 )
