// first we need to use array javascript methods before we start writing array data structure withour using javascript methods
// Array is a data structure that can store multiple values in a single variable
// The Array methods in javascript are push,pop,shift,unshift,splice,slice,indexOf,includes,find,findIndex,filter,map,reduce,forEach,every,some,sort,reverse,concat,join,toString,from,isArray,of,fill,copyWithin,entries,keys,values,flat,flatMap

const arrayValues = [1, 2, 3, 4, 5, 6, 7];
arrayValues.push(8); // push method adds an element to the end of an array

arrayValues.pop(); // pop method removes the last element from an array

arrayValues.shift(); // shift method removes the first element from an array
arrayValues.unshift(1); // unshift method adds an element to the beginning of an array

const newArray = Array.isArray(arrayValues); // isArray method checks if the given value is an array or not

const splicedArray = arrayValues.splice(2, 2, "orange"); // splice method removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
const slicedArray = arrayValues.slice(-2);

console.log(slicedArray);
