var marks1 = +prompt("Enter Your English Marks:");
var marks2 = +prompt("Enter Your Urdu Marks:");
var marks3 = +prompt("Enter Your Maths Marks:");

var totalMarks = 300;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks/total)*100;

document.write("Total marks:"+ " " +totalMarks + "<br>");
document.write("Marks Obtained"+ " " +obtainedMarsk + "<br>");
document.write("Percentage"+ " " +percentage+ "<br>");

if(percentage >= 80)
{
    document.write("Grade is A-one </br> Remarks: Excellent");
}
else if(percentage >= 70)
{
    document.write("Grade is A </br> Remarks: Good");
}
else if(percentage >= 60)
{
    document.write("Grade is B </br> Remarks: You Need To Improve");
}
else(percentage < 60)
{
    document.write("Grade is Fail </br> Remarks: Sorry");
}