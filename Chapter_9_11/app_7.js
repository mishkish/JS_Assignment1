var num1 = 5;
var num2 = +prompt("Guess the secret number:");
if(num2 == num1)
{
    alert("Bingo!!! Correct answer...");
}
else if(num2 == ++num1)
{
    alert("Close enough to the correct answer");
}
else
{
    alert("Oopss!!! Sorry try Again.....")
}