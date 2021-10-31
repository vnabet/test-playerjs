import videojs from 'video.js'; 
import 'videojs-logo';
import 'videojs-logo/dist/videojs-logo.css'
import conf from 'conf';


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
  player.logo({
    image: '/img/logo-terre-net.png',
    width: 100,
    fadeDelay: null,
    url: 'https://www.terre-net.fr',
    opacity: .60,
    padding: 10,
    hideOnReady: true
  })

  player.on('play', () => {
    //console.log('PLAY')
    player.logo().show();
  })


  console.log('conf', conf.prod)

 };
link.href = 'https://vjs.zencdn.net/7.15.4/video-js.css'; 

// Append link element to HTML head
head.appendChild(link); 


