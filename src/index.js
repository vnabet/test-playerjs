import videojs from 'video.js';

// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0]; 
  
// Create new link Element
var link = document.createElement('link');

// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';
link.onload = function() { 

  let player = videojs('my-player', {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true
  });

  player.addClass('video-js');

  

 };
link.href = 'https://vjs.zencdn.net/7.15.4/video-js.css'; 

// Append link element to HTML head
head.appendChild(link); 


