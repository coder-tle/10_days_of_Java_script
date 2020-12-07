// var d1 = new Date(`01/16/1999`);

// console.log(d1);
// console.log(d1.getDay());

function getDayName(dateString) {
    let dayName;
    // Write your code here
    var d1 = new Date(dateString);
    var day = d1.getDay();
    
    switch(day)
    {
        case 0:
        dayName = "Sunday";
        break;
        case 1:
        dayName = "Monday";
        break;
        case 2:
        dayName = "Tuesday";
        break;
        case 3:
        dayName = "Wednesday";
        break;
        case 4:
        dayName = "Thursday";
        break;
        case 5:
        dayName = "Friday";
        break;
        case 6:
        dayName = "Saturday";
        break;
    }
    return dayName;
}
