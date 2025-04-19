"use strict";

/**
 * Import processed data arrays and computed results from utility modules.
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

//Logs each name individually
console.log(`\nLog Each Name\n-----------------------------------------------------\n`);
namesArray.forEach(name => console.log(name));

//Logs each province individually
console.log(`\nLog Each Province\n-----------------------------------------------------\n`);
provincesArray.forEach(province => console.log(province));

//Logs each name paired with its corresponding province
console.log(`\nLog Each Name to Province\n-----------------------------------------------------\n`);
namesArray.forEach((name, i) => console.log(`${name} (${provincesArray[i]})`));

//Logs all provinces in uppercase
console.log(`\nLog Each Province to Upper Case\n-----------------------------------------------------\n`, 
  provincesUpperCase);

//Logs the count of provinces not including the term "Cape"
console.log(`\nLog Count of Provinces without 'Cape'\n-----------------------------------------------------\nRemaining Count: `, 
  provinceFilterCape);


/**
 * 🔭 Advanced Exercises
 * 📜 Logic is abstracted into 'utils/productsUtils.js'
 */

// 1. Log each product name
console.log(`\nLog Each Product Name\n-----------------------------------------------------\n`, 
  productsArrayNames);

// 2. Log product names ≤ 5 characters
console.log(`\nLog Products with Name Length Less Than or Equal to 5\n-----------------------------------------------------\n`, 
  productsShortNames);

// 3. Total price of valid products
console.log(`\nTotal Price of Products\n-----------------------------------------------------\n`, 
  productsTotalPrice);

// 4. Concatenate product names into a string
console.log(`\nLog Concatenated Product Names\n-----------------------------------------------------\n`, 
  productsConcatenateNames);

// 5. Log highest and lowest priced product names
console.log(`\nFind Highest and Lowest Priced Products\n-----------------------------------------------------\n`, 
  productsHighestLowest());

// 6. Transform product entries to { name, cost }
console.log(`\nLog Object Transformation\n-----------------------------------------------------\n`, 
  productsNameCost);
