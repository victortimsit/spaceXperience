// Set canvas
const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

// Set cursor elements
const $cursorContainer = document.querySelector('.cursorContainer')
const $cursor = document.querySelector('.cursor')
const cursorCoords = { x: 0, y: 0 }

// Set pages
const $pageOne = document.querySelector('.pageOne')
const $pageTwo = document.querySelector('.pageTwo')

// Set Slides
const $slides = document.querySelectorAll('.slides')

// Set planets of page two
const $earth = $pageTwo.querySelector('.planetEarth')
const $mars = $pageTwo.querySelector('.planetMars')

// Set dotted lines
const $topLine = $pageTwo.querySelector('.dotedTop')
const $bottomLine = $pageTwo.querySelector('.dotedBottom')

// Set animate elements
const $transitionElements = document.querySelectorAll('.slider-element')

// Set target animate elements
const $transitionElementsPageTwo = $pageTwo.querySelectorAll('.pageTwo .slider-element')

// Set timeline elements
const $scalingPoints = document.querySelectorAll('.scalingPoint')
const $hitBoxs = document.querySelectorAll('.hitBox')
const $scalingPointsClick = document.querySelectorAll('.scalingPointClick')
const $glowingPoints = document.querySelectorAll('.glowingPoint')

// Set page three text blocks
const $pageThreeTextBlocks = document.querySelectorAll('.pageThree .textBlocks')

// Set sounds
const $buttonSound = document.querySelector('.buttonSound')
const $transitionSound = document.querySelector('.transitionSound')
const $hoverSound = document.querySelector('.hoverSound')

// Set particules : create new Particules object
const particules = new Particules(
    '#fefefe',
    500,
    0
)

// Set mouse
const mouse = {
    x: 0,
    y: 0
}

// Set page counter
let pageNumber = 1

// Set transition Duration
const transitionDuration = 0

// Page 1
const $spaceXLogo = $pageOne.querySelector('.spaceXLogo')

// Set moovings elements depending on mousemove
const title = {
    originX: 50,
    originY: 50,
    x: 50,
    y: 50
}

const planetMars = {
    originX: 50,
    originY: 50,
    x: 50,
    y: 50
}

const planetEarth = {
    originX: 50,
    originY: 50,
    x: 50,
    y: 50
}

const dottedTop = {
    originX: 50,
    originY: 50,
    x: 50,
    y: 50
}

const dottedBottom = {
    originX: 50,
    originY: 50,
    x: 50,
    y: 50
}

// Rezise canvas function
const resizeCanvas = () => {
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
}

// Clear canvas
const clearCanvas = () => {
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

// Loop
const loop = () => {

    window.requestAnimationFrame(loop)
    clearCanvas()

    particules.draw()
}

// Called resize
resizeCanvas()

// Called resize when resize
window.addEventListener('resize', () => {

    resizeCanvas()
})

// Called loop
loop()

// Create and draw particules
particules.create()

// Animate elements on mousemove
document.addEventListener('mousemove', (event) => {

    // Title animation 
    title.x = title.originX + (event.clientX / window.innerWidth - 0.5) * 5
    title.y = title.originY + (event.clientY / window.innerWidth - 0.5) * 50

    // Planets animation
    // Mars
    planetMars.x = planetMars.originX + (event.clientX / window.innerWidth - 0.5) * 5
    planetMars.y = planetMars.originY + (event.clientY / window.innerWidth - 0.5) * 5

    // Earth
    planetEarth.x = planetEarth.originX + (event.clientX / window.innerWidth - 0.5) * 10
    planetEarth.y = planetEarth.originY + (event.clientY / window.innerWidth - 0.5) * 10

    // Dotted lines animation
    // Top line
    dottedTop.x = dottedTop.originX + (event.clientX / window.innerWidth - 0.5) * 8
    dottedTop.y = dottedTop.originY + (event.clientY / window.innerWidth - 0.5) * 10

    // Bottom line
    dottedBottom.x = dottedBottom.originX + (event.clientX / window.innerWidth - 0.5) * 8
    dottedBottom.y = dottedBottom.originY + (event.clientY / window.innerWidth - 0.5) * 10

    // Logo update
    $spaceXLogo.style.transform = `translateX(-${title.x}%) translateY(-${title.y}%)`

    if (pageNumber == 2) {

        // Mars update
        $mars.style.transform = `translateX(-${planetMars.x}%) translateY(-${planetMars.y}%)`

        // Earth update
        $earth.style.transform = `translateX(-${planetEarth.x}%) translateY(-${planetEarth.y}%)`

        // Dotted top update
        // Top
        $topLine.style.transform = `translateX(-${dottedTop.x}%) translateY(-${dottedTop.y}%) rotateZ(62deg)`

        // Bottom
        $bottomLine.style.transform = `translateX(${dottedBottom.x}%) translateY(${dottedBottom.y}%) rotateZ(62deg)`
    }

    // Set mouse
    mouse.x = event.clientX
    mouse.y = event.clientY

    // Set cursor coords
    cursorCoords.x = mouse.x
    cursorCoords.y = mouse.y

    // Update cursor position
    $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`
    $cursor.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`

    // Defined arrow zone to slide
    if (mouse.x >= window.innerWidth * 0.9) {

        $cursorContainer.style.background = '#fefefe'
        $cursorContainer.style.clipPath = 'polygon(29% 0, 75% 50%, 29% 100%, 26% 100%, 72% 50%, 26% 0)'
        $cursor.style.opacity = 0
    }

    else if (mouse.x <= window.innerWidth * 0.9) {

        $cursorContainer.style.background = 'none'
        $cursorContainer.style.clipPath = 'none'
        $cursor.style.opacity = 1
    }

    if (mouse.x <= window.innerWidth * 0.1 && pageNumber > 1) {

        $cursorContainer.style.background = '#fefefe'
        $cursorContainer.style.clipPath = 'polygon(71% 0, 25% 50%, 71% 100%, 74% 100%, 28% 50%, 74% 0)'
        $cursor.style.opacity = 0
    }
})

// Moving to the second page at mousedown
$spaceXLogo.addEventListener('mousedown', (event) => {

    $transitionSound.play()
    $transitionSound.currentTime = 0
    pageNumber++

    $slides[pageNumber - 1].classList.remove('right')
    $slides[pageNumber - 2].classList.add('left')
})

// Update page counter and transitioning on mousedown
document.addEventListener('mousedown', (event) => {

    if (event.clientX >= window.innerWidth * 0.9 && pageNumber < $slides.length) {

        $transitionSound.play()
        $transitionSound.currentTime = 0
        pageNumber++
    }

    if (event.clientX <= window.innerWidth * 0.1 && pageNumber > 1) {

        pageNumber--
        $transitionSound.play()
        $transitionSound.currentTime = 0
    }

    if (event.clientX >= window.innerWidth * 0.9) {

        $slides[pageNumber - 1].classList.remove('right')
        $slides[pageNumber - 2].classList.add('left')

    }
    if (event.clientX <= window.innerWidth * 0.1) {

        if (pageNumber != 0) {

            $slides[pageNumber - 1].classList.remove('left')
            $slides[pageNumber].classList.add('right')
        }
    }
})

// // Update page counter and transitioning on keydown
document.addEventListener('keydown', function (event) {

    if (event.keyCode === 39 && pageNumber < $slides.length) {

        $transitionSound.play()
        $transitionSound.currentTime = 0
        pageNumber++
    }

    if (event.keyCode === 37 && pageNumber > 1) {

        $transitionSound.play()
        $transitionSound.currentTime = 0
        pageNumber--
    }

    if (event.keyCode === 39) {

        if (pageNumber <= $slides.length)

            $slides[pageNumber - 1].classList.remove('right')
        $slides[pageNumber - 2].classList.add('left')
    }
    if (event.keyCode === 37) {

        if (pageNumber >= 1) {

            $slides[pageNumber - 1].classList.remove('left')
            $slides[pageNumber].classList.add('right')
        }
    }
});

// Animate cursor on mousedown and mouse up
document.addEventListener('mousedown', () => {

    $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px) scale(0.2)`

    document.addEventListener('mouseup', () => {

        $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px) scale(1)`
    })
})

// Set default elements
$pageThreeTextBlocks[0].style.opacity = 1
$scalingPointsClick[0].style.transform = 'scale(3)'
$glowingPoints[1].style.animationName = 'timeLine-animation'

// Page 3
// timeLine Hover and click
for (let i = 0; i < $hitBoxs.length; i++) {
    // hover in
    $hitBoxs[i].addEventListener('mouseenter', (event) => {

        $hoverSound.play()
        $hoverSound.currentTime = 0
        $scalingPoints[i].style.transform = 'scale(2)'
    })
    // Hover out, init of key points scale
    $hitBoxs[i].addEventListener('mouseleave', (event) => {

        $scalingPoints[i].style.transform = 'scale(1)'
    })

    // Mouse down on key points hit box
    $hitBoxs[i].addEventListener('mousedown', (event) => {

        $buttonSound.play()
        $buttonSound.currentTime = 0

        $scalingPoints[i].style.transform = 'scale(1)'

        for (const $pageThreeTextBlock of $pageThreeTextBlocks) {

            $pageThreeTextBlock.style.opacity = 0
        }
        for (const $scalingPointClick of $scalingPointsClick) {

            $scalingPointClick.style.transform = 'scale(1)'
        }
        for (const $glowingPoint of $glowingPoints) {

            $glowingPoint.style.animationName = 'none'
        }

        $scalingPointsClick[i].style.transform = 'scale(3)'
        $pageThreeTextBlocks[i].style.opacity = 1

        if (i < $hitBoxs.length - 1) {

            $glowingPoints[i + 1].style.animationName = 'timeLine-animation'
        }
    })
}
