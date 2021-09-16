/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {Number} songId - the ID of the song to play
 */
function playSong(songId) {
    // Your code here
}
let tm;
/**
 * Removes a song from the player, and updates the DOM to match.
 *
 * @param {Number} songId - the ID of the song to remove
 */

/**
 * Adds a song to the player, and updates the DOM to match.
 */
function addSong({ title, album, artist, duration, coverArt }) {
    
}

/**
 * Acts on a click event on an element inside the songs list.
 * Should handle clicks on play buttons and remove buttons of songs.
 *
 * @param {MouseEvent} event - the click event
 */
 function songHandle(event)
 {   

     const targetTag = event.target
     if(targetTag.classList.contains("remove-button"))
     {
        const sure = confirm("ARE YOU SURE YOU WANT TO DELETE THAT SONG")
        if (sure)
        {
            const toRemove = document.getElementById(targetTag.closest("div").id)
            toRemove.remove()
        }
     }
     else if (targetTag.classList.contains("songButton"))
     {
        if(targetTag.id.includes("Start"))
            {
                targetTag.textContent = "00:00"
                targetTag.style.backgroundColor = "red"
                const durationSong = targetTag.closest("div");
                tm = setInterval(function() {runSong(targetTag)} , 1000);
                
            }
        else if (targetTag.textContent === "stop")
        {
            const startId = "Start" + targetTag.id.split("Stop")[1]
            const newTag = document.getElementById(startId)
            
            
            clearInterval(tm)
        }
        else if (targetTag.textContent === "reset")
        {
            time=0;
            const startId = "Start" + targetTag.id.split("Stop")[1]
            const newTag = document.getElementById(startId)
        }
    }
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
 
 
 // You can write more code below this line
 for (let song of player.songs)
 {
     document.body.append(createSongElement(song))
 }
 
 
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
    const targetTag = event.target
     if(targetTag.matches("img"))
     {
         targetTag.style.width = "100px";
         targetTag.style.border = "0";
     }
     
     
 }
 )

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
 function createSongElement({ id, title, album, artist, duration, coverArt }) 
 {
     const songs = document.getElementById("songs")
     let song = arguments[0];
     const timepass = "00:00"
     const button = createElement("span" , ["[X]"] , ["remove-button"] , {onclick: "songHandle(event)"})
     const idEl = createElement("div" , [ id])
     const titleEl = createElement("div" , [title])
     const albumEl = createElement("div" , [album])
     const artistEl = createElement("div" , [artist])
     const CoverArtEl = createElement("img" , [] ,["coverImg"] , {src: coverArt , id: "img" + id})
     const durationEl = createElement("div" , [durationDisplay(duration)])
     const buttonStr  = createElement("button" , ["start"] , ["songButton" , id] , {onclick: "songHandle(event)" , id: "Start" + id, value: duration})
     const buttonStp  = createElement("button" , ["stop"] , ["songButton"] , {onclick: "songHandle(event)" , id: "Stop" + id})
     const buttonRes  = createElement("button" , ["reset"] , ["songButton"] , {onclick: "songHandle(event)", id: "Reset" + id})
     const buttons = createElement("span" , [buttonStr , buttonStp ,buttonRes] , [] , {})
     let children = [button , "id :" , idEl , "title: " , titleEl , "album: " , albumEl , "duration: " , durationEl , CoverArtEl, buttonStr , buttonStp ,buttonRes] 
     classes = ["song"]
 
     const attrs = {id: song.id}
     songs.append(createElement("div", children, classes, attrs))
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
 
 function createElement(tagName, children = [], classes = [], attributes = {}) 
 {
     let el = document.createElement(tagName);
     
     for (let child of children)
     {
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

 for (let song of player.songs)
 {
     
     document.body.append(createSongElement(song))
 }
 
 
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
    const targetTag = event.target
     if(targetTag.matches("img"))
     {
         targetTag.style.width = "100px";
         targetTag.style.border = "0";
     }
 }
 )

 function runSong(tag)
 {
    const currentTime = tag
    currentTime.textContent = durationDisplay(time)
    if (time < tag.value)
    {
        time+=1;
    }
    else
    {
        alert("songFinished")   
    }
 }
 let time=150;
 document.getElementById("songs").classList.add("songList")

 
 