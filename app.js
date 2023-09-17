
function sum (){
 a = +prompt("enter number");
 b = +prompt("enter number");
operations = prompt("type (+) for addition (-) for subtraction (*) for multiplication  (/) for division")

if ( operations== "+"){
     c= a + b
     console.log(c)
}
else if ( operations== "-"){
    c= a - b
    console.log(c)
}
else if ( operations== "*"){
    c= a * b
    console.log(c)
}
else if ( operations== "/"){
    c= a / b
    console.log(c)
}
else {
    console.log("input is wrong!")
}
}

sum ()




