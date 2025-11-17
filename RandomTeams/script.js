let arr =  [
    {
        team: "CSK",
        primary: "yellow",
        secondary: "blue"
    },
        {
        team: "RCB",
        primary: "red",
        secondary: "black"
    },
        {
        team: "MI",
        primary: "blue",
        secondary: "gold"
    },
        {
        team: "KKR",
        primary: "purple",
        secondary: "gold"
    },
        {
        team: "SSH",
        primary: "orange",
        secondary: "black"
    },
    {
        team: "PBKS",
        primary: "crimson",
        secondary: "silver"
    }

]


// Winner. team ko main me dalna hai
// secondary backgroundColor mein dalna hai
// pirmary ko body ke background me dalna hai


let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
let main = document.querySelector('.main')

btn.addEventListener('click', function(){
   let wnr =  arr[Math.floor(Math.random()*arr.length)]

   h1.textContent = wnr.team
   h1.style.backgroundColor = wnr.secondary;
   main.style.backgroundColor = wnr.primary
})