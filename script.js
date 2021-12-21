function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-wide").style.top = "0";
    document.getElementById("header-small").style.top = "0";
  } else {
    document.getElementById("header-wide").style.top = "-200px";
    document.getElementById("header-small").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
