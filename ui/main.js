console.log('Loaded!');
alert("Hi! I am here");
//To change the exixting text
var element = document.getElementById("main-text");

element.innerHTML = "New Value"

//Move the image
var img = document.getElementById ("Praveen");
/*img.onclick = function() {
    img.style.marginLeft ="100px";
}*/

var marginleft = 0;
function moveRight() {
    marginLeft = MarginLeft + 1;
    img.style.marginLeft = marginLeft + 'px'
    }
    img.onclick = function() {
        var intervel = setIntervel(moveRight, 50)
    }
