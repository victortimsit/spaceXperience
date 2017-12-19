const $planetEarth = document.querySelector(".planetEarth")
const $planetMars = document.querySelector(".planetMars")
const $planets = document.querySelectorAll(".planets")
let translateX = 0
let translateY = 0
let planetsPosition = {}
    planetsPosition.x = 0
    planetsPosition.y = 0
let isMouseMovingLeft = 0
let isMouseMovingUp = 0



const mouse = { x: 0, y: 0 }

console.log($planetEarth.style.top)
-
document.addEventListener('mousemove', (event) =>{
    if(mouse.x > event.clientX){
        planetsPosition.x = 20


    }
    if(mouse.x < event.clientX){
        planetsPosition.x = -20


    }
    if(mouse.y > event.clientY){
        planetsPosition.y = 20

    }
    if(mouse.y < event.clientY){
        planetsPosition.y = -20

    }
    mouse.x = event.clientX
    mouse.y = event.clientY


})




const loop = () =>{
        window.requestAnimationFrame(loop)
        translateX += (planetsPosition.x - translateX) * 0.005 
        translateY += (planetsPosition.y - translateY) * 0.005 
        for(const $planet of $planets){
            $planet.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
        }    

    }

loop()



const $canvas = document.querySelector("canvas")
const context = $canvas.getContext("2d")

context.beginPath()
context.moveTo(46,100)
context.lineTo(245,100)
context.strokeStyle = "white"
context.lineWidth = 15
context.stroke()


context.beginPath()
context.setLineDash([7, 3]);
context.moveTo(400,550)
context.quadraticCurveTo(650, 350, 850, 300)
context.strokeStyle = "white"
context.lineWidth = 2
context.stroke()

context.beginPath()
context.setLineDash([7, 3]);
context.moveTo(410,570)
context.quadraticCurveTo(650, 520, 860, 320)
context.strokeStyle = "white"
context.lineWidth = 2
context.stroke()

