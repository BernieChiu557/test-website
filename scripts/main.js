let myImage = document.querySelector('img');
let count = 0;

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/turntable.png') {
      myImage.setAttribute ('src','images/dts.png');
    } else {
      myImage.setAttribute ('src','images/turntable.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'welcome back, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
  count = count + 1;
  myButton.innerHTML = count.toString(10);
  if(count === 5) {
  	localStorage.removeItem('name');
  }
}