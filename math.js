/*[module.exports in nodejs]
-In Node.js, module.exports is used to export functions, objects, or variables from a module so they can be used in other files.
-transfering multiple functions and a string from one file to another.

*/
// let add=(a,b)=>{
//     return a+b;
// }       
// let sub=(a,b)=>{
//     return a-b;
// }   
// let mul=(a,b)=>{        
//     return a*b;
// }   
// let str="Hello World";

// //method 1
// module.exports={add,sub,mul,str}; //exporting multiple functions and a string.

// //method 2
// let math={add,sub,mul,str};
// module.exports=math; //exporting an object with multiple functions and a string.

//  //method 3
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mul=mul;
// module.exports.str=str; //exporting multiple functions and a string.




/*[import in nodejs]
-need to write type="module" in package.json file.
*/
//code

// math.js (ESM)
export let add = (a, b) => a + b;
export let sub = (a, b) => a - b;
export let mul = (a, b) => a * b;
export let str = "Hello World";




