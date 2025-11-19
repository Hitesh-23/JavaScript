let btn = document.querySelector('button')
let main = document.querySelector('main')

let arr = ['hey I am hitesh', "Shreyians is Best", "Sahil is handsome", "Rahul sir is good", "js is love", "Keep Working guys...."]

btn.addEventListener("click",function(){
    let h1 = document.createElement('h1')

    let x = Math.random()*80
    let y = Math.random()*80
    let rot = Math.random()*361
    let scl = Math.random()*3
    let a = Math.floor(Math.random()*arr.length)

    h1.textContent = arr[a]

    h1.style.position = "absolute"

    h1.style.left = x+"%"
    h1.style.top = y+"%"
    h1.style.rotate = rot+"deg"
    h1.style.scale = scl

    main.appendChild(h1)

})