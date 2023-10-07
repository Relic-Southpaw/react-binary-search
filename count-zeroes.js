function countZeroes(arr) {
    let leftI = 0;
    let rightI = arr.length - 1;
    while (rightI !== LeftI) {
        let middleIdx = Math.floor((leftI + rightI) / 2);
        let middleVal = arr[middleIdx];
        if (middleVal == 0) {
            leftI = middleIdx + 1;
        } else {
            rightI = middleIdx - 1;
        }
        if (arr[rightI] == 0) {
            return (rightI + 1);
        } else {
            return rightI;
        }
    }
}

module.exports = countZeroes