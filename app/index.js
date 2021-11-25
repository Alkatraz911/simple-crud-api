const http = require('http');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const PORT = process.env.PORT;
const Database = require('./database.js');
const data = new Database();


try{http.createServer((req, res) => {

    const navArr = req.url.split('/');
    const id = navArr[navArr.indexOf('person') + 1];
    
       if(req.method === 'GET') {

            if (id) {
                try {
                    const result = data.getPerson(id);
                    res.writeHead(200, { 'Content_Type': 'application/json' });
                    res.end(JSON.stringify(result));
                } catch (e) {
                    res.writeHead(e.code, { 'Content_Type': 'text/plain' });
                    res.end(e.message);
                }
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
            req.on('end', async () => {
                if (body) {
                    try {
                        req.body = JSON.parse(body);
                        const result = JSON.stringify(await data.addPerson(req.body));
                        res.writeHead(201, { 'Content_Type': 'application/json'});
                        res.end(result);
                    } catch (e) {
                        if(e.isCustom){
                            res.writeHead(e.code, { 'Content_Type': 'text/plain' });
                            res.end(e.message);
                        } else {
                            throw e;
                        }

                    }

                }
            })
        }


        else if (req.method === 'PUT') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', async () => {
                if (body) {
                    try {
                        req.body = JSON.parse(body);
                        const result = JSON.stringify(await data.updatePerson(id,req.body));
                        res.writeHead(200, { 'Content_Type': 'application/json'});
                        res.end(result);
                    } catch (e) {
                        if(e.isCustom){
                            res.writeHead(e.code, { 'Content_Type': 'text/plain' });
                            res.end(e.message);
                        } else {
                            throw e;
                        }

                    }

                }
            })
        }

        else if (req.method === 'DELETE') {
            try {
                data.deletePerson(id);
                res.writeHead(204, { 'Content_Type': 'text/plain'});
                res.end();
            } catch (e) {
                res.writeHead(e.code, { 'Content_Type': 'text/plain' });
                res.end(e.message);
            }

        }

        
    
    

}).listen(PORT), () => {
    console.log('Server started!');
};
} catch (err) {
    errorHandler(err)
}
