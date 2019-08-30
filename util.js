/**
 * A module is simply a JavaScript file that exports one or more values (can be objects,
 *  functions or variables) using the export keyword. First, create a new file named 
 *  util.js in the src directory

touch util.js
 *  
 */


export default function times(x) {
    return x * x;
  }
  
  export function plusTwo(number) {
    return number + 2;
  }

  
  