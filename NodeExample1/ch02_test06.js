var nconf = require('nconf');
nconf.env();

console.log('OS 환경 변수 값: ' + nconf.get('OS'));
