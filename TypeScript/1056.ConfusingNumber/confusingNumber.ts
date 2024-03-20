function confusingNumber(n: number): boolean {
    const rotationMap: { [key: string]: string } = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    const originalString = n.toString();
    let rotatedString = '';

    for (let i = originalString.length - 1; i >= 0; i--) {
        const digit = originalString[i];
        if (rotationMap[digit] === undefined) {
            return false;
        }
        rotatedString += rotationMap[digit];
    }

    const rotatedNumber = parseInt(rotatedString, 10).toString();
    return originalString !== rotatedNumber;
};