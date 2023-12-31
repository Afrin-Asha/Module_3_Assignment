function findMaxNumber(arr){
    if(arr.length === 0){
        return null;
    }
    return Math.max(...arr);
}
const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));//30
const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15
const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null