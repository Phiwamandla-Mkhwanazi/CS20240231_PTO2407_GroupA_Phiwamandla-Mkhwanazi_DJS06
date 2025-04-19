/** 
 *  Basic Exercises includes 1,3,6 and 7 logic
 *  Import seed data from the names and provinces files which are found inside the data folder within the app
*/
import {names} from '../data/names.js';
import { provinces } from '../data/provinces.js';

// 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. 
export const namesArray = [...names];  //Create a shallow copy of the names array

// 3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
export const nameLengths = (names) => names.map(name => name.length); // Returns an array of name lengths

// 6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
export const namesContainS = (names) =>
//For each name, it converts the name to lowercase, splits it into an array of characters, and checks if 's' is present at least once
    names.map(name => name.toLowerCase().split('').some(char => char === 's'));

// 7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.
export const nameProvinceMap = names.reduce((acc, name, i) => { acc[name] = provinces[i]; return acc; }, {});


