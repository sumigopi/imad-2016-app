/*console.log('Loaded!');
alert("Hi! I am here");
//To change the exixting text
var element = document.getElementById("main-text");

element.innerHTML = "New Value"

//Move the image
var img = document.getElementById ("Praveen");
/*img.onclick = function() {
    img.style.marginLeft ="100px";
}*/

/*var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    }
    img.onclick = function() {
        var interval = setInterval(moveRight, 50);
    }*/
//counter code
var button = document.getElementById("counter");
var counter = 0;
button.onClick = function() {
    
   //Make request to counter end point 
    
    
    //Capture the response and store it in a variable
    
    
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    
    
}