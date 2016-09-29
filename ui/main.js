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

button.onclick = function() {
    
   //Create request object
   var request = new XMLhttpRequest();
    
    //Capture the response and store it in a variable
   request.onreadystatechange = function() {
       if (request.readyState === XMLhttpRequest.DONE){
           //Take some action
           if(request.status === "200") {
               var counter = request.responseText;
               var span = document.getElementById("count");
               span.innerHTML = counter.toString();
           }
       }
   } 
    
    
    // Make the request
request.open("GET","http://cloud.imad.hasura-app.io/counter",true);
request.send("null");
    
    
    
}