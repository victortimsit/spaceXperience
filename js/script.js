// Set canvas
const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

// Set particules
const particules = new Particules(

    '#fefefe', 
    500,
    0.3
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

// Create and draw particules
particules.create()


// Loop
const loop = () => {
    window.requestAnimationFrame(loop)

    clearCanvas()
    
    particules.update()
    particules.draw()
}

loop()
