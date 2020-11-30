// function reverseString(s) {
    
//         s = s.split("").reverse().join("");
//         console.log(s);
    
// }
// reverseString("1234");


function reverseString(s) {
    var s2;
    try{
       s2 =  s.split('').reverse().join('');
       s = s2;
       
    }catch(error)
    {
        console.log(error.message);
    }
    finally{
        console.log(s);
    }
}
