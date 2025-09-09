const loadComments = async()=>{
   try{
    const res= await fetch('https://jsonplaceholder.typicode.com/comments');
   const data = await res.jszon();
   console.log(data);
   
   }
   catch(error){
    console.log("error Founded");
    
   }
} 

const loadComments2 = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>console.log(data)
    )
    .catch(error=>console.error("error fucked up", error))
}