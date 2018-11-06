var videoelement = document.querySelector(".video");

if(window.innerWidth < 620) {
  videoelement.innerHTML = `<source src="@@assetPath@@/assets/mobile.mp4" type="video/mp4" />`
} else {
  videoelement.innerHTML = `<source src="@@assetPath@@/assets/main.mp4" type="video/mp4" />`
}

videoelement.load();
videoelement.play();
