const boxSpin = () => document.querySelector('.box').classList.add('spin')
const plainAnime = () => document.querySelector('.plain').classList.add('plain-anime')


window.onload = function() {
    // ```Dot Animation```
	document.querySelector('.fdot').style.backgroundColor = '#f1c40f'
    window.setTimeout(function () {
        document.querySelector('.sdot').style.backgroundColor = '#e67e22'
    },200)
    window.setTimeout(function () {
        document.querySelector('.tdot').style.backgroundColor = '#3498db'
    },400)
    window.setTimeout(function () {
        document.querySelector('.dots').style.display = 'none'
    },600)

    // ```Roll animation```
    window.setTimeout(function () {
        plainAnime()
        window.setTimeout(function () {
            boxSpin()
        }, 1000)
    }, 1100)
}

document.querySelector('.box').addEventListener('transitionend', function() {
    document.querySelector('.front img').style.boxShadow = ' 12px 13px 23px -9px black'
    document.querySelector('.front img').style.transition = 'box-shadow 0.5s'
    document.querySelector('.name').style.display = 'block'
    document.querySelector('.name').style.animation = 'typing 2.5s steps(30, end), cursor .75s step-end infinite'
    document.querySelector('.name').addEventListener('animationend', function() {
        document.querySelector('.nameplate h3').style.display = 'block'
    })
})

let aman = document.querySelector('.front img ')
let popper = document.querySelector('.popper')

aman.addEventListener('mouseover', () => {
    popper.style.display = 'block'

})

aman.addEventListener('mouseout', () => {
    popper.style.display = 'none'
})

const projectImage = document.querySelectorAll('.img-container')
const projectCard = document.querySelectorAll('.projects-card')
let imgScrollId
let imgScrollTopId

projectCard.forEach((elem) => {
	elem.addEventListener('mouseover', () => {
		const imgScroll = () => {
			projectImage.forEach((i) => {
				i.scrollBy({
					top: 100,
					left: 0,
					behavior: 'smooth',
				})
			})
		}

		imgScrollId = setInterval(imgScroll, 1000)
		imgScrollTopId = setInterval(() => {
			projectImage.forEach((i2) => {
				i2.scrollTop = 0
			})
		}, 10000)
	})
})

projectCard.foreach((elem) => {
	elem.addEventListener('mouseout', () => {
		clearInterval(imgScrollId)
		clearInterval(imgScrollTopId)
		projectImage.forEach((i2) => {
			i2.scrollTop = 0
		})
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

