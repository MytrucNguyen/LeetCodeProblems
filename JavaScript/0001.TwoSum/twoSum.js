/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numbersLookingFor = new Map();

    for (let i = 0; i < nums.length; i++) {
        const lookingFor = target - nums[i];

        if (numbersLookingFor.has(lookingFor)) {
            return [numbersLookingFor.get(lookingFor), i];
        }

        numbersLookingFor.set(nums[i], i);
    }

    return [];
};