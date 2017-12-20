// Set canvas
const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

// Set cursor elements
const $cursorContainer = document.querySelector('.cursorContainer')
const $cursor = document.querySelector('.cursor')
const cursorCoords = { x:0 , y:0 }

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

// Set title
const $spaceXLogo = document.querySelector('.spaceXLogo')

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
}

const title = { 
    originX: 50,
    originY: 50,
    x: 50, 
    y: 50 }
// Animate cursor on mousemove
document.addEventListener('mousemove', (event) => {

    // Title animation 
    title.x = title.originX + (event.clientX / window.innerWidth - 0.5) * 5
    title.y = title.originY + (event.clientY / window.innerWidth - 0.5) * 50
    
    $spaceXLogo.style.transform = `translateX(-${title.x}%) translateY(-${title.y}%)`

    mouse.x = event.clientX
    mouse.y = event.clientY
    
    cursorCoords.x = mouse.x
    cursorCoords.y = mouse.y

    $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`
    $cursor.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`  

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
    
    if(mouse.x <= window.innerWidth * 0.1){
        $cursorContainer.style.background = '#fefefe'
        $cursorContainer.style.clipPath = 'polygon(71% 0, 25% 50%, 71% 100%, 74% 100%, 28% 50%, 74% 0)'
        $cursor.style.opacity = 0
    }
})

// Animate cursor on mousedown and mouse up
document.addEventListener('mousedown', () => {
    $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px) scale(0.2)`

    document.addEventListener('mouseup', () => {
        $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px) scale(1)`
    })
})

loop()
