let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let slide = document.querySelector('.slide')
let dot = document.querySelectorAll('.dot-child')
let i = 0

dot[i].className += ' active'
next.addEventListener('click', () => {
    slide.appendChild(slide.children[0])
    dot[i].className = 'dot-child'
    i += 1
    if (i === dot.length) {
        i = 0
    }
    dot[i].className += ' active'
    console.log(i);
    // i += 1
    // if(i === dot.length) {
    //     i = 0
    // }
    // console.log(i);
})
prev.addEventListener('click', () => {
    slide.prepend(slide.children[slide.children.length - 1])
    // dot.prepend(dot.children[dot.length - 1])
})
