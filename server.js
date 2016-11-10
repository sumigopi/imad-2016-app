var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user:"sumigopi",
    database: "sumigopi",
    host:"db.imad.hasura-app.io",
    port:"5432",
    password: process.env.DB_PASSWORD
    };


var app = express();
app.use(morgan('combined'));
var pool = new Pool(config);

app.get('/test-db', function (req, res) {
    //Make a SELECT request
    //Make a response with the results
    pool.query("SELECT * FROM test", function(err, result) {
        if (err) {
            res.status(500).send(err.toString());
            } else {
            res.send(JSON.stringify(result.rows));
            }
        });

    });
 

 var articles = {
   "article-one": {
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
   },
   "article-two":{
    title: "Article Two | Gopi",
    headingone: "Indian States",
    headingtwo: "Western Region",
    date: "Sep 11, 2016",
    content: `<p>There are six states in the western region of India.
    
            The states are:
        </p>
       
        <ol>
            <li> Goa </li>
            <li> Maharashtra </li>
            <li> Gujarath</li>
            <li> Rajasthan </li>
        </ol>`
   },     
  "article-three":{
      
    title: "Article Three | Gopi",
    headingone: "Indian States",
    headingtwo: "Northern Region",
    date: "Sep 12, 2016",
    content: `<p>There are six states in the northern region of India.
    
            The states are:
        </p>
       
        <ol>
            <li> Punjab </li>
            <li> Haryana </li>
            <li> J & K </li>
            <li> Himachal Pradesh </li>
            <li> Uttar Pradesh </li>
        </ol>`
           
}

};
function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var headingone = data.headingone;
    var headingtwo = data.headingtwo;
    var content = data.content;

    var htmlTemplate = `<html>
   <head>
       <title> 
            ${title}
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
        ${headingone}
        </h1>
        <div>
        ${date}
        </div>
        
        <div>
            <h2> 
       ${headingtwo}
             </h2>
        </div>
        
        <div>
        ${content}
        </div>
      </div>
    </body>
</html>`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  });
  
 app.get('/sai', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sai.html'));
  }); 

 counter = 0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});

/*var names = [];
app.get('/submit-name/:name', function(req, res) {
    //get the name from the request
    var name = req.params.name;*/
    
    
   var names = [];
app.get('/submit-name', function(req, res) { //submit-name?name=xxxx
    //get the name from the request
    var name = req.query.name; 
  
    
   names.push(name);
    //JSON Javascript Object Notation
    
    res.send(JSON.stringify(names));
});

/*
app.get('/articles/:articleName', function (req, res) {
    //articleName = article-one etc
    //articles(articleName)= content object of article-one
    pool.query("SELECT * FROM article WHERE title = '" + req.params.articleName + 
            "'",function(err,result) {
                if (err) {
                    res.status(500).send(err.toString());
                } else {
                  if (result.rows.length === 0) {
                      res.ststus(404).send("Article not found");
                  } else {
                      var articleData - result.rows[0];
                      res.send(createTemplate(articleData));
                  }
                }
              });
            });
 */


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Praveen.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Praveen.JPG'));
});

app.get('/ui/PavithraRaghav.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'PavithraRaghav.JPG'));
});

  app.get('/ui/GK.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'GK.JPG'));
});

 app.get('/ui/Pavithra.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Pavithra.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
