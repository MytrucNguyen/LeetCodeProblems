/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Slice = nums1.slice(0, m);
  let nums2Slice = nums2.slice(0, n);

  let unsortedMergedArray = nums1Slice.concat(nums2Slice);

  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const PIVOT = arr[0];
    let left = [],
      right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < PIVOT) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), PIVOT, ...quickSort(right)];
  }

  let sortedArray = quickSort(unsortedMergedArray);
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sortedArray[i];
  }
};
