class Dino {
    constructor() {
        this.r = 400;
        this.x = 50;
        this.y = height - 50;
        this.vy = 0;
        this.gravity = 2;
    }

    jump() {
        if (this.y == height - 50){
            this.vy = -35;
        }   
    }

    hits(obstacle){
        return collideRectRect(this.x, this.y, 50, 50, obstacle.x, obstacle.y, 50, 50);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - 50)
    }

    show () {
        fill('red');
        rect (this.x, this.y, 50, 50);
    }

}