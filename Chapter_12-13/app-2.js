 
 var num1 = +prompt("Enter first integer:");
 var num2 = +prompt("Enter second integer:");

if (num1 > 0 && num2 > 0 && num1 > num2) 
{
    document.write("The larger number is " + num1 );
}
else if (num1 > 0 && num2 > 0 && num1 < num2) {
    document.write("The larger number is " + num2);
}
else if (num1 === num2 && num1 > 0 && num2 > 0) {
    document.write("Both numbers are equal!");   
} 
else 
{
    document.write("Please try again!");
  
}
