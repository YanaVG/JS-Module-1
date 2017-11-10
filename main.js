const a = 'qwertyuiop';
const b = 'asdfghjkl';
const c = 'zxcvbnm';

const d = a.length;
const e = b.length;
const f = c.length;

document.writeln('Length of string "a" is ' + d + '<br>');
document.writeln('Length of string "b" is ' + e + '<br>');
document.writeln('Length of string "c" is ' + f + '<br>');

document.writeln('<br>' + "Символ на позиции 0 - '" + a.charAt(0) + "'");
document.writeln('<br>' + "Символ на позиции 9 - '" + a.charAt(9) + "'");
document.writeln('<br>' + "Символ на позиции 0 - '" + b.charAt(0) + "'");
document.writeln('<br>' + "Символ на позиции 8 - '" + b.charAt(8) + "'");
document.writeln('<br>' + "Символ на позиции 0 - '" + c.charAt(0) + "'");
document.writeln('<br>' + "Символ на позиции 6 - '" + c.charAt(6) + "'");

console.log(a.indexOf('u')); 

