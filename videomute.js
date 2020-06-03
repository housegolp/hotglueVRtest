// JavaScript Document

AFRAME.registerComponent('volume', {
 init: function () {
   var buttonVolume = document.querySelector('#control-volume');
   var buttonMute = document.querySelector('#control-mute');
   var vid = document.querySelector('#vid1');
   
   vid.muted = true;
   //vid.setAttribute('volume', this.value);
   this.el.addEventListener('click', function (evt) {
   //alert(this.vid.muted);
   if(vid.muted === true){
    vid.muted = false;
    buttonVolume.setAttribute('visible', 'true');
    buttonMute.setAttribute('visible', 'false');
  }
  else if (vid.muted === false) {
    vid.muted = true;
    buttonVolume.setAttribute('visible', 'false');
    buttonMute.setAttribute('visible', 'true');
  }
}, false);
 }
 }); 