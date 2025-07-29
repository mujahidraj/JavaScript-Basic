function avg_odd_num (numbers){
    let sum=0;
    let count =0;
    for(const number of numbers){
        
        if(number % 2 !== 0){
            sum+=number
            count++;
        }
    }
    return (sum/count).toFixed(2);
}

let numbers = [2 ,4,6,7,2,1,3,9,3];
console.log(avg_odd_num(numbers))