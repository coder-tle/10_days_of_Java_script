var btn0_1 = document.getElementById('btn0');
var btnClr_1 = document.getElementById('btnClr');
var btn1_1 = document.getElementById('btn1');
var res_1 = document.getElementById('res');


btnClr_1.onclick = function(){
   res_1.innerHTML = "";
}


btn0_1.onclick = function(){
    var str = res_1.innerHTML;
    str = str + "0";   
    res_1.innerHTML = str;
}


btn1_1.onclick = function(){
    
    var str = res_1.innerHTML;
    str = str + "1";
    res_1.innerHTML = str;
}

