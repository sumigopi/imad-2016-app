var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: "Article One | Gopi",
    headingone: "Indian States",
    headingtwo: "Southern Region",
    date: "Sep 10, 2016",
    content: `<p>There are six states in the southern region of India. This region is a peninsula, surrounded by Arabian Sea in the West, Bay of Bengal in the east and Indian ocean in the South.
            The states are:
        </p>
       
        <ol>
            <li> Tamil Nadu </li>
            <li> Kerala </li>
            <li> Andhra Pradesh </li>
            <li> Karnataka </li>
            <li> Telengana </li>
            <li> Goa </li>
        </ol>`
    
        
    
           articleTwo()
           articleThree()
           
       }




       
     
}
function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var headingone = data.headingone;
    var headingtwo = data.headingtwo;
    var content = data.content;
}
var htmlTemplate = `<html>
   <head>
       <title> 
            $(title)
        </title>
       <meta name ="viewport" content = "width=device-width, initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
   </head>
   <body>
        <div class = 'container'>
            <div>
                <a href = "/">Home</a>
            </div>
            <hr/>
        <h1>
        $(headingone)
        </h1>
        <div>
        $(date)
        </div>
        
        <div>
            <h2> 
       $(headingtwo)
             </h2>
        </div>
        
        <div>
        $(content)
        </div>
      </div>
    </body>
</html>`;
return htmlTemplate;

}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.send('Article two requested and will be sent here');
});

app.get('/article-three', function (req, res) {
  res.send('Article three requested and will be sent here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Praveen.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Praveen.JPG'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit-name/name', function(req, res) {
    //get the name from the request
    var name - req.perarms.name;
    
   names.push(name);
    //JSON Javascript Object Notation
    
    res.send(JSON.stringify(names));
}


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
