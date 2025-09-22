//-----------------------------chapter 31 - 45-------------------------


//Q1

var date = new Date();
console.log(date);




//Q2

var month = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"];
var currentMonth = new Date();
console.log(month[currentMonth.getMonth()]);





//Q3

var day = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"];
var threeCharDays = [];
for(let i = 0;i < day.length;i++){
   threeCharDays.push(day[i].substring(0,3));
}
console.log(`Today is ${threeCharDays[date.getDay()]}`);




//Q4


for(let i = 0; i < day.length; i++){
    if(day[date.getDay()] == "Saturday" || day[date.getDay()] == "Sunday"){
    console.log("Its Fun day");
    break;
    }
}




//Q5

if(date.getDate() < 16){
    console.log("First fifteen days of the month.");
}
else{
    console.log("Last days of the month.");
}




//Q6

console.log("Current Date: " + date);
console.log(`Elapsed milliseconds since January 1, 1970: ${date.getTime()}`);
console.log(`Elapsed minutes since January 1, 1970: ${date.getTime() / 1000 / 60}`);




//Q7

var time = date.toTimeString();
if(time >= 0 && time <= 12){
    console.log("Its AM")
}
else{
    console.log("Its PM")
}




//Q8

const laterdate = new Date(2020, 11, 31);
console.log("Later Date:",laterdate.toString());




//Q13

// var age = +prompt("Enter your Age: ");
// var currentYear = date.getFullYear()
// var birthYear = currentYear - age;
// console.log(`your age is ${age} \n Your birth year is ${birthYear}`);




//Q12

// var currentDate = new Date();
// var date100YearsBack = new Date(currentDate);
// date100YearsBack.setFullYear(currentDate.getFullYear() - 100);
// alert("Current Date: " + currentDate);
// alert("Date 100 Years Back: " + date100YearsBack);
