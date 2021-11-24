const http = require('http');



module.exports = class Server {
    constructor() {
        this.server = this._createServer()
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }



    _createServer() {
        return http.createServer((req, res) => {
            
        })
        
    }

}