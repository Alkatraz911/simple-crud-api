const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const PORT = process.env.PORT;



const server = require('./server');
server.listen(PORT, () => { 
    console.log('Server started!')
});











