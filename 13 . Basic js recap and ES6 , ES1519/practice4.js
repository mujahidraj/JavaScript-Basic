const maxArray = (array1, array2) => {
    const newArray = [...array1, ...array2];

    console.log(newArray)
    const maxArray = Math.max(...newArray);
    return maxArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [7, 6, 5, 4, 3, 2, 1];

console.log(maxArray(array1,array2));
