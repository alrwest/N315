/** JQUERY EXAMPLE
 * 
 * $(".hamburger-icon").on("click", () => {
 * 
 * 
 * });
 * 
*/

var mobileIcon = document.getElementById("hamburger-icon");

mobileIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
    mobileIcon.classList.toggle("open");
}