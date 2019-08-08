var moment = require('moment');
// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var month = ['Jan', 'Feb'];
// console.log(date.getMonth());

var date = moment();
console.log(date.format('MMM Do YYYY, h:mm:ss a'));