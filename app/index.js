const http = require('http');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const PORT = process.env.PORT;
const Database = require('./database.js');
const data = new Database();



http.createServer((req, res) => {
    const navArr = req.url.split('/');
    const id = navArr[navArr.indexOf('person') + 1];
    

       if(req.method === 'GET') {

            if (id) {
                const result = data.getPerson(id);
                res.writeHead(200, { 'Content_Type': 'application/json' });
                res.end(JSON.stringify(result));

            } else {
                res.writeHead(200, { 'Content_Type': 'application/json' });
                res.end(JSON.stringify(data.persons));
            }
        }

        else if(req.method ===  'POST') {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', () => {
                if (body) {
                    try {
                        req.body = JSON.parse(body);
                        data.addPerson(req.body);
                        res.writeHead(201, { 'Content_Type': 'application/json' });
                        res.end('added')
                    } catch (e) {
                        res.writeHead(400, { 'Content_Type': 'text/plain' });
                        res.end(e.message);
                    }

                }
            })
        }


        else if (req.method === 'PUT') {

        }

        else if(req.method === 'DELETE') {
                const navArr = req.url.split('/');
                const id = navArr[navArr.indexOf('person') + 1];
                if (id) {
                    data.deletePerson(id);
                    res.writeHead(204, { 'Content_Type': 'application/json' });
                    res.end('User deleted');
                }
        }

        
    
    

}).listen(PORT), () => {
    console.log('Server started!');
};