var moment = require('moment');
var now = moment();

/*console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.valueOf());*/

var timeStamp = 1491734176250;
var timeStampMoment = moment.utc(timeStamp);

console.log(timeStampMoment.local().format('h:mm a')); // 11:45 pm


/*now.subtract(1,'year');

console.log(now.format());

console.log(now.format('MMM Do YYYY h:mm:a')); //month date year, time*/ 