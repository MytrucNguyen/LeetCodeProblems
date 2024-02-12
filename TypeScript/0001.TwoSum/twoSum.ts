function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complementNumber = target - nums[i];

        if (map.has(complementNumber)) {
            return [map.get(complementNumber)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
};

