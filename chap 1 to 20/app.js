/*
//Chapter No 1
//task no 1
alert("\nTask 1:\n\nHellow! Welcome to my website");
//task no 2
alert("\nTask 2:\n\nError! Please enter a valid password.");
//task no 3
alert("\nTask 3:\n\nWelcome to JS Land..\nHappy Coading!");
//task no 4
alert("\nTask 4(i):\n\nWelcome to JS Land..");
alert("\nTask 4(ii):\n\nHappy Coading!\n• Prevent this page from creating additional dialog.");
//task no 5
alert("\nTask 5:\n\nI also run allert from Console");
//Chapter NO 2
//task no 2
var myName;
myName = "Dawood Shahid";
alert("\nTask 2:\n\n" + myName);
//task no 3
var message;
message = "Hello World";
alert("\nTask 3:\n\n" + message);
//task no 4
var name = "Dawood Shahid";
var age = "23 years old";
var message = "Web and Mobile Hybrid Application Development";
alert("\nTask 4:\n\n" + name);
alert("\nTask 4:\n\n" + age);
alert("\nTask 4:\n\n" + message);
//task no 5
var message = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert("\nTask 5:\n\n" + message);
//task no 6
var email = "dawoodshahid67@gmail.com";
alert("\nTask 6:\n\n" + email);
//task no 7
var book = "A smarter way to learn JavaScript";
alert("\nTask 7:\n\nI am trying to learn from the book " + book);
//task no 8
document.write("<br><br><br><br>Task 8:<br><br><br>Yah! I can write HTML Contant through JavaScript");
//task no 9
var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert("\nTask 9:\n\n" + design);
//Chapter NO 3
//task no 1
var age = "I am 23 years old";
alert("\nTask 1:\n\n" + age);
//task no 2
var visitTime = 20;
alert("\nTask 2:\n\nYou have visited on this website " + visitTime + " times.");
//task no 3
var birthYear = 1996;
document.write("<br><br><br><br>Task 3:<br><br>My birth year is " + birthYear + "<br>" + "Data type of my decleared variable is number");
//task no 4
var name = "Dawood Shahid";
var qty = 8;
var productName = "Shalwar & Qameez";
document.write("<br><br><br><br>Task 4:<br><br><b>" + name + "</b>" + " ordered " + "<b>" + qty + "</b>" + " " + "<b>" + productName + "</b>" + " on <strong>XYZ</strong> Clothing store");
//Chapter No 4
//task no 1
var userName, user_name, userName123;
//task no 2
document.write("<p><br><br><br><br>Task 2:</p><br>")
document.write("<p><b>Legal variables</b><br>userName, user_name, userName123, $userName, $user_Name</p>")
document.write("<p><b>Illegal variables</b><br>%username, -username, 123userName, *userName, !userName</p>")
//task no 3
var num = "numbers";
var dol = "$";
var hif = "_";
var lett = "letter"; 
var cas = "sensitive";
var word = "keywords";
document.write("<br><p>Task 3:</p><br><h2>Rules for naming JS variables</h2><br>");
document.write("<p>Variable names can only contain: " + num + ", " + dol + " and " + hif +". <strong>For example:</strong> $my_1stVariable</p>");
document.write("<p>Variable must begin with a: " + lett + ", " + dol + " and " + hif +". <strong>For example:</strong> $name, _name or Name</p>");
document.write("<p>Variable names are case " + cas + "</p>");
document.write("<p>Variable names should not be JS <b>"+word+"</b></p>");
//Chapter No 5
//task no 1 & 2
var num1 = +prompt('\nTask 1:\n\nEnter 1st number:');
var num2 =  +prompt('\nTask 1:\n\nEnter 2nd number:');
var res = num1 + num2;
document.write("<p><br><br><br><br>Task 1:</p><br><p>Sum of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 - num2;
document.write("<p><br><br>Task 2:</p><br><p>Subtraction of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 * num2;
document.write("<p><br><br>Task 2:</p><br><p>Product of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 / num2;
document.write("<p><br><br>Task 2:</p><br><p>Division of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 % num2;
document.write("<p><br><br>Task 2:</p><br><p>Remander of " + num1 + " and " + num2 + " is " + res + "</p>");
//task no 3
var num;    
document.write("<p><br><br><br><br>Task 3:</p><br><p>Value after variable declaration is: " + num + "</p>");
num = 6;
document.write("<p><br><br>Task 3:<br><br>Initial value: " + num + "</p>");
num++;
document.write("<p><br><br>Task 3:<br><br>Value after increment is: " + num + "</p>");
num = num + 7;
document.write("<p><br><br>Task 3:<br><br>Value after addition of 7 is: " + num + "</p>");
num--;
document.write("<p><br><br>Task 3:<br><br>Value after decrement is: " + num + "</p>");
num = num % 3;
document.write("<p><br><br>Task 3:<br><br>After divide by 3 the remainder is: " + num + "</p>");
//task no 4
var pricePerTicket = 600;
var totalPrice = pricePerTicket * 5;
document.write("<p><br><br><br><br>Task 4:<br><br>Total cost to buy 5 tickets to a movi is " + totalPrice + " PKR</p>");
//task no 5
var table = 4;
document.write("<p><br><br><br><br>Task 5:<br><br>Table of " + table + "</p>");
document.write("<br>" + table + " X 1 = " + table * 1);
document.write("<br>" + table + " X 2 = " + table * 2);
document.write("<br>" + table + " X 3 = " + table * 3);
document.write("<br>" + table + " X 4 = " + table * 4);
document.write("<br>" + table + " X 5 = " + table * 5);
document.write("<br>" + table + " X 6 = " + table * 6);
document.write("<br>" + table + " X 7 = " + table * 7);
document.write("<br>" + table + " X 8 = " + table * 8);
document.write("<br>" + table + " X 9 = " + table * 9);
document.write("<br>" + table + " X 10 = " + table * 10);
//task no 6
var cels = 25;
var fahr = 70;
var celsToFahe = (cels * 9 / 5) + 32;
var fahrToCels = (fahr - 32) * 5 / 9;
document.write("<p><br><br><br><br>Task 6:<br><br>The Temperature Converte</p>");
document.write("<p>Celsius into Fahrenheit: " + cels + "C is " + celsToFahe +"F</p>");
document.write("<p>Fahrenheit into Celsius: " + fahr + "F is " + fahrToCels +"C</p><br><br>");
//Chapter No 6 - 9
var table = +prompt("Enter the number of table:", 5);
document.write("<p><br><br><br><br>Task 5:<br><br>Table of " + table + "</p>");
document.write("<br>" + table + " X 1 = " + table * 1);
document.write("<br>" + table + " X 2 = " + table * 2);
document.write("<br>" + table + " X 3 = " + table * 3);
document.write("<br>" + table + " X 4 = " + table * 4);
document.write("<br>" + table + " X 5 = " + table * 5);
document.write("<br>" + table + " X 6 = " + table * 6);
document.write("<br>" + table + " X 7 = " + table * 7);
document.write("<br>" + table + " X 8 = " + table * 8);
document.write("<br>" + table + " X 9 = " + table * 9);
document.write("<br>" + table + " X 10 = " + table * 10);
//Chapter No 9 - 11
//task no 3
document.write("<p><br><br><br><br>Task 3:</p><br>");
var trafficLightColor = prompt("Task 3:\n\nEnter a Traffic Light Color.");
var instructions;
if(trafficLightColor === "Red" || trafficLightColor === "red"){
    instructions = "Must Stop";
}
else if(trafficLightColor === "Yellow" || trafficLightColor === "yellow"){
    instructions = "Read to Move";
}
else if(trafficLightColor === "Green" || trafficLightColor === "green"){
    instructions = "Move now";
}
else{
    instructions = "Wrong color entered"
}
document.write("<h1>Traffic Instructions:</h1>")
document.write("<h3>"+ instructions +"</h3>");
//task no 5
var a = 4;
if (++a === 5){
alert("Task 5(a):\n\nGiven condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("Task 5(b):\n\nGiven condition for variable b is true");         //not execute
}
var c = 12;
if (c++ === 13){
alert("Task 5(c):\n\nCondition 1 is true");                            //not execute
}
if (c === 13){
alert("Task 5(c):\n\nCondition 2 is true");
}
if (++c < 14){
alert("Task 5(c):\n\nCondition 3 is true");                            //not execute
}
if(c === 14){
alert("Task 5(c):\n\nCondition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("Task 5(d):\n\nThe cost equals");
}
if (true){
alert("Task 5(e):\n\nTrue");
}
if (false){
alert("Task 5(d):\n\nFalse");
}
if("cow" > "cat"){                                      //also check the alphabetical order
    // alert("car is smaller than cat");
    alert("Task 5(f):\n\nCow is grater than cat");
}
//task no 6
document.write("<p><br><br><br><br>Task 3:</p><br>");
var subject1 = prompt("Enter Subject 1 nanme");
var subject2 = prompt("Enter Subject 2 nanme");
var subject3 = prompt("Enter Subject 3 nanme");
var totalMarks = 75;
var sub1Marks = +prompt("Enter Subject 1 marks (out of 75)")
var sub2Marks = +prompt("Enter Subject 2 marks (out of 75)")
var sub3Marks = +prompt("Enter Subject 3 marks (out of 75)")
var sub1Per = (sub1Marks / totalMarks) * 100;
var sub2Per = (sub2Marks / totalMarks) * 100;
var sub3Per = (sub3Marks / totalMarks) * 100;
var sub1Grade;
var sub2Grade;
var sub3Grade;
var grandTotal = 225;
var grandTotalObt = sub1Marks + sub2Marks + sub3Marks;
var percentage = (grandTotalObt/grandTotal)*100; 
var grade;
if (sub1Per >= 80) {
    sub1Grade = "A1";
}
else if (sub1Per >= 70 && sub1Per < 80) {
    sub1Grade = "A";
}
else if (sub1Per >= 60 && sub1Per < 70) {
    sub1Grade = "B";
}
else {
    sub1Grade = "Fail";
}
if (sub2Per >= 80) {
    sub2Grade = "A1";
}
else if (sub2Per >= 70 && sub2Per < 80) {
    sub2Grade = "A";
}
else if (sub2Per >= 60 && sub2Per < 70) {
    sub2Grade = "B";
}
else {
    sub2Grade = "Fail";
}
if (sub3Per >= 80) {
    sub3Grade = "A1";
}
else if (sub3Per >= 70 && sub1Per < 80) {
    sub3Grade = "A";
}
else if (sub3Per >= 60 && sub3Per < 70) {
    sub3Grade = "B";
}
else {
    sub3Grade = "Fail";
}
if (percentage >= 80) {
    grade = "A1";
}
else if (percentage >= 70 && percentage < 80) {
    grade = "A";
}
else if (percentage >= 60 && percentage < 70) {
    grade = "B";
}
else {
    grade = "Fail";
}
document.write("<h1>Marksheet</h1>");
document.write("<table>" +
    "<tr> <th>Subject</th> <th>Total</th> <th>Obtained</th> <th>Presentage</th> <th>Grade</th> </tr>" +
    "<tr> <td>" + subject1 + "</td> <td>" + totalMarks + "</td> <td>" + sub1Marks + "</td> <td>" + sub1Per + "% </td> <td>" + sub1Grade + "</td> </tr>" +
    "<tr> <td>" + subject2 + "</td> <td>" + totalMarks + "</td> <td>" + sub2Marks + "</td> <td>" + sub2Per + "% </td> <td>" + sub2Grade + "</td> </tr>" +
    "<tr> <td>" + subject3 + "</td> <td>" + totalMarks + "</td> <td>" + sub3Marks + "</td> <td>" + sub3Per + "% </td> <td>" + sub3Grade + "</td> </tr>" +
    "<tr> <th>Grand Total</th> <td>" + grandTotal + "</td> <td>" + grandTotalObt + "</td> <td>" + percentage + "% </td> <td>" + grade + "</td> </tr>" +
    "</table>");
//Chapter No 12 - 13
//task no 6
var greeting; 
var hour = 19;
if (hour < 18) { 
    greeting = "Good day";
}
else {
    greeting = "Good evening"; 
}
document.write("<p><br><br><br><br>Task 6:<br><br>" + greeting + "</p>");
//task no 7
var userInput = +prompt("Task 7:\n\nEnter a time in 24 hour Clock format (0000 to 2359)");
var message;
if(userInput >= 0000 && userInput < 1200){
    message = "Good morning.";
}
else if(userInput >= 1200 && userInput < 1700){
    message = "Good afternoon.";
}
else if(userInput >= 1700 && userInput < 2100){
    message = "Good evening.";
}
else if(userInput >= 2100 && userInput <= 2359){
    message = "Good night.";
}
else{
    message = "invalid time entered.";
}
alert("Task 7:\n\n" + message);
//Chapter No 14 - 16
//task no 1
var studentNames = [];
//task no 2
var studentNames = new Array();
//task no 3 to 6
var strings = ["apple", "orrange"];
var numbers = [1, 2, 3];
var boolean = [true, false];
var mixdArray = ["apple", "orrange", 1, 2, 3, true, false];
//task no 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<p><br><br><br><br>Task 7:</p><br>")
document.write("<h1>Qualifications:</h1><br>")
document.write("1) " +qualifications[0]+ "<br>")
document.write("2) " +qualifications[1]+ "<br>")
document.write("3) " +qualifications[2]+ "<br>")
document.write("4) " +qualifications[3]+ "<br>")
document.write("5) " +qualifications[4]+ "<br>")
document.write("6) " +qualifications[5]+ "<br>")
document.write("7) " +qualifications[6]+ "<br>")
document.write("8) " +qualifications[7]+ "<br>")
//task no 8
document.write("<p><br><br><br><br>Task 8:</p><br>")
var studentNames = ["Ahmed Ali", "Aizaz Nadeem", "Dawood Shahid", "Talha Siddique"];
var studentMarks = [480, 330, 250, 450];
var totalMarks = 500;
var studentPercentage = [];
studentPercentage[0] = (studentMarks[0] / totalMarks) * 100;
studentPercentage[1] = (studentMarks[1] / totalMarks) * 100;
studentPercentage[2] = (studentMarks[2] / totalMarks) * 100;
studentPercentage[3] = (studentMarks[3] / totalMarks) * 100;
document.write("Marks of " + studentNames[0] + " is " + studentMarks[0] + " and percentage is " + studentPercentage[0] + "%<br>")
document.write("Marks of " + studentNames[1] + " is " + studentMarks[1] + " and percentage is " + studentPercentage[1] + "%<br>")
document.write("Marks of " + studentNames[2] + " is " + studentMarks[2] + " and percentage is " + studentPercentage[2] + "%<br>")
document.write("Marks of " + studentNames[3] + " is " + studentMarks[3] + " and percentage is " + studentPercentage[3] + "%<br>")
// task no 9
// a
var colorsA = ["red", "green", "brown", "orange"];
var userInputBegn = prompt("\nTask 9(a):\n\n" + colorsA + "\nEnter a color that you want to add in the beginning.");
document.write("<p><br><br><br><br>Task 9(a):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsA);
document.write("<br>Array after upadte:<br>");
colorsA.unshift(userInputBegn);
document.write(colorsA);
// b
var colorsB = ["red", "green", "brown", "orange"];
var userInputEnd = prompt("\nTask 9(b):\n\n" + colorsB + "\nEnter a color that you want to add in the end.");
document.write("<p><br><br><br><br>Task 9(b):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsB);
document.write("<br>Array after upadte:<br>");
colorsB.push(userInputEnd);
document.write(colorsB);
// c
var colorsC = ["red", "green", "brown", "orange"];
var userInput1 = prompt("\nTask 9(c):\n\n" + colorsC +"\nEnter first color that you want to add in the begning.");
var userInput2 = prompt("\nTask 9(c):\n\n" + colorsC +"\nEnter second color that you want to add in the begning.");
document.write("<p><br><br><br><br>Task 9(c):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsC);
document.write("<br>Array after upadte:<br>");
colorsC.unshift(userInput1, userInput2);
document.write(colorsC);
// d
var colorsD = ["red", "green", "brown", "orange"];
document.write("<p><br><br><br><br>Task 9(d):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsD);
document.write("<br>Array after upadte:<br>");
colorsD.shift();
document.write(colorsD);
// e
var colorsE = ["red", "green", "brown", "orange"];
document.write("<p><br><br><br><br>Task 9(e):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsE);
document.write("<br>Array after upadte:<br>");
colorsE.pop();
document.write(colorsE);
// f
var colorsF = ["red", "green", "brown", "orange"];
var userAddArrayIndex = +prompt("\nTask 9(f):\n\n" + colorsF +"\nEnter the position number where you want to add a color.");
var userInput1 = prompt("\nTask 9(f):\n\n" + colorsF +"\nEnter first color that you want to add in the begning.");
document.write("<p><br><br><br><br>Task 9(f):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsF);
document.write("<br>Array after upadte:<br>");
colorsF.splice(userAddArrayIndex-1, 0, userInput1);
document.write(colorsF);
// g
var colorsG = ["red", "green", "brown", "orange"];
var userRemArrayIndex = +prompt("\nTask 9(g):\n\n" + colorsG +"\nEnter the position number where you want to remove a color.");
var userArrayEleRemove = +prompt("\nTask 9(g):\n\n" + colorsG +"\nEnter the number of elements that you want to remove.");
document.write("<p><br><br><br><br>Task 9(g):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsG);
document.write("<br>Array after upadte:<br>");
colorsG.splice(userRemArrayIndex-1, userArrayEleRemove);
document.write(colorsG);
// task no 10
var studentMarks = [320, 230, 480, 120];
document.write("<p><br><br><br><br>Task 10:</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(studentMarks);
document.write("<br>Array after upadte:<br>");
studentMarks.sort();
document.write(studentMarks);
//Chapter No 17 -20
//task no 1 - 2
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    ["a", "b", "c", "d"]
];
document.write("<p><br><br><br><br>Task 1 & 2:</p><br>")
for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}
//task no 3
document.write("<p><br><br><br><br>Task 3:</p><br>")
for (i = 0; i < 10; i++) {
    document.write(i+1 + "<br>");
}
// task no 4, 5 & 6
//task no 7
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("\nTask 7:\n\nPlease enter any bakery items for search.");
for (i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        alert("\nTask 7:\n\n"+userInput + " is available at index " + i + " in our bakery");
        break;
    }
    else if (i+1 === bakeryItems.length && bakeryItems[i] != userInput) {
        alert("\nTask 7:\n\n"+userInput + " is not available in our bakery")
    }
}
//task no 8
var numbers = [1, 100, 24, 53, 78, 999, 91, 12]
var maxNumber = numbers[0]
document.write("<p><br><br><br><br>Task 8:</p><br>")
document.write(numbers);
for (i = 0; i < numbers.length; i++) {
    if (maxNumber < numbers[i+1]) {
        maxNumber = numbers[i+1];
    }
}
document.write("<br><br> The largest number is " + maxNumber);
// task no 9
var numbers = [100, 24, 53, 78, 999, 91, 1, 12]
var minNumber = numbers[0]
document.write("<p><br><br><br><br>Task 9:</p><br>")
document.write(numbers);
for (i = 0; i < numbers.length; i++) {
    if (minNumber > numbers[i+1]) {
        minNumber = numbers[i+1];
    }
}
document.write("<br><br> The smallest number is " + minNumber);
// task no 10
document.write("<p><br><br><br><br>Task 10:</p><br>")
for (i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + ", ");
    }
}
*/