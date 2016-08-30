//Object of bound elements
var Bound = {
	
};

//The binder object
var Binder = {
	init: function(){
		//Get all elements with binder attribute
		var nodes = document.querySelectorAll('[binder]');
		
		//Create binding for each element
		for(var i=0; i<nodes.length; i++){
			var binding = nodes[i].getAttribute('binder');
			
			Bound[binding] = nodes[i];
		}
	}
};

//Initialize binder on load
window.addEventListener('load', function(){
	Binder.init();
});