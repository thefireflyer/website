console.log("hello!"),
window.addEventListener('scroll', function() {
let navBar = this.document.getElementById("navBar");
if (window.pageYOffset > 10){
    navBar.style.setProperty("--nav_bar_blur", "5px");
    navBar.style.setProperty("--nav_bar_color", "rgba(0,0,0,0.7)");
    navBar.style.setProperty("--nav_bar_border_style", "solid");
}
else {
    navBar.style.setProperty("--nav_bar_blur", "0px");
    navBar.style.setProperty("--nav_bar_color", "rgba(0,0,0,0.0)");
    navBar.style.setProperty("--nav_bar_border_style", "none");
}
})