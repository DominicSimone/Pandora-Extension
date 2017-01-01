// updates title of tab to name of song and artist
function setTitle() {
    document.title=document.getElementsByClassName("songTitle")[0].innerHTML + " - " + document.getElementsByClassName("artistSummary")[0].innerHTML;
}
var interval = setInterval(setTitle, 3000);