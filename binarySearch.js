const sample = [11, 22, 33, 45, 58, 69, 69, 78, 82, 91];

var index = getIndex(sample, 69);
console.log(index); // 5

index = getIndex(sample, 78);
console.log(index); // 7

function getIndex(array, number, firstIndex = 0) {
    const arrLength = array.length;
    const centerIndex = Math.floor(arrLength / 2);
    const currentValue = array[centerIndex];

    if (currentValue === number) {
        return firstIndex + centerIndex;
    }

    if (centerIndex === 0) {
        return -1;
    }

    return getIndex(
        number < currentValue
            ? array.slice(0, centerIndex)
            : array.slice(centerIndex, arrLength),
        number,
        number < currentValue
            ? firstIndex
            : centerIndex + firstIndex
    );
}