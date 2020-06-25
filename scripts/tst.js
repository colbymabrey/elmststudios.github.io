let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/images/back.png)' {
      myImage.setAttribute ('src','images/COMINGSOON.png');
    } else {
      myImage.setAttribute ('src','/images/back.png');
    }
}