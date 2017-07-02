function onCommand(command) {	
    chrome.tabs.query({url: 'https://www.pandora.com/*'}, function(tabs) {
	// Open a pandora tab if one does not exist yet. 
	if (tabs.length === 0) {
	    chrome.tabs.create({url: 'https://www.pandora.com'});
	}
	if(command === "toggle_music"){
		var code_click = 'document.getElementsByClassName("TunerControl PlayButton Tuner__Control__Button Tuner__Control__Play__Button")[0].click();';
		}
	else{
		var code_click = 'document.getElementsByClassName("TunerControl SkipButton Tuner__Control__Button Tuner__Control__Skip__Button")[0].click();';
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
