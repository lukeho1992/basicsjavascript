var myHeading = document.querySelector('h1');
myHeading.textContent = 'My First Hello World!';

var myImage  = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src','images/firefox2.png');
	}	else {
		myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Being a coder is really cool, ' + myName;
}


if(!localStorage.getItem('name')) {
	setUserName();
}	else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Being a programer is more complicated than being a coder, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}