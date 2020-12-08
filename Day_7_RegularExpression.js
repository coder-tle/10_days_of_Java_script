/*
    for more theory visit this website
    https://www.hackerrank.com/challenges/js10-regexp-1/topics
*/
// var re = /^learn/;

// var str1 = "I am learning JavaScript";
// var str2 = "learn JavaScript";

// console.log(re.test(str1));
// console.log(re.test(str2));


// var re = /[aeiou].+[aeiou]/;
// var str1 = "alama";

// console.log(re.test(str1));


//var re = /e*le*/;
//var re = /([aeiou])(.*)\1/g // the problem with this regex is that if it finds 
// substring which starts and end with same vowel, then also it gives true.
// so, we need to specify that it should match the first character and the second character



// Doubt 1 solution : https://javascript.info/regexp-backreferences
// Doubt 2 solution : https://stackoverflow.com/questions/46387760/match-the-same-start-and-end-character-of-a-string-with-regex/46387831

var re = /^([aeiou])(.*)\1$/g;
var str1 = 'aewxyzae';
var str2 = 'anel';

console.log(re.test(str1));
console.log(re.test(str2));

