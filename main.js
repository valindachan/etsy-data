// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);
// console.log(question1());



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum = 0;

  for (var i = 0; i < data.length; i++) {
    sum = sum + data[i]['price'];
  }

  let avgPrice = sum / data.length; // Update this later

  console.log('The average price is $' + avgPrice.toFixed(2));
  return avgPrice;

}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
