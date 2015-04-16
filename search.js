function showResponse(response){
	var responseString = JSON.stringify(response, '', 2);
	doncument.getElementById('response').innerHTML += responseString;
}

function onClientLoad(){
	gapi.client.load('youtube', 'v3', onYoutubeApiLoad);
}

function onYoutubeApiLoad(){
	gapi.client.setApiKey('');
	showResponse('Hooray!');
}