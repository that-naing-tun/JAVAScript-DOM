const playlistcontainerTag = document.getElementsByClassName("playlistcontainer")[0];

const tracks = [
    {trakId : "music/track1.mp3" , title : "Tayar Taw Myar 1 "},
    {trakId : "music/track2.mp3" , title : "Tayar Taw Myar 2 "},
     {trakId : "music/track3.mp3" , title : "Tayar Taw Myar 3 "},
     {trakId : "music/track4.mp3" , title : "Tayar Taw Myar 4 "}
];

for (let i= 0 ; i< tracks.length ; i++){
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click" , () => {
        const 
    })
    trackTag.classList.add("trackItem");
    const title = (i+1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playlistcontainerTag.append(trackTag);
}