var navLinks = document.getElementById("navLinks");

function showMenu(){
  navLinks.style.right = "0";
  navLinks.style.opacity = "1";
  navLinks.style.width = "200px" 
}
function hideMenu(){
  // navLinks.style.right = "-45%";
  navLinks.style.transition = "1s";
  navLinks.style.width = "-0";
  navLinks.style.opacity= "0";
}