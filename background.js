function onCommand(command) {
    chrome.tabs.query({url: 'https://www.pandora.com/*'}, function(tabs) {
	// Open a pandora tab if one does not exist yet. 
	if (tabs.length === 0) {
	    chrome.tabs.create({url: 'https://www.pandora.com'});
	}
	if(command === "play/pause"){
	var code_click='\
		if(document.getElementsByClassName("playButton")[0].getAttribute("style")=="display: block;"){\
			document.getElementsByClassName("playButton")[0].click();\
		}\
		else{\
			document.getElementsByClassName("pauseButton")[0].click();\
		}\
	';
	}
	else{
		var code_click = 'document.getElementsByClassName("skipButton")[0].click()';
	}
	
	// Apply command on all pandora tabs.
	for (var tab of tabs) {
			chrome.tabs.executeScript(tab.id, {code: code_click});	
	}
	
	// Unload background page as soon as we're done.
	window.close();
    });
};

chrome.commands.onCommand.addListener(onCommand);