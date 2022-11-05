let homebtn = document.querySelector('.homebtn')
let aboutbtn = document.querySelector('.about')
let skillbtn = document.querySelector('.skill')

homebtn.addEventListener('click', () => {
    homebtn.classList.toggle('stafilosfereba')
})

aboutbtn.addEventListener('click', () => {
    aboutbtn.classList.toggle('stafilosfereba')
    homebtn.classList.toggle('gatetreba')
})



function activate1(){
    document.querySelector('.home').classList.toggle('slideinhome2')
}

function activate2(){
    document.querySelector('.home').classList.toggle('slideinhome2')
    document.querySelector('.aboutme').classList.toggle('slideinhome2')
}

