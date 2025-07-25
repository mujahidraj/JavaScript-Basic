// Count how many times a string has the letter `a`

let mainString = "Count how many times a string has the letter `a`";


let count=0;

let spliting = mainString.split('');
console.log(spliting)

let indexing = spliting.indexOf("a");



for(let i=0;i<=spliting.length;i++){

    if(spliting.indexOf("a")){
        
       spliting.slice(indexing, spliting.length);
         indexing = spliting.indexOf("a", indexing + 1);
        
         count++;
       
        if(indexing===-1){
            break
        }
    }
  
   
  
}

console.log(count)


// for(let i=0;i<=mainString.length;i++){
//     if(mainString[i] ==="a" ){
//         count++
     
//     }
// }
// console.log(spliting.length)
