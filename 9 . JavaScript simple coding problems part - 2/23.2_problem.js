// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

// ---

function smallestName (arr){
    let smallest = arr[0];
    for(const name of arr){
        if(smallest.length > name.length){
            smallest = name;
        }
    }
    return smallest;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ronaldo', 'rashed'];

console.log(smallestName(heights2));
