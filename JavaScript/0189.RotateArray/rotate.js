/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    let part = nums.splice(nums.length - k);
    nums.unshift(...part);
    
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3))