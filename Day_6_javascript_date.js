// var d1 = new Date(`01/16/1999`);

// console.log(d1);
// console.log(d1.getDay());
/*
Dates in JavaScript

Date

A JavaScript Date instance represents a single moment in time based on the number of milliseconds elapsed since

.
Creating Date Instance

There are four constructors we can use to create a Date object, defined below.
1. Using new Date()

The default constructor creates a JavaScript Date object for the current date and time (according to your system settings).
2. Using new Date(value)

This constructor has a parameter,
, which is an integer representing the number of milliseconds elapsed since

(this is a Unix Epoch, though you should keep in mind that most Unix timestamp functions count in seconds).
3. Using new Date(dateString)

This constructor has a parameter,
, which is a String describing a date. The

must be in a format recognized by the Date.parse() function, such as MM/DD/YYYY or Month Day, Year. For example, 01/01/1980 and Jan 1, 1980 are both strings that can be successfully parsed using the parse function.
4. Using new Date(year, month, day, hour, minutes, seconds, milliseconds)

This constructor has the following parameters:

: An integer denoting the calendar year. Values from through map to the years through
.
: A one or two digit integer denoting the zero-indexed month. This means that denotes January and
denotes December.
: Optional. An integer denoting the specific day number within the calendar month.
: Optional. An integer denoting the hour of the day.
: Optional. An integer denoting the minute segment of a time.
: Optional. An integer denoting the second segment of a time.
: Optional. An integer denoting the millisecond segment of a time.

Date get Methods
1. Date.getTime()

Get the time in milliseconds elapsed since

.
2. Date.getFullYear()

Get the four-digit year (

).
3. Date.getMonth()

Get the Date object's month as a zero-indexed number (

).
4. Date.getDate()

Get the Date object's day as a number (

).
5. Date.getDay()

Get the Date object's weekday as a number (

).
6. Date.getHours()

Get the Date object's hour (

).
7. Date.getMinutes()

Get the Date object's minutes (
)
8. Date.getSeconds()

Get the Date object's seconds (

).
9. Date.getMilliseconds()

Get the Date object's milliseconds (
).


*/
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
