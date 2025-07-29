function duplicate_item (arr){

    let unique = [];

    for (let i=0;i<arr.length;i++){
        if(unique.includes(arr[i])===false){
            unique.push(arr[i])
        }
    }
    return unique;


}

let arr = ["Raj", "Fidbi", "Mayad", "Fidbi" , "Raj", "Alin", "Nadiya" , "Jarif" ,"Alin"];

let num = [1,3,5,7,9,2,6,4,3,7,9,1,5,6,1,8];

console.log(duplicate_item(arr))

console.log(duplicate_item(num))
