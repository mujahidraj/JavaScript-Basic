let array = [12,243,5436,7765,86789,543];

// let reverseArray = array.reverse();

// console.log(reverseArray)

let revNumber = [];

for(const num of array){
    revNumber.unshift(num)
}

revNumber.shift()
console.log(revNumber)
