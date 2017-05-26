var url = 'https://www.googleapis.com/youtube/v3/search?q=surfing&maxResults=25&part=snippet&key=AIzaSyCZiQIiYvMPMaxniXaTpfCbZi9HAXbyutM'
$.getJSON(url, function(response){
	console.log(response.items)
	for(var i = 0; i < response.items.length; i++){
		console.log(response.items[i])


		// <h1>title</h1>
		console.log(response.items[i].snippet.title)
		// <a href='link to video'>Watch me</a>
		var videoUrl = 'https://www.youtube.com/watch?v=' + response.items[i].id.videoId
		console.log(videoUrl)
		// <img src='thumbnail'>
		console.log(response.items[i].snippet.thumbnails.high.url)
	}
})