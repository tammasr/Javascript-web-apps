// constructor  - heavy objects
function Car () {
	constructor (model, year) {
		this.model = model;
		this.year = year;
	}
	this.getModel = function () {
		return this.model;
	}
}
var car1 = new Car('Camry', 2000);




// Prototype  lighter objects
let Car = function (model, year) {
	this.model = model;
	this.year = year;
}

Car.Prototype.getModel = function () {
	return this.model;
}
var car1 = new Car('Camry', 2000);




//Revealing module - preserve the private vars
function Car () {
	//private vars 
	//public vars
	function getModels () {
		return http.get('/models')

	}
	return {
		model: getModels
	}
}


//singleton = Revealing + get instance return obj

var Singleton = (function () {
var instance;
function init (){

  var privateNumber = Math.random();
  function getList () {
    return privateNumber;
  }

  return {
    getList: getList
  }
}
return {
  getInstance: function () {
    if(!instance) {
      instance = init();
      console.log('iiii', instance);
      return instance;
    } else {
      return instance;
    }
  }
}
})();

var firstInstance = Singleton.getInstance();
var secondInstance = Singleton.getInstance();
console.log(firstInstance.getList());
console.log(secondInstance.getList());
















