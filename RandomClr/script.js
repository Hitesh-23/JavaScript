let main = document.querySelector('.main');
let btn = document.querySelector('.main button')



btn.addEventListener('click', function(){
    let div = document.createElement('div');
    let rndm = Math.random()*101;
    let rndmLeft = Math.random()*101;
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    btn.style.position = 'relative';
    btn.style.zIndex = "10"
    div.style.height = "100px"
    div.style.width = '100px'
    div.style.position = "absolute"
    div.style.top = `${rndm}%`
    div.style.left = `${rndmLeft}%`
    main.appendChild(div)
})

// Random clicks Logic added..
let count = 0;
let maxCounts = 100;

let interval = setInterval(function(){
    btn.click();
    count++
    console.log(count)

    if(count >= maxCounts){
        clearInterval(interval)
    }
},100);

