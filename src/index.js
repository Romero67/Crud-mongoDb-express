const app = require('./app')
require('./database');
const {PORT} = require('./config')

app.listen(3000);
console.log("server on port", PORT);
