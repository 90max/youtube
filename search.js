function showResponse(response){
	var responseString = JSON.stringify(response, '', 2);
	document.getElementById('response').innerHTML += responseString;
}

function onClientLoad(){
	gapi.client.load('youtube', 'v3', onYoutubeApiLoad);
}

function onYoutubeApiLoad(){
	gapi.client.setApiKey('AIzaSyDeOyIPdyh9Jdc9unl5-qwj8c8_fQEs1NQ');
	showResponse('Hooray!');
}