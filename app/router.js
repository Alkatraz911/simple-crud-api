const http = require('http');
const Database = require('./database.js');
const data = new Database();

module.exports = class Router {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.server = this._createServer

    }


    findMethod(req,res) {
        const navArr = req.url.split('/');
        const id = navArr[navArr.indexOf('person') + 1];

        switch (req.method) {
            case 'GET':
                if (id) {
                    const result = data.getPerson(id);
                    res.writeHead(200, { 'Content_Type': 'application/json' });
                    res.end(JSON.stringify(result));
                } else {
                    res.writeHead(200, { 'Content_Type': 'application/json' });
                    res.end(JSON.stringify(data.persons));
                }


            case 'POST':
                let body = '';
                req.on('data', (chunk) => {
                    body += chunk;
                })
                req.on('end', () => {
                    if (body) {
                        req.body = body
                        try {
                            data.addPerson(JSON.parse(body));
                            res.writeHead(201)
                            res.end()
                        } catch (e) {
                            console.log(e.message)
                            res.writeHead(400, { 'Content_Type': 'text/plain' });
                            res.end(e.message);
                        }

                    }
                })

            case 'PUT':

            case 'DELETE':

        }
    }

}