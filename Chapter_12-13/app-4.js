

var character = prompt("Enter a character:");
if (character == 'a' || character == 'A' || character == 'e' || character == 'E' || character == 'i' || character == 'I' || character == 'o' || character == 'O' || character == 'u' || character == 'U') {
    alert("Its a vowel");
} else if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
    alert("It's a consonant");
} else {
    alert("Invalid input! Please enter an Alphabet");
}