console.log('Loaded!');
alert("Hi! I am here");
//To change the exixting text
var element = document.getElementById("main-text");

element.innerHTML = "New Value"

//Move the image
var img = document.getElementById ("Praveen");
img.onclick = function() {
    img.style.marginLeft ="100px";
}

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    }
    img.onclick = function() {
        var interval = setInterval(moveRight, 50);
    }
//counter code
var button = document.getElementById("counter");

button.onclick = function() {
    
   //Create request object
   var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
   request.onreadystatechange = function() {
       if (request.readyState === XMLHttpRequest.DONE){
           //Take some action
           if(request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById("count");
               span.innerHTML = counter.toString();
           }
       }
   } 
    
    
    // Make the request
request.open("GET","http://sumigopi.imad.hasura-app.io/counter",true);
request.send("null");
  //Submit Name
  var nameInput =document.getElementById("name");
  var name = nameInput.value;
  var submit = document.getElementById("submit.btn");
  submit.onclick = function(){
      //Make a request to the server and send the name
      //Capture a list of names and render it as a list
     var names = ["Name1","Name2","Name3","Name4"]; 
     var list = " ";
     for(var i=0; i<=names.length; i++) {
         list += "<li>" + names[i] + "</li>";
     }
      
     var ul = document.getElementById("nameList");
     ul.innerHTML = list;
      
      
      
      
  }
  
}