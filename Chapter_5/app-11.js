document.write("<h1>Age Calculator</h1>")

var CurrYear = +prompt("Enter Current year: ");
document.write("Current Year: " + CurrYear);
document.write("<br>");

var BirthYear = +prompt("Enter Birth year: ");
document.write("Birth Year: " + BirthYear);
document.write("<br>");

var Age;
Age = CurrYear - BirthYear
document.write("Your Age is: " + Age);