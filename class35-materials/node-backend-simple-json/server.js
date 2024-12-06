const http = require('http');
const fs = require('fs')
const path = require('path')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  
  // check the pathname that requested (localhost:8000/, localhost:8000/otherpage, localhost:8000/otherotherpage, etc...)
  const page = url.parse(req.url).pathname;


  const params = querystring.parse(url.parse(req.url).query);
  console.log(path.join(__dirname));
  console.log(page);
  
  // if the page is localhost:8000/
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  // if the page is localhost:8000/otherpage
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  // if the page is localhost:8000/otherotherpage
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  // if theyre asking for a response from our api - handle what should be returned
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if

  // if theyre asking for a css file, send it to them
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });

  // if theyre asking for a js file, send it to them
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  // dont send 404 errors for favicon requests
  }else if (page == '/favicon.ico'){
    res.write('204');
    res.end();
  }
  
  // if none of the requests above exist, send the 404 error, using figlet to make it look pretty
  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
