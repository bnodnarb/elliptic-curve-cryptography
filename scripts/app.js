var argv = require('yargs')
    .usage('Usage: node $0 --msg \'[string]\' --sharedKey \'[string]\'')
    .demandOption(['msg','sharedKey'])
    .argv;

console.log(argv.msg, argv.sharedKey);
