
const Logger = require('./logger');
const logger = new Logger();

logger.addListener('messageLogged',(arg)=>(console.log('Listener Called',arg)))

logger.log('message');