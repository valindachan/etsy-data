// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);
// console.log(question1());



// 1: Show me how to calculate the average price of all items.
function question1 () {

  let sum = 0;

  // Add up the price of each item
  for (var i = 0; i < data.length; i++) {
    sum += data[i]['price'];
  }

  // Find the average of the sum of all prices
  let avgPrice = sum / data.length; // Update this later

  // Display the average price
  console.log('The average price is $' + avgPrice.toFixed(2));
  return avgPrice;

}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {

  let itemsInPriceRange = [];

  // Go through each item and save the title if it is between $14 and $18 USD
  // Should the test remove '1970s Schlitz Malt Liquor Glass Beer Pitcher'?
  // That costs $18 but the currency is in GBP
  // "Between $14 and $18" includes $14 and $18?
  for (var i = 0; i < data.length; i++) {
    if(data[i]['price'] >= 14 && data[i]['price'] <= 18 && data[i]['currency_code'] === 'USD') {
      itemsInPriceRange.push(data[i]['title']);
    }
  }

  // Display the titles of each item that meets the price range
  for (var i = 0; i < itemsInPriceRange.length; i++) {
    console.log(itemsInPriceRange[i]);
  }

  return itemsInPriceRange;

}


// 3: Which item has a "GBP" currency code? Display its name and price.
function question3 () {

  let GBPItem = [];

  // Go through each item's currency code to see if it is GBP
  for (var i = 0; i < data.length; i++) {
    if(data[i]['currency_code'] === 'GBP') {
      GBPItem.push(data[i]['title'], data[i]['price']);
    }
  }

  // Show the name and price of the item priced in GBP
  console.log(GBPItem[0] + ' costs ' + GBPItem[1] + ' pounds.');

  return GBPItem[0] + ' costs ' + GBPItem[1];

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Make an array to store all items made of wood
  let woodItems = [];

  // Go through each item
  for (var i = 0; i < data.length; i++) {
    // Check each material of that item to see if wood is a material
    // If it is, save that item's name in the array
    for (var j = 0; j < data[j]['materials'].length; j++) {
      if(data[i]['materials'][j] === 'wood') {
        woodItems.push(data[i]['title']);
      }
    }
  }

  // Now that all the items made of wood have been saved in the array,
  // go through each of the saved items and display them
  for (var i = 0; i < woodItems.length; i++) {
    console.log(woodItems[i] + ' is made of wood.')
  }

  return woodItems;

}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let itemsWithOverEightMaterials = [];

  // Go through each item
  for (var i = 0; i < data.length; i++) {
    // If the item is made of eight or more materials, first display the name
    // and number of items
    if(data[i]['materials'].length >= 8) {
      itemsWithOverEightMaterials.push(data[i]['title'], data[i]['materials'].length, data[i]['materials']);

      console.log(data[i]['title'] + ' has ' + data[i]['materials'].length + ' materials: ');

      // Then display a list of the materials it is made of
      for (var j = 0; j < data[i]['materials'][j].length; j++) {
        console.log('- ' + data[i]['materials'][j]);
      }

    }
  }

}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let numMadeBySellers = 0;

  for (var i = 0; i < data.length; i++) {
    if(data[i]['who_made'] === 'i_did') {
      numMadeBySellers++;
    }
  }

  console.log(numMadeBySellers + ' items were made by their sellers.');

}
