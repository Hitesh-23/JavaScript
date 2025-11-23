let img = document.querySelector("img")

let body = document.querySelector('body')


body.addEventListener('mousemove',function(element){
    console.log(element)
    body.style.cursor = "none"

    img.style.position = "fixed";
    img.style.left = element.x + 'px'
    img.style.top = element.y + 'px'
    img.style.transform = "translate(-50% , -50%)"
})
console.log(body)