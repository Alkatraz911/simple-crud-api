
const errorHandler = (err) => {
    const  { isCustom }   =  err;
    if (isCustom) {
        if  (err.code = 400) {
            res.writeHead(400, { 'Content_Type': 'text/plain' });
            res.end(e.message);
        } else if ( err.code === 404) {
            res.writeHead(404, { 'Content_Type': 'application/json' });
            res.end(JSON.stringify(result));
        }
    } else {
        res.writeHead(500, { 'Content_Type': 'text/plain' });
        res.end('internal server error')
    }
}


module.exports = { errorHandler };