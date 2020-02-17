let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/web-development.png'){
		myImage.setAttribute('src','images/web-development1.png');
	}
	else{
		myImage.setAttribute('src','images/web-development.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
	let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This site is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} 

else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'This site is cool, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}