let api = "https://fakestoreapi.com/products"


fetch(api).then((success)=>{
    console.log(success);

    return success.json()
    
})

.then((jsData)=>{

    jsData.forEach((c,i,t)=>{

        console.log(c);

        let div = document.createElement("div")

        div.innerHTML = `<h1>${c.id} . ${c.title.slice(0,70)}...</h1> <img src="${c.image}"/> <p>${c.description.slice(0,150)}...</p>`

        let apiTag = document.querySelector(".api")

        apiTag.append(div)
        

    })
    

})

.catch((error)=>{
    let apiTag = document.querySelector(".api")

    apiTag.innerHTML = error
    apiTag.style.color = "red"
})