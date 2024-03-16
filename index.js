// Helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Main function to use the helper function
  function calculateArea() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
  
    if (isNaN(radius) || radius <= 0) {
      console.log("Invalid input. Please enter a positive number for the radius.");
      return;
    }
  
    const area = calculateCircleArea(radius);
    console.log(`The area of the circle with radius ${radius} is: ${area.toFixed(2)}`);
  }
  
  // Call the main function
  calculateArea();