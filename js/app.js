/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', []);

function showScreenSize(){
	
	var size = 'Screen width: '+window.screen.width
		+'Screen height: '+window.screen.height
		+'Screen availWidth: '+window.screen.availWidth
		+'Screen availHeight: '+window.screen.availHeight
		+'window.innerWidth: '+window.innerWidth
		+'window.innerHeight: '+window.innerHeight;
	
	alert(size);
		
}
