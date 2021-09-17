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
let songIsRun;
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
                clearInterval(tm)
                if (targetTag.textContent === "start")
                {   
                    targetTag.textContent = "00:00"
                    time =0;
                }
                else
                {
                    time = fromDisplayToNum(targetTag.textContent)
                }
                targetTag.style.backgroundColor = "red"
                const durationSong = targetTag.closest("div");
                songIsRun = targetTag.id.split("Start")[1];
                
                tm = setInterval(function() {runSong(targetTag)} , 1000);
                
            }
        else if (targetTag.textContent === "stop" && targetTag.id.split("Stop")[1] === songIsRun)
        {
            
            const startId = "Start" + targetTag.id.split("Stop")[1]
            const newTag = document.getElementById(startId)
            
            
            clearInterval(tm)
        }
        else if (targetTag.textContent === "reset" )
        {
            time=0;
            const startId = "Start" + targetTag.id.split("Reset")[1]
            const newTag = document.getElementById(startId)
            newTag.style.backgroundColor = "green"
            newTag.textContent = "start"
            clearInterval(tm)
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

function handleAddSongEvent(event)
{
    event.preventDefault()
    const title = document.getElementById("title").value
    const album = document.getElementById("album").value
    const artist = document.getElementsByName("artist").value
    const duration = fromDisplayToNum(document.getElementById("duration").value)
    const coverArt = document.getElementById("cover-art").value
    const id = generteNewId()
    const newSong = {id: id , title: title , album: album , artist: artist , duration: duration, coverArt: coverArt}
    player.songs.push(newSong)
    createSongElement(newSong)
}

/**
 * Creates a song DOM element based on a song object.
 */
 function createSongElement({ id, title, album, artist, duration, coverArt }) 
 {
     const songs = document.getElementById("songs")
     let song = arguments[0];
     const timepass = "00:00"
     const button = createElement("span" , ["[X]"] , ["remove-button"] , {})
     const idEl = createElement("div" , ["id :", id])
     const titleEl = createElement("div" , ["title: " ,title])
     const albumEl = createElement("div" , ["album: " ,album] , ["album"])
     const artistEl = createElement("div" , ["artist: " ,artist])
     const CoverArtEl = createElement("img" , [] ,["coverImg"] , {src: coverArt , id: "img" + id})
     const durationEl = createElement("div" , [durationDisplay(duration)] , ["duration"] ,{})
     pickColor(durationEl , duration)
     const buttonStr  = createElement("button" , ["start"] , ["songButton" , id] , { id: "Start" + id, value: duration})
     const buttonStp  = createElement("button" , ["stop"] , ["songButton"] , {id: "Stop" + id})
     const buttonRes  = createElement("button" , ["reset"] , ["songButton"] , {id: "Reset" + id})
     const buttons = createElement("span" , [buttonStr , buttonStp ,buttonRes] , [] , {})
     let children = [button , idEl , titleEl ,  albumEl , "duration: " , durationEl , CoverArtEl, buttonStr , buttonStp ,buttonRes] 
     classes = ["song"]
     const attrs = {id: song.id}
     const newDiv = createElement("div" , children , classes , attrs)
     
     songs.append(createElement("div", children, classes, attrs))
     songs.addEventListener("click" , songHandle)
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
 
 function createElement(tagName, children = [], classes = [], attributes = {} , eventListeners = {}) 
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
     
    createSongElement(song)
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
        console.log(time)
    }
    else
    {
        alert("songFinished")
        time =0;
        tag.style.backgroundColor = "green"
        tag.textContent = "start"
        clearInterval(tm)
        const songPlace = songIds.indexOf(Number(tag.id.split("Start")[1]))
        const newTag = document.getElementById("Start" + songIds[songPlace+1])
        newTag.style.backgroundColor = "red"
        tm = setInterval(function() {runSong(newTag)} , 1000)
    }
 }

 document.getElementById("songs").classList.add("songList")

 
 function pickColor(durationEl , duration)
    {
        if (duration < 120)
        {
            durationEl.backgroundColor = "green"
        }
        if (duration > 120 && duration < 420) 
        {
            durationEl.style.backgroundColor = "rgb(" + 256/300*(duration-120) + "," + 256/300*(420-duration) + ",0)"
        }
        if (duration >= 420)
        {
            durationEl.style.backgroundColor = "red"
        }
    }