let dino;
let obstacles = [];

function setup() {
    createCanvas(1350, 450);
    dino = new Dino();
}

function keyPressed(){
    if(key == ' '){
        dino.jump();
    }
}

function draw(){
    if( random (1) < 0.01){
        obstacles.push(new Obstacle());
    }
    
    background(220);
    dino.show();
    dino.move();

    for( o of obstacles){
        o.move();
        o.show();
    }
}