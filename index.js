"use strict";

import {provincesArray, provincesUpperCase, provinceFilterCape} from './utils/provincesUtils.js';
import {namesArray} from './utils/namesUtils.js';
import {productsArrayNames, productsShortNames, productsTotalPrice, 
  productsHighestLowest, productsConcatenateNames, productsNameCost} from './utils/productsUtils.js'


/** 🔭 Basic Exercises 
 *  📜 The custom logic is in 'utils/provincesUtils.js' file and 'utils/namesUtils'.
 */

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


/** 🔭 Advanced Exercises (Single `console.log` Execution)
 *  📜 The custom logic is in 'utils/productsUtils.js' file.
 */

//1. **Log Products**: Iterate over the products array, logging each product name.
console.log(`\nLog Each Product Name\n-----------------------------------------------------\n`, 
  productsArrayNames
);

//2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
console.log(`\nLog Products with Name Length Less Than or Equal to 5\n-----------------------------------------------------\n`, 
  productsShortNames
);

//3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
console.log(`\nTotal Price of Products\n-----------------------------------------------------\n`, 
  productsTotalPrice
);

//4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
console.log(`\nLog Concatenated Product Names\n-----------------------------------------------------\n`, 
  productsConcatenateNames
);

//5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
console.log(`\nFind Highest and Lowest Priced Products\n-----------------------------------------------------\n`,
  productsHighestLowest()
);

//6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
console.log(`\nLog Object Transformation\n-----------------------------------------------------\n`, 
  productsNameCost
);
