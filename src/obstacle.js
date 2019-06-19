class Obstacle {
    constructor (){
        this.r = 400;
        this.x = width;
        this.y = height - 50;
    }

    move(){
        this.x -= 5;
    }

    show(){
        rect (this.x, this.y, 50, 50);
    }
}