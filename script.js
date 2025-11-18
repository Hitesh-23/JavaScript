let p = document.querySelector('p')

// p.addEventListener('click', function(){
//     p.style.color = 'red'
//     document.body.style.backgroundColor = 'black'
// })


// function dblclick(){
//     p.style.color = "yellow"
//     document.body.style.backgroundColor = 'black'
// }
// p.addEventListener('dblclick', dblclick)

// p.removeEventListener('dblclick', dblclick)


// let input = document.querySelector('input')


// input.addEventListener('input', function(ele){
//     if(ele.data !== null){      
//         console.log(ele.data)
//     }
// })

// let select = document.querySelector('select')
// let device = document.querySelector('#device')



// select.addEventListener('change', function(details){
//     console.log(details.target.value)
//     device.textContent = `${details.target.value} Device Selected`
// })


// let h1 = document.querySelector('h1')
// window.addEventListener('keydown', function(dets){
//     if(dets.key == " "){
//         h1.textContent = "Space"
//         console.log(dets)
//     }else{
//         h1.textContent = dets.key
//     }
// })


// let btn = document.querySelector('.btn')
// let inp = document.querySelector('#file-inp')

// btn.addEventListener('click', function(){
//     inp.click()
// })


// inp.addEventListener('change', function(dets){
//     let fileName = dets.target.files[0]

//     if(fileName){
//         btn.textContent = fileName.name
//     }
// })



let form = document.querySelector('form')
let input = document.querySelectorAll('input')
let main = document.querySelector(".main")

form.addEventListener('submit',function(dets){
    dets.preventDefault()

    let card = document.createElement('div')
    card.classList.add('card')


    let profile = document.createElement('div')
    profile.classList.add('profile')

    let img = document.createElement('img')
    img.setAttribute('src',input[0].value)

    let h3 = document.createElement('h3');
    h3.textContent = input[1].value
    let h5 = document.createElement('h5');
    h5.textContent = input[2].value
    let p = document.createElement('p');
    p.textContent = input[3].value
  
    

    profile.appendChild(img)
    card.appendChild(profile)

    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)


    main.appendChild(card)


    input.forEach(function(ele){
        if(ele.type != "submit"){
            ele.value = ''
        }
    })
})

