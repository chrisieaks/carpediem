
//    Header clock

window.onload = displayTime;
function displayTime() {
    var element = document.getElementById("clock");
    var now = new Date();
    element.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime, 1000);
}
    
