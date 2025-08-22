const friendsName = (names) => {
    let evenLength = [];
    for(const friends of names){
        if(friends.length % 2 == 0){
            evenLength.push(friends)
        }
    }
    return evenLength;
}

const name = ["Raj","mayad","fidbi","nadiya","jarif","alin","salman"];

console.log(friendsName(name));
