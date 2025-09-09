fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data => displayData(data))

function displayData(data){
    const sectionCalls = document.getElementById("post-section");
    for(const post of data){
        console.log(post);
        
        const div = document.createElement("div");
        div.innerHTML= `
        <h2>Poster ID : ${post.userId}</h2>
        <h3>Post Title : ${post.title}</h3>
        <h4>Description : ${post.body}</h4>
        <hr>
        `;
        div.style.backgroundColor = "skyblue"
        
        sectionCalls.appendChild(div)
    }
}