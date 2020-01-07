var $ = $.noConflict();
$(document).ready(function() {
	isElementExist(".container", jsActive);
});


//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// Helper if element exist then call function
function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if(document.body.contains(elem)) {
		_cb();
	}
}

//function jsActive()
function jsActive() {
	console.log("Js active");
};

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

// just an example - how to connect library files such as slider, picturefill и other large js files
//= vendors/example-libs.js

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------