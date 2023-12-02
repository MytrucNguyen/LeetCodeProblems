/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1 = m - 1;
  let index2 = n - 1;
  let mergeIndex = m + n - 1;

  while (index2 >= 0) {
    if (index1 >= 0 && nums1[index1] > nums2[index2]) {
      nums1[mergeIndex] = nums1[index1];
      index1--;
    } else {
      nums1[mergeIndex] = nums2[index2];
      index2--;
    }
    mergeIndex--;
  }
};