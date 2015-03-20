/* export Spaceship */
/* global console*/
'use strict';
var Spaceship = (function(){
	function Spaceship(planet){
		checkArgument(planet, 'planet');
		this.planet = planet;
	}
	Spaceship.prototype.takeOff = function() {
		console.log('leaving planet ' + this.planet.name);
	};
	function checkArgument(arg, name){
		if(!arg){
			throw {
				name: 'Missing arguments',
				message: 'Missing '+name+' argument'
			};
		}
	}
	Spaceship.prototype.landing = function(planet) {
		checkArgument(planet, 'planet');
		console.log('landing on ' + planet);
		this.planet = planet;
	};
	Spaceship.prototype.journey = function(to) {
		checkArgument(to, 'planet to');
		this.takeOff();
		this.landing();
	};
	return Spaceship;
})();


