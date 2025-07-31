function tallest (height){

    let tallestHeight = 0;

    for(const num of height){
        if(tallestHeight<num){
            tallestHeight=num;
        }
    }
    return tallestHeight;
}

const heights = [43,76,65,97,65,87,95,32,54]

console.log(tallest(heights))