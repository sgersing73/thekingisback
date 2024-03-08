// Helper function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Main code to use the helper function
  const originalString = "hello"; // You can change the original string
  const reversedString = reverseString(originalString);
  console.log(`Original string: ${originalString}`);
  console.log(`Reversed string: ${reversedString}`);
  