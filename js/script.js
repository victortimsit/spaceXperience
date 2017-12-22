// Set canvas
const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

// Set cursor elements
const $cursorContainer = document.querySelector('.cursorContainer')
const $cursor = document.querySelector('.cursor')
const cursorCoords = { x:0 , y:0 }

// Set pages
const $pageOne = document.querySelector('.pageOne')
const $pageTwo = document.querySelector('.pageTwo')

// Slides
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

// Set particules
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

let pageNumber = 1

// Set transition Duration
const transitionDuration = 0

let transitioning = false

// Page 1
const $spaceXLogo = $pageOne.querySelector('.spaceXLogo')

// Rezise canvas function
const resizeCanvas = () => {
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight 
}

const clearCanvas = () => {
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}
// Called resize
resizeCanvas()

// Called resize when resize
window.addEventListener('resize', () => {

    resizeCanvas()
})

// Create and draw particules
particules.create()

// Loop
const loop = () => {
    window.requestAnimationFrame(loop)
    
    particules.update()
    clearCanvas()
    
    particules.draw()

    // if(transitioning){
    //     for(const $transitionElement of $transitionElementsPageTwo){
            

    //         $transitionElement.style.transition = 'transform 1s, opacity 1s'
    //     }
    // }

    // if(!transitioning){
    //     for(const $transitionElement of $transitionElementsPageTwo){
            

    //         $transitionElement.style.transition = 'none'
    //     }
    // }   
}

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

// Animate cursor on mousemove
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

    if(pageNumber == 2 && !transitioning){


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

    $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`
    $cursor.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`  

    // Defined arrow zone to slide
    if(mouse.x >= window.innerWidth * 0.9){
      
        $cursorContainer.style.background = '#fefefe'
        $cursorContainer.style.clipPath = 'polygon(29% 0, 75% 50%, 29% 100%, 26% 100%, 72% 50%, 26% 0)'
        $cursor.style.opacity = 0
    }
    else if(mouse.x <= window.innerWidth * 0.9){
        $cursorContainer.style.background = 'none'
        $cursorContainer.style.clipPath = 'none'
        $cursor.style.opacity = 1
    }
    
    if(mouse.x <= window.innerWidth * 0.1 && pageNumber > 1){
        $cursorContainer.style.background = '#fefefe'
        $cursorContainer.style.clipPath = 'polygon(71% 0, 25% 50%, 71% 100%, 74% 100%, 28% 50%, 74% 0)'
        $cursor.style.opacity = 0
    }
})

$spaceXLogo.addEventListener('mousedown', (event) => {
    $transitionSound.play()
    $transitionSound.currentTime = 0
    pageNumber++
    transitioning = true

        $slides[pageNumber - 1].classList.remove('right')
        $slides[pageNumber - 2].classList.add('left')

        setTimeout(() => {
            transitioning = false
        }, transitionDuration)
})

// Count page number and update transitioning
document.addEventListener('mousedown', (event) => {
    if(event.clientX >= window.innerWidth * 0.9 && pageNumber < $slides.length){
        $transitionSound.play()
        $transitionSound.currentTime = 0
        pageNumber++
        transitioning = true
        console.log(transitioning)

        setTimeout(() => {
            transitioning = false
            console.log(transitioning)
        }, transitionDuration)
    }
    if(event.clientX <= window.innerWidth * 0.1 && pageNumber > 1){
        pageNumber--
        $transitionSound.play()
        $transitionSound.currentTime = 0
        transitioning = true

        setTimeout(() => {
            transitioning = false
            console.log(transitioning)
        }, transitionDuration)
    }

})

// Animate cursor on mousedown and mouse up
document.addEventListener('mousedown', () => {
    $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px) scale(0.2)`

    document.addEventListener('mouseup', () => {
        $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px) scale(1)`
    })
})


// window.addEventListener('mousedown', () => {
//     $pageTwo.classList.add('active')
//     $pageOne.classList.add('active')
// })
loop()

$pageThreeTextBlocks[0].style.opacity = 1
$scalingPointsClick[0].style.transform = 'scale(3)'
$glowingPoints[1].style.animationName = 'timeLine-animation'

// Page 3
// timeLine Hover and click
for(let i = 0 ; i < $hitBoxs.length ; i++){
    // hover in
    $hitBoxs[i].addEventListener('mouseenter', (event) =>{
        $hoverSound.play()
        $hoverSound.currentTime = 0
        $scalingPoints[i].style.transform = 'scale(2)'

        
    })
    // hover out
    $hitBoxs[i].addEventListener('mouseleave', (event) =>{
    $scalingPoints[i].style.transform = 'scale(1)'
    })

    $hitBoxs[i].addEventListener('mousedown', (event) =>{
        $buttonSound.play()
        $buttonSound.currentTime = 0

        $scalingPoints[i].style.transform = 'scale(1)'
        for(const $pageThreeTextBlock of $pageThreeTextBlocks){
            $pageThreeTextBlock.style.opacity = 0
        }
        for(const $scalingPointClick of $scalingPointsClick){
            $scalingPointClick.style.transform = 'scale(1)'
        }
        for(const $glowingPoint of $glowingPoints){
            $glowingPoint.style.animationName = 'none'
        }

        $scalingPointsClick[i].style.transform = 'scale(3)'
        $pageThreeTextBlocks[i].style.opacity = 1
        
        if(i < $hitBoxs.length - 1){

            $glowingPoints[i + 1].style.animationName = 'timeLine-animation'
        }

    })

}

// Slide transition
document.addEventListener('mousedown', (event) => {
    if(event.clientX >= window.innerWidth * 0.9)
    {
        // setTimeout(() => {

            $slides[pageNumber - 1].classList.remove('right')
            $slides[pageNumber - 2].classList.add('left')
        // }, 10)
        
    }
    if(event.clientX <= window.innerWidth * 0.1){

        if(pageNumber != 0){

            // setTimeout(() => {
    
                $slides[pageNumber - 1].classList.remove('left')
                $slides[pageNumber].classList.add('right')
            // }, 10)
        }

    }
    console.log(pageNumber)
})

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 39 && pageNumber < $slides.length) { 
        $transitionSound.play()
        $transitionSound.currentTime = 0
        pageNumber++
        transitioning = true
        console.log(transitioning)

        setTimeout(() => {
            transitioning = false
            console.log(transitioning)
        }, transitionDuration)
    
    }
    if (event.keyCode === 37 && pageNumber > 1) { 
        $transitionSound.play()
        $transitionSound.currentTime = 0
        pageNumber--
        transitioning = true

        setTimeout(() => {
            transitioning = false
            console.log(transitioning)
        }, transitionDuration)
    }

});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 39) { 
        if(pageNumber <= $slides.length)    
            $slides[pageNumber - 1].classList.remove('right')
            $slides[pageNumber - 2].classList.add('left')
    }
    if (event.keyCode === 37) { 
        if(pageNumber >= 1){
            $slides[pageNumber - 1].classList.remove('left')
            $slides[pageNumber].classList.add('right')
        }
    }

});