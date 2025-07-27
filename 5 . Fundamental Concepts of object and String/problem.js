

// const matrixA = [
//     [1, 3],
//     [1, 0],
//     [1, 2]
// ];

// const matrixB = [
//     [0, 0],
//     [7, 5],
//     [2, 1]
// ];



// const rows = matrixA.length;
// const cols = matrixA[0].length;
// let resultMatrix = new Array();



// // Perform element-wise addition
// for (let i = 0; i < rows; i++) {
//     const row=[];
//     for (let j = 0; j < cols; j++) {
//         row.push( matrixA[i][j] + matrixB[i][j]);

//     }
//     resultMatrix.push(row);
// }
// console.log(resultMatrix);

let i = 91;
let sumOfOdd = 0;

while (i <= 129) {
    if (i % 2 !== 0) {
        sumOfOdd += i;
    }
    i++;
}

console.log(sumOfOdd);

{
    let i = 51;
    let sumOfEven = 0;
    while (i <= 85) {
        if (i % 2 == 0) {

            sumOfEven += i;
        }
        i++;
    }
    console.log(sumOfEven);


}



