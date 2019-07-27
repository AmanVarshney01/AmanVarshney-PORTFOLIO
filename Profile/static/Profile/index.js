
const boxSpin = () => document.querySelector('.box').classList.add('spin')

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
        document.querySelector("nav").style.transition = "top 0.2s";
    } else {
        document.querySelector("nav").style.top = "-37px";
        document.querySelector("nav").style.transition = "top 0.2s";
    }

    prevScrollpos = currentScrollPos;

    if (window.scrollY > 1315) {
        boxSpin()
    }
}

const contactCard = document.querySelector('.contact-card')

document.querySelector('.contact-button').addEventListener('click', () => {
    if (contactCard.style.display === 'block') {
        contactCard.style.display = 'none'
    } else {
        contactCard.style.display = 'block'
    }
})

document.querySelector('.box').addEventListener('transitionend', function() {
    document.querySelectorAll('.side').forEach(eachSide => {
        eachSide.style.border = 'none'
        eachSide.style.backgroundColor = 'transparent'
    })
    document.querySelector('.front img').style.boxShadow = '1px 5px 8px -4px black'
    document.querySelector('.front img').style.border = '2px solid rgba(234, 181, 67, 0.76)'
    document.querySelector('.front img').style.transition = 'box-shadow 0.5s'
})

let aman = document.querySelector('.front img ')
let amanPopper = document.querySelector('.popper')

amanPopper.style.display = 'none'

aman.addEventListener('mouseover', () => {
    amanPopper.style.display = 'block'
})

aman.addEventListener('mouseout', () => {
    amanPopper.style.display = 'none'
})

const projectImage = document.querySelectorAll('.img-container')
// const projectCard = document.querySelector('.projects-card')
let imgScrollId
let imgScrollTopId

projectImage.forEach( eachProjectImage => {
    eachProjectImage.addEventListener('mouseover', () => {
        const imgScroll = () => {
            eachProjectImage.scrollBy({
                top: 100,
                left: 0,
                behavior: 'smooth',
            })
        }

        imgScrollId = setInterval(imgScroll, 1000)
        imgScrollTopId = setInterval(() => {
            eachProjectImage.scrollTop = 0
        }, 10000)
    })

    eachProjectImage.addEventListener('mouseout', () => {
        clearInterval(imgScrollId)
        clearInterval(imgScrollTopId)
        eachProjectImage.scrollTop = 0
    })
})


let moreInfoButton = document.querySelector('.moreinfo-button')
let projectPanel = document.querySelector('.projects-panel')

const moreInfoClick = () => {
	if(projectPanel.style.display === 'grid') {
		projectPanel.style.display = 'none'
	} else {
		projectPanel.style.display = 'grid'
	}
}
moreInfoButton.addEventListener('click', moreInfoClick)

const projectGroup = document.querySelector('.project-group')
const projectNavPrev = document.querySelector('.project-nav-prev')
const projectNavNext = document.querySelector('.project-nav-next')

projectNavNext.addEventListener('click', () => {
    projectGroup.scrollBy({
        top: 0,
        left: 350,
        behavior: 'smooth',
    })
})

projectNavPrev.addEventListener('click', () => {
    projectGroup.scrollBy({
        top: 0,
        left: -350,
        behavior: 'smooth',
    })
})

if (projectGroup.children.length <= 3) {
    projectGroup.style.justifyContent = 'space-evenly'
    document.querySelector(".project-nav").style.display = 'none'
} else {
    projectGroup.style.justifyContent = 'none'
}

if (projectGroup.children.length >= 2 && window.matchMedia("(max-width: 728px)").matches) {
    document.querySelector(".project-nav").style.display = 'flex'
}