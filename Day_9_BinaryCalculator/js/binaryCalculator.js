var b0 = document.getElementById('btn0');
var b1 = document.getElementById('btn1');
var bC = document.getElementById('btnClr');
var bR = document.getElementById('res');
var bE = document.getElementById('btnEql');
var bSum = document.getElementById('btnSum');
var bSub = document.getElementById('btnSub');
var bMul = document.getElementById('btnMul');
var bDiv = document.getElementById('btnDiv');



b0.onclick = function(){
    var str = bR.innerHTML.toString();
    str = str + '0';   
    bR.innerHTML = str;
}

b1.onclick = function(){
    var str = bR.innerHTML.toString();
    str = str + '1';   
    bR.innerHTML = str;
}


bC.onclick = function(){
    var str = '';
    bR.innerHTML = str;
}
bSum.onclick = function(){
    var str = bR.innerHTML.toString();
    str  = str + '+';
    bR.innerHTML = str;
}
bSub.onclick = function(){
    var str = bR.innerHTML.toString();
    str  = str + '-';
    bR.innerHTML = str;
}

bMul.onclick = function(){
    var str = bR.innerHTML.toString();
    str  = str + '*';
    bR.innerHTML = str;
}


bDiv.onclick = function(){
    var str = bR.innerHTML.toString();
    str  = str + '/';
    bR.innerHTML = str;
}
bE.onclick = function(){
    

    const str = bR.innerHTML;
    const numbers = str.split(/\D/g);
    const operator = str.split(/\d/g).filter(Boolean);

    console.log(numbers);
    console.log(operator);
    var str1 = "Result of expression";
    bR.innerHTML = str1;

    // var expr = bR.innerHTML;
    // var nums = /(\d+)/g;
    // // Replace all base 2 nums with base 10 equivs
    // expr = expr.replace(nums, function(match) {
    //     return parseInt(match, 2);
    // })
    // // eval in base 10 and convert to base 2
    // res.innerHTML = eval(expr).toString(2);
   
}
