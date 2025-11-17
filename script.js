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

form.addEventListener('submit',function(dets){
    dets.preventDefault()
})
 