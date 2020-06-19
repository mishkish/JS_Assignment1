
  var celsiusTemp = +prompt("Enter Celsius Temperature:");
  var celToFahr = celsiusTemp * 9 / 5 + 32;
  var calTemp1 = celsiusTemp+'\xB0C is ' + celToFahr+ ' \xB0F.';
  document.write(calTemp1);

  document.write("<br>");

  var fahrenheitTemp = +prompt("Enter Fahrenheit Temperature:");
  var fahrToCel = (fahrenheitTemp - 32) * 5 / 9;
  var calTemp2 = fahrenheitTemp+ '\xB0F is ' + fahrToCel + '\xB0C.';
  document.write(calTemp2); 
 


