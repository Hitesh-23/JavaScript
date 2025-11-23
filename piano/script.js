let audioFile1 = new Audio("./audio/24.mp3")
let audioFile2 = new Audio("./audio/29.mp3")
let audioFile3 = new Audio("./audio/36.mp3")
let audioFile4 = new Audio("./audio/41.mp3")
let audioFile5 = new Audio("./audio/48.mp3")
let audioFile6 = new Audio("./audio/53.mp3")
let audioFile7 = new Audio("./audio/60.mp3")
let audioFile8 = new Audio("./audio/64.mp3")
let audioFile9 = new Audio("./audio/65.mp3")
let audioFile10 = new Audio("./audio/69.mp3")
let audioFile11 = new Audio("./audio/72.mp3")
let audioFile12 = new Audio("./audio/77.mp3")
let audioFile13 = new Audio("./audio/79.mp3")
let audioFile14 = new Audio("./audio/84.mp3")
let audioFile15 = new Audio("./audio/96.mp3")

let body = document.querySelector('body')
let pianoBtn = document.querySelectorAll('.btn')


body.addEventListener('keydown', function(ele){
    if(ele.key== 'a'){
        audioFile1.play()
    }
        if(ele.key == 'b'){
        audioFile2.play()
    }

    switch (true) {
        case ele.key == 'c':
            audioFile3.play()
            break;
        case ele.key == 'd':
            audioFile4.play()
            break;
        case ele.key == 'e':
            audioFile5.play()
            break;
        case ele.key == 'f':
            audioFile6.play()
            break;
        case ele.key == 'g':
            audioFile7.play()
            break;
        case ele.key == 'h':
            audioFile8.play()
            break;
        case ele.key == 'i':
            audioFile9.play()
            break;
        case ele.key == 'j':
            audioFile10.play()
            break;
        case ele.key == 'k':
            audioFile11.play()
            break;
        case ele.key == 'l':
            audioFile12.play()
            break;
        case ele.key == 'm':
            audioFile13.play()
            break;        
        case ele.key == 'n':
            audioFile14.play()
            break;
        case ele.key == 'o':
            audioFile15.play()
            break;
        
    }


 

})