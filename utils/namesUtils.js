import {names} from '../data/names.js';
import { provinces } from '../data/provinces.js';

// 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. 
export const namesArray = [...names];

// 3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
export const nameLengths = (names) => names.map(name => name.length);

// 6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
export const namesContainS = (names) =>
    names.map(name => name.toLowerCase().split('').some(char => char === 's'));

// 7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.
export const nameProvinceMap = names.reduce((acc, name, i) => { acc[name] = provinces[i]; return acc; }, {});


