let time = 5000,
    currentImageIndex = 0,
    images = document
            .querySelectorAll("#itens img.ic"),
    max = images.length;

let left = document.getElementById("left")
                
left.addEventListener("click", ()=>{
    images[currentImageIndex]
        .classList.remove("select")

    currentImageIndex--

    if(currentImageIndex< 0)
        currentImageIndex = (max-1)

    images[currentImageIndex]
        .classList.add("select")
})

let right = document.getElementById("right")                    
right.addEventListener("click", ()=>{
    images[currentImageIndex]
        .classList.remove("select")


    currentImageIndex++

    if(currentImageIndex>= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("select")
})                    


function alteraImagens(){

    images[currentImageIndex]
        .classList.remove("select")


    currentImageIndex++

    if(currentImageIndex>= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("select")
}
function alteraImagens2(){

    images[currentImageIndex]
        .classList.remove("select")


    currentImageIndex--

    if(currentImageIndex== 0)
        currentImageIndex = max-1

    images[currentImageIndex]
        .classList.add("select")
}

function start(){
    console.log("Start")
    setInterval(() =>{
        // Troca de Imagens
        alteraImagens()
    }, time)
}

window.addEventListener("load", start)