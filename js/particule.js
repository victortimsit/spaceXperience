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
        this.xTemp = 0
        this.yTemp = 0
        this.easeX = 0
        this.easeY = 0

        window.addEventListener('mousemove', (event) => {

            // Active to easing
            // this.easeX += (event.clientX - this.easeX) / this.speed
            // this.easeY += (event.clientY - this.easeY) / this.speed

            for (const particule of this.particules) {

                // Active to easing
                // particule.x = particule.originX - (this.easeX - particule.x) / 50 
                // particule.y = particule.originY - (this.easeY - particule.y) / 50 
                particule.x = particule.originX - (event.clientX / window.innerWidth - 0.5) * 50
                particule.y = particule.originY - (event.clientY / window.innerHeight - 0.5) * 50
            }
        })

    }
    create() {
        for (let i = 0; i < this.number; i++) {

            this.radius = Math.random() * 2
            this.x = Math.random() * (($canvas.width * 1.2) - ($canvas.width * (-0.2))) + $canvas.width * (-0.2)
            this.y = Math.random() * (($canvas.height * 1.2) - ($canvas.height * (-0.2))) + $canvas.height * (-0.2)
            this.opacity = Math.random()

            this.particule = {

                originX: this.x,
                originY: this.y,
                x: this.x,
                y: this.y,
                radius: this.radius,
                color: this.color,
                opacity: this.opacity
            }

            this.particules.push(this.particule)
        }
    }
    draw() {
        for (this.particule of this.particules) {

            context.beginPath()

            context.arc(this.particule.x, this.particule.y, this.particule.radius, 0, Math.PI * 2)

            context.fillStyle = this.particule.color
            context.globalAlpha = this.particule.opacity
            context.fill()
        }
    }
}

