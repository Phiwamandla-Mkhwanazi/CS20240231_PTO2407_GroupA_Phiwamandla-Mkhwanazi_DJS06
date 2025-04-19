import { provinces } from '../data/provinces.js';

// 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
export const provincesArray = [...provinces]; 

// 2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console
export const provincesUpperCase = provinces.map(province => province.toUpperCase());

// 4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
export const provincesSort = [...provinces].sort(); // Create a sorted copy of the provinces array without mutating the original

// 5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
export const provinceFilterCape = provinces.filter(province => !province.includes("Cape")).length;
