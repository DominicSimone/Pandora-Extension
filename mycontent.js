// updates title of tab to name of song and artist
function setTitle() {
    if(typeof document.getElementsByClassName("Marquee__wrapper__content__child")[0] == 'undefined'){
		document.title = document.getElementsByClassName("Marquee__wrapper__content")[0].innerHTML;
	}
	else{
		document.title = document.getElementsByClassName("Marquee__wrapper__content__child")[0].innerHTML;
	}

}
var interval = setInterval(setTitle, 3000);
