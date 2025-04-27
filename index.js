/*/* let text = "Good morning Good night Good evening";
let str ="AliceInWonderland";
console.log(text.replace(/Good/g, "Great"));
console.log(text.toUpperCase());

console.log(text);

//trim() -> removes whitespace from outside
let sample="     hello   world    "
console.log(sample.trim());

//split()->
console.log(str.split(""));

//string.indexOf() -> 
console.log(str.indexOf("w"));

//10.lastIndexOf() ->returns the index of the last occurrence of a specified text
console.log(text.lastIndexOf("o"));

//startsWith()-> returns true if a string begins with a specified value,eles false
console.log(str.startsWith("A"));


//12.endsWith() -> returns true if a string ends with a specified value, else false
console.log(str.endsWith("n"));

//13.includes () ->returns true if a string contains a specified value
console.log(text.includes("m"));

//14.search() ->searches a string for a specified value and returns the position of the match
console.log(str.search("n")); 

let car = {
    color: "black",
    model: "y2",
    year: 1992,
    brand: "tata",
    wheel: {
        material: "alloy",
       
    }
};

console.log("object is", car); 
console.log(car.brand); 

console.log(car.wheel.material); 

const basket = ["apple", "kiwi", 0,1,true];
console.log(basket);
console.log(basket[1]);
basket[2]="banana";
basket[3]="cerry";
console.log(basket);

const home =[];
home[1]="room";
home[2]="mybalcony";
console.log(home);  

let arr1= [1,2,3];
arr1.push(4); //gets added in the end of the array
arr1.push(6);
console.log(arr1);
arr1.pop();//removes element from the end of the array
console.log(arr1);
arr1.unshift(5);//adds element at the start of the array
console.log(arr1);
arr1.shift();//removes element from the start of the array
console.log(arr1);
arr1.splice(1,3, "hi");//replaces the elements from start to end with the given elements
console.log(arr1);

console.log(arr1);
arr1.push(2);
arr1.push(3);
arr1.push(4);
arr1.push(5);
//slice(start,end);
console.log(arr1.slice(1,4));

const name1= [3, 77, 88];
const name2= [4,74, 44];
const name3=[5,66,68];
const group = name1.concat(name2, name3);
//sort operation
console.log(group.sort());
//reverse operation
console.log(group.reverse());

//operator
//unary operator


// decrement
var a=4;
console.log(--a);
console.log(a);
console.log(a--);
console.log(a);

//arithmetic operator -> 
var b=8;
console.log(a ,b);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a);
console.log(b**a);

var b1="10", c1 =10;

console.log(c1 ,b1);
console.log(c1+b1);
console.log(c1-b1);
console.log(c1*b1); 
console.log(b1/c1);
console.log(b1%c1);
console.log(b1**c1);


//toExponential() returns a string, with a number rounded and written using exponential notation
let f=9.656;
console.log(f.toExponential(2));
console.log(f.toExponential(3));
console.log(f.toExponential(5));


//toFixed() returns a string, with the number written with a specified number of decimals
let n =6.78398
console.log(n.toFixed(5));
console.log(n.toFixed(0));
console.log(n.toFixed(6));


//toPrecision() returns a string, with a number written with a specified length
let l=8.373
console.log(l.toPrecision());
console.log(l.toPrecision(3));
console.log(l.toPrecision(7));

//valueOf() returns a number as a number, we don't use this function in our code 


//Methods to convert variables to numbers
//Number() method
// Returns a number, converted from its argument.
console.log(Number(true));
console.log(Number(false));
console.log(Number("2"));
console.log(Number("444.4"));
console.log(Number("no"))

// parseInt() method
// Parses its argument and returns an integer
console.log(parseInt("15 44 54"));
console.log(parseInt("10.66"));
console.log(parseInt("15 44 54"));
console.log(parseInt("15 44 54"));
// parseFloat() method
// Parses its argument and returns a floating point number

console.log(parseFloat("10 20 30"));
console.log(parseFloat("-10.4"));
console.log(parseFloat("years 2030"));
console.log(parseFloat("10 years"));

a+=10;  //a=a+10

//relational operator >, >=,< ,<= ,==, === (strict equality)
console.log(10 =="10");
console.log(3<0);
console.log(10>=10);
console.log(5>8);
console.log(100 ==="100");

//bitwise operator -> &,|, ~, ^
console.log(20&2);
console.log(20|2);
console.log(20^2);
console.log(~20);

//logical operator -> &&, ||, !(not)
let num1=2;
console.log(num1> 0 && num1 % 2 ==0);
console.log(num1>0 || num1 %2 ==0);
console.log(!(num1>0 && num1 %2 ==0 )); 

//Ternary operator (condition) ? statmnt 1: statement 2
! (num1 > 0 && num1 % 2 == 0)
? console.log("number is positive and even ")
: console.log("number is not even"); 

//typeof() -> returns the datatype of varaible
console.log(typeof num1);
console.log(typeof basket)
console.log(typeof arr1);
console.log(typeof NaN);

console.log(5 << 1);
console.log(5 >> 1);
console.log(10 >> 1);
console.log(10<<3);

//date object
const d1 =new Date();
console.log(d1.getFullYear());//Get the year as a four digit number (yyyy)
console.log(d1.getMonth());//Get the month as a number (0-11)
console.log(d1.getDate());//Get the day as a number (1-31)
console.log(d1.getHours());//Get the hour (0-23)
console.log(d1.getMinutes());//Get the minuter (0-59)


const d2 =new Date();
let year = d2.getFullYear();
let month = d2.getMonth()+1;
let date = d2.getDate();

console.log("today's date is " + date+ "/" + 0 + month +"/" + year);

const d3 = new Date();
d3.setDate(31);
d3.setFullYear(2025);
d3.setMonth(6);
console.log("the birthday of bob is", d3);

//Math object
//built in math properties
console.log(Math.E); // returns Euler's number
console.log(Math.PI); // returns PI
console.log(Math.SQRT2); // returns the square root of 2
console.log(Math.SQRT1_2); // returns the square root of 1/2
console.log(Math.LN2); // returns the natural logarithm of 2
console.log(Math. LN10); // returns the natural logarithm of 10
console.log(Math.LOG2E); // returns base 2 logarithm of E
console.log(Math.LOG10E); // returns base 10 logarithm of E

//Math methods
console.log(Math.round(5.57)); //returns the nearest integer value
console.log(Math.ceil(5.57)); //Returns the num rounded up to its nearest integer
console.log(Math.floor(5.57)); //rounded down to its nearest integer
console.log(Math.trunc(5.57));// returns the interger part of the number

//math.sign (x) return if x is negative, null or positive
console.log(Math.sign(-4));
console.log(Math.sign(4));
console.log(Math.sign(0));


console.log(Math.pow(2,3));
console.log(Math.sqrt(144));
console.log(Math.abs(-4.45));
console.log(Math.min(77,7,9,5,1));
console.log(Math.random());

console.log(Math.floor(Math.random() * 10));
// returns a random integer between 0 and 9 (both included)
console.log(Math.floor(Math.random() * 100));
// returns a random integer between 0 and 99 (both included)
console.log(Math.floor(Math.random() * 10) + 1);
// returns a random integer between 1 and 10 (both included)

let x= new String ("john");
let y= new String ("john");
console.log (x == y);

//conditional statements


const d4 = new Date();
const hour = d4.getHours();
console.log(hour);

if (hour >= 4 && hour < 12) {
    console.log("good morning");
} else if (hour >= 12 && hour < 18) {
    console.log("good afternoon");
} else if (hour >= 18 && hour < 20) {
    console.log("good evening");
} else {
    console.log("good night");
}

let i = 3;
switch (i) {
case 0: //code block
console.log("Case 0 i is 0");
break;
case 1: //code block
console.log("Case 1 i is 1");
break;
case 2: //code block
console.log("Case 2 i is 2");
break;
default: //code block
console.log("Case default");
break;
}

var day="sun";
switch(day){
    case "mon":
        console.log("today is monday");
        break;
    case "tues":
        console.log("today is tuesday");
        break;
    case "wed":
        console.log("today is wednesday");
        break;
    case "thrus":
        console.log("today is thursday");
        break;
    case "fri":
        console.log("today is friday");
        break;
    case "sat":
        console.log("today is saturday");
        break;
    case "sun":
        console.log("today is sunday");
        break;
    case "default":
        console.log("undefine day");
}

//loop

for (var j = 0; j <= 6; j++) {
    console.log("number is", j);
}
let car1 = {
    color: "black",
    model: "y2",
    year: 1992,
    brand: "tata",
    wheel: {
        material: "alloy",
       
    }
};
for (let key in car1){
    console.log("using the for in loop", car1[key]);
}

//for in loop->loops through the properties of an object
for (let key in car1) {
console.log("using the for in loop", car1[key]);
}
//forEach()->method calls a function once for each array element
let fruits = ["apple", "orange", "mango"];
fruits.forEach((item) => console.log(item));

//for of loop
for(item of fruits) {
    console.log(item);
    }




//while loop
//while(condition){
//code
//}



//do{
//code
//}while(condition)  


//break
//continue
for(let i=0; i<5; i++){
    if (i==3){
        break;
    }
    console.log(i);
}

for (let i=0; i<5; i++){
    if (i==3){
        continue;
    }
    console.log(i);
}

//functions >A function is a block of code designed to perform a particular task.
//A function is executed when "something" invokes it (calls it).

function myFunc() {
console.log("hello world function");
}

myFunc();

function add(a,b){
   return a+b;
}
console.log(add(6,7));

//another method

function sum(a,b){
    console.log(a+b);
}

sum(11,55);

var petName = "Rocky"; //global variable
function nameFunction() {
var petName = "Sizzer"; //local variable
console.log (typeof petName + " " + "My pet name is" +"- " + petName);
}
nameFunction();
console.log (typeof petName + " " + "My pet name is" + "- " + petName);

//func to check password is strong or not

function checkPassword(password) {
    let numCount = false;
    for (let i=0; i < password.length; i++) {
    if (!isNaN(password [i])) {
    numCount = true;
    }}
    if (password.length >= 8 && numCount == true) {
    console.log("Strong password");
    } 
    else {
    console.log("Weak password");
    }}
    checkPassword("number12");
    checkPassword("alice");


//exception handling statements
try {
 let a = 10;
 let b = 0;
 if (b=== 0) {
 throw new Error("You can't divide by zero!");
 }
 let result = a / b;
 console.log("Result is", result);
 } 
 catch (error) {
    console.log("Oops! Something went wrong:", error.message);
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
 finally {
 console.log("This will always run like cleaning up the kitchen after cooking");
}

//function adding(n){
    


function checkage(age){
    try{
        if(age<0){
            throw new Error("age can't be negative!");
        }
        if(age<18){
            throw new Error ("you're too young to enter the party!");
        }
        console.log("welcome to the party!");
    }
    catch (error){
        console.log("access denied:", error.message);
    }
    finally{
        console.log("age check complete");
    }
}


//BOM - (Browers Object Model)

//bom in js enable developer to intreact with the brower beyond just the web page content
//offering control over eccencial feacture such as brower such as brower window and url browering history.
//this means you can do think like resize the window go back and forth in brower history
//or even find out what brower the user is using,
//inshort bom helps js work with the brower to make web pages more interacting.

//the windown object supported by all brower window all globle js object , function and variable
//automactically become member of window object.

//all browser splite into diffrent parts or object that can be accessed using js , 
//collectivelly these part are known as bom.

//brower default object is the window object and its represent the entire browser,
//effictively the window object is browser.


//var input = prompt("enter your name");
//console.log("hello", input);

/*

window.innerWidth //-> the inner width of the browser window (in pixels)
window.innerHeight// ->the inner height of the browser window
screen.availWidth //->returns the available width, in pixels, minus interface


// features like the Windows Taskbar
window.location.assign("https://www.google.com")//->loads a new document
window.location.reload()//->reloads the current document
window.location.replace() //-> replaces the current document with a new one
window.location.hostname //->returns the domain name of the web host
window.location.href //->returns the href (URL) of the current page
window.location.pathname//->returns the path and filename of the current page
window.location.protocol//->returns the web protocol used (http: or https:)

//to protect the privacy of the user there are limitation to who js can access the history object
//

history.back()//same as clicking back in the browser.
// method loads the previous URL in the history list.
history.forward()// same as clicking forward in the browser
//- method loads the next URL in the history list.
history.length //returns the length of the history URLs.

history.back()//same as clicking back in the browser.
// method loads the previous URL in the history list.
history.forward()// same as clicking forward in the browser
//- method loads the next URL in the history list.
history.length // returns the length of the history URLs.
navigator.cookieEnabled//: returns true if cookies are enabled
navigator.appName//: returns application name of the browser
navigator.appCodeName//: returns the application code name of the browser
navigator.product//: returns the product name of the browser engine
navigator.appVersion//: returns version information about the browser.
navigator.userAgent//: returns the user-agent header sent by the browser to the server.
navigator.platform//: returns the browser platform (operating system).
navigator.language//: returns the browser's language
navigator.onLine//: returns true if the browser is online

*/

//js timing event
//js can be executd in time interval this is called time event
//window object allow execution of the code at specific time interval are called timing events
//there are mainly three method in js;

//1 set time out
//2 set inverval

/*
function timeFunction() {
    alert("timeout function is called here");
}
*/

//JS EVENTS 
//js event are action or apression that happens in the browser 
//they can be trigger by various user intractions or by the browser itself
//js supports a varity of events for example 
//mouse events-> click , doubleclick,mouse move, mouse over, mouse out
//in keybaord-> key down, key press, key up
//form events -> submit, change, focus, blur
//window event -> load, resize and scroll

//colour changing function



const color =["black", "green", "blue", "light blue", "lightblue" ,"red", " yellow", "aqua"];
function changecolor(){
 const randomIndex= Math.floor(Math.random()*color.length);
 document.body.style.backgroundColor = color[randomIndex]
}



//DOM -> DOCUMENT OBJECT MODEL
//WITH the html dom js can access and can all the elements of an html document when the 
// a web page is loaded the browers create document object model of the page which can
//which is contracted as a tree of objects. 

//the dom define a standard for accessing document it's define the html elements as objects,
////the properties of all html elements  ,the methods to access all 

//use dom we can change, add or delete html elements
//with dom js gets all the power needed a to create dynamical html.

//js can change all the html element, html attribute , css style of the page ,
// can remove existing html elements, attribute , can add new elements
//

/*write a function to reverse the number

var i= 12345;
function reverse(n){
    let rev=0;
    while (n >0 ) {
      let digit = n % 10 ;
      rev = rev *10 + digit;
      n= Math.floor (n/10);
    }
    return rev;
}

console.log(reverse(i));

//DOM Document Object Model

//document.getElementById(id) ->
//document.getElementsByTagName(name) ->
//document.getElementsByClassName (name) ->


//element.innerHTML = new html content -> Change the inner HTML of an element
//element.attribute = new value > Change the attribute value of an HTML element
//element.style.property = new style -> Change the style of an HTML element
//element.setAttribute(attribute, value) -> Change the attribute value of HTML element


//Adding and Deleting Elements
//document.createElement(element) ->Create a new HTML element
//document.removeChild(element) -> Remove an HTML element
//document.appendChild(element) -> Add an HTML element
//document.replaceChild(new, old) -> Replace an HTML element
//document.write(text) -> Write into the HTML output stream



//event listener -> addEventListener()
let button =document.getElementById("btn"); 
button.addEventListener("click", function () { 
    document.getElementById("message").innerText = "Button Clicked!"});



    let box= document.getElementById("box");
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor="lightblue";
        box.innerText="Mouse Over!";
        box.style.border="2px solid black";
    });
    box.addEventListener("mouseout", function(){
        box.style.backgroundColor ="lightgrey";
        box.innerText = "Hover Over Me";
        box.style.border="none";
    });

    const element = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
   "The text in first paragraph (index 0) is: " + element[0].innerHTML;

const ele = document.getElementsByClassName("info"); 
console.log(typeof ele);
for (let j = 0; j ele.length; j++) {
ele[j].style.color = "red";
}

*/


const bulb= document.getElementById("bulb");
const button = document.getElementById("toggleButton");

let isButtonOn =false;

button.addEventListener("click", () => {
if(isButtonOn){
    bulb.src ="bulb on.png"  ;
    button.textContent="Turn Off";
    isButtonOn=false;
}else{
    bulb.src="bulb off.png";
    button.textContent="Turn On";
    isButtonOn=true;
}});

