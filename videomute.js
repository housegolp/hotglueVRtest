/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}
	
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
