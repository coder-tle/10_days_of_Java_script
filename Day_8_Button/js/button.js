/*var clickMeButton = document.createElement('button');
clickMeButton.id = 'btn';
clickMeButton.innerHTML = '0';
// clickMeButton.style.background = '#4FFF8F';
document.body.appendChild(clickMeButton);
*/


// Resource link : https://www.hackerrank.com/challenges/js10-create-a-button/topics


var btn1 = document.getElementById('btn');

btn1.onclick = function(){
    var str = btn.innerHTML;
    var temp = parseInt(str);
    temp = temp + 1;
    btn.innerHTML = temp.toString();
}

var button2 = document.createElement('Button');
button2.id = 'btn2';
button2.innerHTML = 'second button';
document.body.appendChild(button2);

// var button2 = document.getElementById('btn2');
button2.onclick = function(){
    var str  = button2.innerHTML.toString();
    var temp = "Pressed "+str;
    // var temp = "Button pressed";
    // button2.innerHTML = 'Button pressed';

    button2.innerHTML = temp;
}


// Note : Button id is used once to get object of button
// in the variable. After that using the variable name of 
// the button. We do all manipulation.
 