document.write("<h1> The Lifetime Supply Calculator</h1>")

var snack = prompt("What is your favorite Snack:")
var currAge = +prompt("What is your current age:")
var max = +prompt("Enter the maximum age:")
var amount = +prompt("How many snacks you take per day")

var total = (max - currAge) * 365 * amount

document.write("Favorite Snack: " + favSnack + "<br>")
document.write("Current Age: " + currAge + "<br>")
document.write("Estimated Maximum Age: " + max + "<br>")
document.write("Amount of snack per day: " + amount + "<br>")
document.write("" + "<br>")
document.write("You will need " + total +  " " + favSnack + " to last you until the ripe old age of " + max + "<br>")