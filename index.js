window.onload = () => {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCrOrAbZT9iCs39Y-BBimqVUNMAHBvRa7A",
		authDomain: "shawer-5fc3a.firebaseapp.com",
		databaseURL: "https://shawer-5fc3a.firebaseio.com",
		projectId: "shawer-5fc3a",
		storageBucket: "shawer-5fc3a.appspot.com",
		messagingSenderId: "352213524887"
	};
	firebase.initializeApp(config);

	var storage = firebase.storage();

	firebase.database().ref().child('currentSlide').on('value', snap => {
		storage.ref().child(snap.val() + '.jpg').getDownloadURL().then(function(url) {
			// var xhr = new XMLHttpRequest();
			// xhr.responseType = 'text';
			// xhr.onload = function(event) {
			// 	var html = xhr.response;
			// 	document.getElementById('slide-content').innerHTML = html;
			// };
			// xhr.open('GET', url);
			// xhr.send();
			var img = document.getElementById('slide');
			img.src = url;
		}).catch(function(error) {});
	});
	toggleFullScreen();
}

function toggleFullScreen()
{
	if (document.documentElement)
	{
		if (document.documentElement.requestFullscreen)
			document.documentElement.requestFullscreen();
		else if (document.documentElement.webkitRequestFullscreen)
			document.documentElement.webkitRequestFullscreen();
	}
	else
	{
		if (document.exitFullscreen)
			document.exitFullscreen();
		else if (document.webkitExitFullscreen)
			document.webkitExitFullscreen();
	}
}