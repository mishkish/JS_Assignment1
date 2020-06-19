var num1 = +prompt("Enter first number: ");
var num2=+prompt("Enter second number: ");
var operator = prompt("Enter operator: ");

if(operator == "+")
{
    document.write("Sum:  ", + num1 + num2);
}

else if(operator == "-")
{
    document.write("Difference:  ", + num1 - num2);
}

else if(operator == "*")
{
    document.write("Product:  ", + num1 * num2);
}

else if(operator == "/")
{
    document.write("Division:  ", + num1 / num);
}