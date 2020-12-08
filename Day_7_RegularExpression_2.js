
/*
Tuitorial : https://www.w3schools.com/jsref/jsref_obj_regexp.asp
https://regex101.com/r/seoH9p/1/
Editorial solution: 
Use the RegExp Constructor

const re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)\\.[a-zA-Z]+$');

Use a Regular Expression Literal

const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;


*/
//var re = /^([MDE])([rs])([s]*)([.])([A-Za-z])*$/; // wrong this acccept : "Mrss.X" as well

var str1 = 'Mrss.Y';
console.log(re.test(str1));