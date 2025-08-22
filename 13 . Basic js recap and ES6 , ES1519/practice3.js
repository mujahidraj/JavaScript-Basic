const sumAvg = (arrayElement) => {
    let sum = 0;
    for (const nums of arrayElement) {
        let suqared = nums * nums;
        sum += suqared;

    }
    return sum / arrayElement.length;
}

console.log(sumAvg([1, 2, 3, 4, 5]));
