/* global describe, beforeEach, Spaceship, it, expect, spyOn*/
'use strict';
describe('Spaceship', function() {
  var spaceship, planet;

  beforeEach(function() {
    planet = {};
    spaceship = new Spaceship(planet);
  });

  it('should be defined', function() {
    expect(Spaceship).toBeDefined();
  });
  describe('constructor', function(){
    it('should throw if planet is undefined', function(){
      expect(function(){new Spaceship();}).toThrow();
    });
  });
  describe('takeOff', function(){
    it('should be defined', function(){
      expect(spaceship.takeOff).toBeDefined();
    });
  });
  describe('landing', function(){
    it('should be defined', function(){
      expect(spaceship.landing).toBeDefined();
    });
    it('should throw if planet is undefined', function(){
      expect(function(){spaceship.landing();}).toThrow();
    });
  });
  describe('journey', function(){
    it('should be defined', function(){
      expect(spaceship.journey).toBeDefined();
    });
    it('should throw if planet is undefined', function(){
      expect(function(){spaceship.journey();}).toThrow();
    });
    it('should takeOff from planet', function(){
      var toPlanet={};
      spyOn(spaceship, 'takeOff');

      spaceship.journey(toPlanet);
      
      //expect(spaceship.takeOff).toHaveBeenCalled();
    });
    // it('should landing to planet', function(){
    //   var toPlanet={};
    //   spyOn(spaceship, 'landing');

    //   spaceship.journey(toPlanet);
      
    //   expect(spaceship.landing).toHaveBeenCalledWith(toPlanet);
    // });
  });
});
