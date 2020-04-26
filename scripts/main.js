let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myHeading.onclick = function(){
      alert("标题我被点击了")
}

let myImage = document.querySelector('img');
myImage.onclick=function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
      } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
      }
}