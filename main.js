let div =document.querySelector(".inpuT")
let input = document.querySelector(".input")
div.appendChild(input)
let img = document.querySelector(".img")
div.appendChild(img)

img.addEventListener("click",function(){
    input.classList.toggle("input2")
})