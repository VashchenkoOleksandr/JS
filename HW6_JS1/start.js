'use strict';

let x=10;
let z=5;
let y='The same test string';
let array=[1, 2, 3, 5, 8, 13, 21];

console.log('x value = ' + x);
console.log('z value = ' + z);
console.log('y value = ' + y);
console.log('array value = ' + array);
console.log('5 + x => ' + 5 + x);
console.log('\'5\' + x => ' + '5' + x );
console.log('y + \' plus x value = \' + x => ' + y + ' plus x value = ' + x);
console.log('5 + 5 => ' + 5 + 5);
console.log(5 + 5 + ' if I add the string to end numbers calculate in sum (it is the 5 + 5 + \'same string\')');
console.log('if I add the string to begin numbers converts to string (it is the \'same string\' + 5 + 5)' + 5 + 5);

// Type OF block
console.log('typeof block:');
console.log(' 1.[1, 2, 3, 5, 8, 13, 21] ' + typeof [1, 2, 3, 5, 8, 13, 21]);
console.log(' 2.{q : 1, w : 2, e : 3, r : 4, t : 5} ' + typeof {q : 1, w : 2, e : 3, r : 4, t : 5});
console.log(' 3. 1 ' + typeof (1));
console.log(' 4. x + z ' + typeof (x + z));
console.log(' 5. y ' + typeof (y));