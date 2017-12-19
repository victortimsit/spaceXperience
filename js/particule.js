class Particules {
    constructor(color, number, speed) {
        this.x
        this.y
        this.mouseX
        this.mouseY
        this.radius
        this.opacity
        this.color = color
        this.number = number
        this.speed = speed
        this.particules = []
        this.angle = 0

        window.addEventListener('mousemove', (event) => {
            for(this.particule of this.particules){
                
                if(this.mouseX > event.clientX){
                    this.particule.x += 0.5
                }
                else if(this.mouseX < event.clientX){
                    this.particule.x -= 0.5
                }
                else if(this.mouseY > event.clientY){
                    this.particule.y += 0.5
                }
                else if(this.mouseY < event.clientY){
                    this.particule.y -= 0.5
                }
                
            }
            this.mouseX = event.clientX
            this.mouseY = event.clientY
        })

    }
    create() {
        for(let i = 0 ; i < this.number ; i++) {
            this.radius = Math.random() * 2
            this.x = Math.random() * (($canvas.width * 1.2) - ($canvas.width * (-0.2))) + $canvas.width * (-0.2)
            this.y = Math.random() * (($canvas.height * 1.2) - ($canvas.height * (-0.2))) + $canvas.height * (-0.2)
            this.opacity = Math.random()

            this.particule = {
            x: this.x,
            y: this.y,
            radius: this.radius,
            color: this.color,
            opacity: this.opacity
            }

            this.particules.push(
                this.particule
            )
        }
    }
    update() {
        for(this.particule of this.particules) {

            // if(this.particule.x <= 0 - this.particule.radius * 2) {
            //     this.particule.x = $canvas.width + this.particule.radius * 2
            // }
            // else {   
            //     this.particule.x -= this.speed
            // }
        }
    }
    draw() {
        for(this.particule of this.particules) {

            context.beginPath()

            // context.shadowColor = 'blue'
            // context.shadowBlur = 1
            
            context.arc(this.particule.x, this.particule.y, this.particule.radius, 0, Math.PI * 2)
            
            context.fillStyle = this.particule.color
            context.globalAlpha = this.particule.opacity
            context.fill()
        }        
    }
}

