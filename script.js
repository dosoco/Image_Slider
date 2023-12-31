const nextEl = document.querySelector('.next')

const prevEl = document.querySelector('.prev')

const imgContainerEl = document.querySelector('.image-container')

const imgsEl = document.querySelectorAll('img')

let currentImg = 1

nextEl.addEventListener('click', () => {
    currentImg++
    updateImg()
})

prevEl.addEventListener('click', () => {
    currentImg--
    updateImg()
})

function updateImg() {
    if (currentImg > imgsEl.length) {
        currentImg = 1
    }
    imgContainerEl.style.transform = `translateX(-${(currentImg -1) * 500}px)`
}