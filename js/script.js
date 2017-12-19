// Set canvas
const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

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

    clearCanvas()
    
    particules.update()
    particules.draw()
}

// Animate cursor on mousemove
document.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
    
    cursorCoords.x = mouse.x
    cursorCoords.y = mouse.y

    $cursorContainer.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`
    $cursor.style.transform = `translateX(${cursorCoords.x}px) translateY(${cursorCoords.y}px)`  

    if(mouse.x >= window.innerWidth * 0.9){
        console.log(window.innerWidth)
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
