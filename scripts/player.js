const player = {
    songs: [
        {
            id: 1,
            title: "Vortex",
            album: "Wallflowers",
            artist: "Jinjer",
            duration: 242,
            coverArt: "./images/cover_art/jinjer_vortex.jpg",
        },
        {
            id: 2,
            title: "Vinda",
            album: "Godtfolk",
            artist: "Songleikr",
            duration: 160,
            coverArt: "./images/cover_art/songleikr_vinda.jpg",
        },
        {
            id: 7,
            title: "Shiroyama",
            album: "The Last Stand",
            artist: "Sabaton",
            duration: 213,
            coverArt: "./images/cover_art/sabaton_shiroyama.jpg",
        },
        {
            id: 3,
            title: "Thunderstruck",
            album: "The Razors Edge",
            artist: "AC/DC",
            duration: 292,
            coverArt: "./images/cover_art/acdc_thunderstruck.jpg",
        },
        {
            id: 4,
            title: "All is One",
            album: "All is One",
            artist: "Orphaned Land",
            duration: 270,
            coverArt: "./images/cover_art/orphaned_land_all_is_one.jpg",
        },
        {
            id: 5,
            title: "As a Stone",
            album: "Show Us What You Got",
            artist: "Full Trunk",
            duration: 259,
            coverArt: "./images/cover_art/full_trunk_as_a_stone.jpg",
        },
        {
            id: 6,
            title: "Sons of Winter and Stars",
            album: "Time I",
            artist: "Wintersun",
            duration: 811,
            coverArt: "./images/cover_art/wintersun_sons_of_winter_and_stars.jpg",
        },
    ],
    playlists: [
        { id: 1, name: "Metal", songs: [1, 7, 4, 6] },
        { id: 5, name: "Israeli", songs: [4, 5] },
    ],
}
const songIds = []
for(let song of player.songs)
{
    songIds.push(song.id)
}


function durationDisplay(duration)
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

function playingSong(song , indexSong)
{
    let timeS = 0;
    setTimeout(() => {timeS+=1; console.log(timeS)}, 1000)
    const songPlaying = document.getElementById(song.id)
    songPlaying.classList.add("active")
    songPlaying.append(createElement("span" , [displaySong(song)] , ["liveSong"] , {}))
    setTimeout(() => {endSong(songPlaying , indexSong)
        
    }, song.duration*30);
    
    
    
    
}

function endSong(songPlaying , indexSong)
{
    if (indexSong < player.songs.length)
    {
        songPlaying.classList.remove("active")
        playingSong(player.songs[indexSong+1] , indexSong+1)
    }
    if (indexSong === player.songs[songs.length-1])
        alert("YOU HAVE LISTEN TO ALL OF OUR SONGS")
}


