// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the input element and get the raw HTML node
var inputElement = d3.select("#patient-form-input");

// Define variable to be used for input element property("value")
var bloodInput;

// Select the submit button
var submit = d3.select("#submit");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element
  bloodInput = inputElement.property("value");

  console.log(bloodInput);
  
  var filteredData = people.filter(person => person.bloodType === bloodInput);

  console.log(filteredData);
  
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  
  // Create empty arrays to store the dish and spice values
  // Iterate through each person object
  filteredData.forEach((person) => {
  var name;
  var age;
  var type;
  // Iterate through each key and value
  Object.entries(person).forEach(([key, value]) => {

    // Use the key to determine which variable to assign the value to
    if (key === "fullName") {
      name = (value);
    }
    else if (key === "age"){
      age = (value);
    }
    else {
      type = (value);
    }
    });

    // Finally, add the summary stats to the `ul` tag
    d3.select(".summary")
    .append("li").text(`Name: ${name}|       Age: ${age} |Blood Type: ${type}`);
  });
  // 
 
});

// {
//   fullName: "Cleveland Shelton",
//   age: 22,
//   bloodType: "B-"
// },