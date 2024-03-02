/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m + n - 1;
    m--;
    n--;

    while (n >= 0) {
        if (m < 0 || nums2[n] > nums1[m]) {
            nums1[i] = nums2[n];
            n--;
        } else {
            nums1[i] = nums1[m];
            m--;
        }
        i--;
    }
};