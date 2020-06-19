// Q1
var a = [
    [],
    [],
    [],
    [],
    []
];

//  Q2
var multiArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

//  Q3
for(var j=1; j<=10; j++)
{
    document.write(i + "<br>");
}
document.write("<br>");

// Q4
var num = +prompt("Enter a number to show its multiplication table ");
var len = +prompt("Enter length multiplication table ");
document.write("<h5>Multiplication table of </h5> " + " " + num );
document.write("<br>");
document.write("<h5>Length </h5>" + " " + len );

for(var j=num ; j< len.length; j++)
{
    document.write(num + " X " + "<br>");
}

// Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var j = 0; j < fruits.length; j++) {
    console.log(fruits[i])
    document.write("<br>");

}

for (var j = 0; j < fruits.length; j++) {
    console.log("Element at index " + j + " is " + fruits[j])
    document.write("<br>");

}

// Q6
//a
document.write("<b>Counting</b>");
document.write("<br>")
for(var j = 1; j<= 15; j++)
{
    document.write(j, "<br>");
}


//b
document.write("<b>Reverse Counting</b>");
document.write("<br>")
for(var j = 10; j>= 10; j--)
{
    document.write(j, "<br>");
}

//c
document.write("<b>Even</b>");
document.write("<br>")
for(var j= 0; j<= 20; j+2)
{
    document.write(j, "<br>");
}


//d
document.write("<b>Odd</b>");
document.write("<br>")
for(var j = 1; j<= 19; j+2)
{
    document.write(j, "<br>");
}

//e
document.write("<b>Series</b>");
document.write("<br>")
for(var j = 0; j<= 20; j+2)
{
    document.write(j + "K" + "<br>");
}

// Q7
alert("Welcome to ABC Bakery.")
var item = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("What do you want to order sir/ma'am?")
var found = false

for (j = 0; j < item.length; j++) {
    if (inputCart === item[j]) {
        alert(inputCart + " is available at index " + j + " in our bakery")
        found = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}

// Q8
var array = [24, 53, 78, 91, 12]

console.log("Array items: " + array)
document.write("<br>")
array = array.sort()
console.log("The largest number is: " + array[array.length - 1])

// Q9
var array = [24, 53, 78, 91, 12]

console.log("Array items: " + array)
document.write("<br>")
array = array.sort.reverse()
console.log("The largest number is: " +array[array.length - 1])


// 10
for(var j=5; j<=100; j+5)
{
    document.write(j + "<br>");
}