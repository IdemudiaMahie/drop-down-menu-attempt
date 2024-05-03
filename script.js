const header = document.querySelector('header')
const nav = document.querySelector('nav')

header.addEventListener('mouseover', ()=>{
    nav.style.display = 'block'
    // nav.style.transition = 'display 5s 2s'
})

header.addEventListener('mouseout', ()=>{
    nav.style.display = 'none'
    // nav.style.transition = 'display 5s 2s'
})