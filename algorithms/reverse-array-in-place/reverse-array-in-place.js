function reverseArrayInPlace(arr = []) {
    let arrLength = arr.length;

    for (let i = 0; i < arrLength / 2; i++) {
        let tempItem = arr[i];
        
        arr[i] = arr[arrLength - 1 - i];
        arr[arrLength - 1 - i] = tempItem;
    }

    return arr;
}

module.exports = reverseArrayInPlace;
