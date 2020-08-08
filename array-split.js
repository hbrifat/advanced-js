const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(3,7);
console.log(part);
console.log(nums);

const removed = nums.splice(3,5);
console.log(removed);
console.log(nums);

const together = nums.join("");
console.log(together);