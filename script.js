// Function to determine if the year is a leap year
function isLeapYear(year) {
  return (year % 4 == 0) && (year % 100 != 0) && (year % 400 != 0) ? `${year} is a leap year.` : `${year} is not a leap year.`
}

// Declare Variables
const year = 2025;
const result = isLeapYear(year);

// Log the result to the console
console.log(result);
