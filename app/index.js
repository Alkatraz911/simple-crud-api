const http = require('http');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname,'.env')});
const persons = ['John','Paul', 'Mike', 'Chuk', 'Arnold'];

http.createServer((req,res) => {
    const navArr = req.url.split('/');
    const id = navArr[navArr.indexOf('person')+1];
    console.log(id)
    switch (req.method) {
        case 'GET':
            if  (id) {
                res.writeHead(200,{'Content_Type':'text/json'});
                res.end(JSON.stringify(persons[id-1]));
            } else {
                res.writeHead(200,{'Content_Type':'text/json'});
                res.end(JSON.stringify(persons));
            }


        case 'POST':
            
        case 'PUT':

        case 'DELETE':

    }
    
}).listen(process.env.PORT||4000), () => {
    console.log()
};