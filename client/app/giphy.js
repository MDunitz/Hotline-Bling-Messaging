document.addEventListener('DOMContentLoaded', function () {
  q = "finger guns"; // search query
  request = new XMLHttpRequest;
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      dataL = JSON.parse(request.responseText).data.image_url;
      console.log(dataL);
      document.getElementById("giphyme").innerHTML = '<center><img src = "'+dataL+'"  title="GIF via Giphy"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
     }
  };

  request.onerror = function() {
    console.log('connection error');
  };

  request.send();
});