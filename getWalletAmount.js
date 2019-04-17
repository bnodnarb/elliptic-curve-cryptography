/*
var fs = require('fs');

fs.readFile('ledger.txt', 'utf8', function(err, data) {
   if (err) throw err;
   console.log(data);
 });
 */

 var lineReader = require('readline').createInterface({
   input: require('fs').createReadStream('ledger.txt')
 });

 jsonIssues = [
 {ID:'1',Name:'Some name',Notes:'NOTES'},
 {ID:'2',Name:'Some name 2',Notes:'NOTES 2'}
];

 lineReader.on('line', function (line) {
   jsonIssues[jsonIssues.length] = {ID:'3',Name:'Some name 3',Notes:'NOTES 3'};
 });

 console.log(jsonIssues);
