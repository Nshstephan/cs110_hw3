
const http = require('http');

const server = http.createServer(function (req, res){

    if (req.url ==='/bio') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});

        res.end ('inglish is may prafesione');

    }

    if (req.url === '/age') {

        res.writeHead(404, {'Content-Type' : 'text/plain'});

        res.end('avto hly chem kara qshem bayc piva karelia');

    }

    if (req.url === '/info') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});

        res.end('How can you face the problem ,when the problem is your face?');

    }


    if (req.url === '/instructor') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});

        res.end('Rouben Meschian===lavna lurj lavna');

    }



    if (req.url === '/job') {

        res.writeHead(404, {'Content-Type' : 'text/plain'});

        res.end('the best job is a well paid hobby');

    }



    res.writeHead(404, {'Content-Type' : 'text/plain'});

    res.end("empty server ");
});



server.listen(3001);

console.log('servery lsuma port 3001 in');