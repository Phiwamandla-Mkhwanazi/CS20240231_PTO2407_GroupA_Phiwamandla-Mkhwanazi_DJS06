"use strict";

import {products} from './data/products.js';

import {provincesArray, provincesUpperCase, provinceFilterCape} from './utils/provincesUtils.js';
import {namesArray} from './utils/namesUtils.js';
//import {} from './utils/productsUtils.js'


/*------------------------------------------------Exercises-----------------------------------------------------------------------------*/

// 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".

// -> Log Each Name

console.log(`\nLog Each Name\n-----------------------------------------------------\n`);
namesArray.forEach(name => console.log(name))

console.log(`\nLog Each Province\n-----------------------------------------------------\n`)
provincesArray.forEach(province => console.log(province))


console.log(`\nLog Each Name to Province\n-----------------------------------------------------\n`)
namesArray.forEach((name, i) =>  console.log(`${name} (${provincesArray[i]})`)); 


// 2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console
console.log(`\nLog Each Province to Upper Case\n-----------------------------------------------------\n`,
   provincesUpperCase);


// 5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
console.log(`\nLog Count of Provinces without 'Cape'\n-----------------------------------------------------\nRemaining Count: `,
   provinceFilterCape);


/*----------------------------------------Advanced Exercises (Single `console.log` Execution)-----------------------------------------------------------------------------*/

//1. **Log Products**: Iterate over the products array, logging each product name.
console.log(`\nLog Each Product Name\n-----------------------------------------------------\n`, 
  products.map(product => product.product));

//2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
console.log(`\nLog Products with Name Length Less Than or Equal to 5\n-----------------------------------------------------\n`, 
    products.filter(product => product.product.length <= 5));

//3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
console.log(`\nTotal Price of Products\n-----------------------------------------------------\n`, 
    products
      .filter(p => p.price && !isNaN(p.price))              // Remove empty/invalid prices
      .map(p => Number(p.price))                            // Convert to numbers
      .reduce((total, price) => total + price, 0)           // Calculate total price
);

//4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
console.log(`\nLog Concatenated Product Names\n-----------------------------------------------------\n`, 
    products.reduce((acc, p) => acc + p.product, ''));

//5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
console.log(
  `\nFind Highest and Lowest Priced Products\n-----------------------------------------------------\n`,
  (() => {
    const validPrices = products
    .filter(p => typeof p.price === 'number' || (typeof p.price === 'string' && p.price.trim() !== '' && !isNaN(p.price)))
    .map(p => ({ product: p.product, price: Number(p.price) }));

    const highest = validPrices.reduce((a, b) => (a.price > b.price ? a : b));
    const lowest = validPrices.reduce((a, b) => (a.price < b.price ? a : b));

    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  })()
);

//6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
console.log(`\nLog Object Transformation\n-----------------------------------------------------\n`, 
  // Destructuring: [_, { product, price }] -    
  Object.entries(products).reduce((acc, [_, { product, price }]) => {
      acc.push({ name: product, cost: price });
      return acc;
    }, [])
);
