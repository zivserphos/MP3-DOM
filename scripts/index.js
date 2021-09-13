/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {String} songId - the ID of the song to play
 */
function playSong(songId) {
    // Your code here
}

/**
 * Creates a song DOM element based on a song object.
 */
function createSongElement({ id, title, album, artist, duration, coverArt }) 
{
    let song = arguments[0];
    /*let songId = document.createElement("div")
    /* artist element 
    let songTitle = document.createElement("div")
    let songAlbum = document.createElement("div")
    let songArtist = document.createElement("div")
    let songDuration = docuoment.createElement("div")*/
    const idEl = createElement("div" , [ id])
    const titleEl = createElement("div" , [title])
    const albumEl = createElement("div" , [album])
    const artistEl = createElement("div" , [artist])
    const durationEl = createElement("div" , [duration])
    const CoverArtEl = createElement("img" , [] ,["coverImg"] , {src: coverArt})
    let children = ["id :" , idEl , "title: " , titleEl , "album: " , albumEl , "duration: " , duration , CoverArtEl] 
    classes = []

    const attrs = { onclick: `playSong(${id})` }
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