//CODE FOR CHANGING TEXT TO NEW VALUE AND MOVING IMAGE IS COMMENTED
/*console.log('Loaded!');
alert("Hi! I am here");
//To change the exixting text
var element = document.getElementById("main-text");

element.innerHTML = "New Value"  */

//Move the image once
//var img = document.getElementById ("Praveen");
//img.onclick = function() {
   // img.style.marginLeft ="100px";
//}

//Move the image continuously
/*
var img = document.getElementById ("Praveen");
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    }
    img.onclick = function() {
        var interval = setInterval(moveRight, 50);
    }
    */
   
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
   }; 
    
    
    // Make the request
request.open("GET","http://sumigopi.imad.hasura-app.io/counter",true);
request.send("null");
};
  //Submit Name
 
  var submit = document.getElementById("submit_btn");
  submit.onclick = function(){
     //Create request object
   var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
   request.onreadystatechange = function() {
       if (request.readyState === XMLHttpRequest.DONE){
           //Take some action
           if(request.status === 200) {
   
      //Capture a list of names and render it as a list
     var names = request.responseText; 
     names = JSON.parse(names);
     var list = " ";
     for(var i=0; i<names.length; i++) {
         list += "<li>" + names[i] + "</li>";
     }
      
     var ul = document.getElementById("namelist");
     ul.innerHTML = list;
           }
       }
   }; 
    
        // Make the request
 var nameInput =document.getElementById("name");
  var name = nameInput.value;        
request.open("GET","http://sumigopi.imad.hasura-app.io/submit-name?name=" + name,true);
request.send("null");  
  }; 
  
