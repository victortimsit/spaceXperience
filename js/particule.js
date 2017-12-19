class Particules {
    constructor(color, number, speed) {
        this.x
        this.y
        this.radius
        this.opacity
        this.color = color
        this.number = number
        this.speed = speed
        this.particules = []
        this.angle = 0

    }
    create() {
        for(let i = 0 ; i < this.number ; i++) {
            this.radius = Math.random() * 2
            this.x = (Math.floor(Math.random() * $canvas.width)) - (this.radius * 2)
            this.y = (Math.floor(Math.random() * $canvas.height)) - (this.radius * 2)
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

            if(this.particule.x <= 0 - this.particule.radius * 2) {
                this.particule.x = $canvas.width + this.particule.radius * 2
            }
            else {   
                this.particule.x -= this.speed
            }
        }
    }
    draw() {
        for(this.particule of this.particules) {

            context.beginPath()

            context.shadowColor = 'blue'
            context.shadowBlur = 1
            
            context.arc(this.particule.x, this.particule.y, this.particule.radius, 0, Math.PI * 2)
            
            context.fillStyle = this.particule.color
            context.globalAlpha = this.particule.opacity
            context.fill()
        }        
    }
}

