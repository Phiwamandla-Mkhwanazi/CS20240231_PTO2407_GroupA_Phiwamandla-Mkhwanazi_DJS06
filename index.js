"use strict";

/**
 * Import processed data arrays and computed results from utility modules.
 * 
 * All logic exercises except basic 1.3 is found in their respective utility file
 * 
 *    Province Util File  |   Names Util File    |   Products Util File             
 * |----------------------|----------------------|-----------------------|
 * | Basic Ex: 1,2,4,5    | Basic Ex: 1,3,6,7    | Advanced Ex: 1 - 7    |
 */

import { provincesArray, provincesUpperCase, provinceFilterCape } from './utils/provincesUtils.js';
import { namesArray } from './utils/namesUtils.js';
import {
  productsArrayNames,
  productsShortNames,
  productsTotalPrice,
  productsHighestLowest,
  productsConcatenateNames,
  productsNameCost
} from './utils/productsUtils.js';


/**
 * 🔭 Basic Exercises
 * 📜 Logic is abstracted into 'utils/provincesUtils.js' and 'utils/namesUtils.js'
 */

// 1. **Log Each Name**: Logs each name individually from the 'namesArray'
console.log(`\nLog Each Name\n-----------------------------------------------------\n`);
namesArray.forEach(name => console.log(name));

// 2. **Log Each Province**: Logs each province individually from the 'provincesArray'
console.log(`\nLog Each Province\n-----------------------------------------------------\n`);
provincesArray.forEach(province => console.log(province));

// 3. **Log Each Name to Province**: Logs each name paired with its corresponding province.
console.log(`\nLog Each Name to Province\n-----------------------------------------------------\n`);
namesArray.forEach((name, i) => console.log(`${name} (${provincesArray[i]})`)); // Exercise 1.3 - Matching names with provinces

// 4. **Log Each Province to Upper Case**: Logs all provinces converted to uppercase
console.log(`\nLog Each Province to Upper Case\n-----------------------------------------------------\n`, 
  provincesUpperCase);

// 5. **Log Count of Provinces Without 'Cape'**: Filters out any province names that include 'Cape' and logs the remaining count
console.log(`\nLog Count of Provinces without 'Cape'\n-----------------------------------------------------\nRemaining Count: `, 
  provinceFilterCape);


/**
 * 🔭 Advanced Exercises
 * 📜 Logic is abstracted into 'utils/productsUtils.js'
 */

// 1. **Log Each Product Name**: Logs each product name from the 'productsArrayNames'
console.log(`\nLog Each Product Name\n-----------------------------------------------------\n`, 
  productsArrayNames);

// 2. **Log Products with Name Length ≤ 5**: Filters and logs product names with length of 5 characters or less
console.log(`\nLog Products with Name Length Less Than or Equal to 5\n-----------------------------------------------------\n`, 
  productsShortNames);

// 3. **Log Total Price of Products**: Filters out invalid/empty product prices and calculates the total sum of valid prices
console.log(`\nTotal Price of Products\n-----------------------------------------------------\n`, 
  productsTotalPrice);

// 4. **Log Concatenated Product Names**: Concatenates and logs all product names into a single string
console.log(`\nLog Concatenated Product Names\n-----------------------------------------------------\n`, 
  productsConcatenateNames);

// 5. **Log Highest and Lowest Priced Products**: Finds and logs the product names with the highest and lowest prices
console.log(`\nFind Highest and Lowest Priced Products\n-----------------------------------------------------\n`, 
  productsHighestLowest());

// 6. **Log Object Transformation**: Transforms the product data into an array of objects with 'name' and 'cost' properties and logs the result
console.log(`\nLog Object Transformation\n-----------------------------------------------------\n`, 
  productsNameCost);
