var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);

var helloChiko = function(){
	var message = document.getElementById("hellochiko");
	message.setAttribute("class", "");
};

var showHelloChikoButton = document.getElementById("showHellochiko");
showHelloChikoButton.addEventListener("click", helloChiko);

