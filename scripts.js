let images = document.querySelectorAll('.user-photo'),
    text = document.querySelectorAll('.text'),
    index = 0,
    max = images.length


function nextTestimonial() {
    images[index].classList.remove("active")
    text[index].classList.remove("active")

    index++

    if(index >= max) {
        index = 0
    }

    images[index].classList.add("active")
    text[index].classList.add("active")
}

function previousTestimonial() {
    images[index].classList.remove("active")
    text[index].classList.remove("active")

    index--

    if(index < 0) {
        index = max - 1
    }

    images[index].classList.add("active")
    text[index].classList.add("active")
}