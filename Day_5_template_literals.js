//console.log(`Day 
//5
//Template
//literals`);


// Arguements is passed as key value pair
// Keys represents string name
// values respsents expression to be executed
/*var a = 5;
var b = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log("." + strings[3] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}
foo`Sum ${a + b}
Product ${a * b}
Division ${b / a}`;

*/

/*
template litera technique provide and efficient way of manipulating strings and also efficient method 
of passing parameters, here parameter is passed as key ( name ) - value ( expression associated with key, it can be computation)
This has been explained with the help of above example.
*/


function sides(literals, ...expressions) {
    //literals[0] == area // expressions[0] == value of area
    //literals[1] == perimeter // expressions[1] == value of perimeter
    
    var detD = Math.sqrt(expressions[1]* expressions[1] - 16*expressions[0]);
    var s1 = (expressions[1] + detD)/4;
    var s2 = (expressions[1] - detD)/4;
    
    var array = [s2, s1];
    return array;
       
   }
