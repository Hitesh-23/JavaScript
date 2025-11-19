let count = 0;

let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let inner = document.querySelector('.inner')


btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'

    let num = 50 + Math.floor(Math.random()*50);
    console.log("the file will be downloaded in", num/10, "sec")

    let int = setInterval(function(){
        count++
        h2.textContent = count+'%';
        inner.style.width = count+"%"
    }, num)

    setTimeout(function(){
        clearInterval(int);
        btn.textContent = "Downloaded"
        btn.style.opacity = 0.5
    }, num*100)
})

