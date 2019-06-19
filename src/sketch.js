let dino;
let obstacles = [];


function preload(){
    soundClasifier = ml5.soundClasifier()
}

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
    if( random (1) < 0.005){
        obstacles.push(new Obstacle());
    }
    
    background(220);

    for( o of obstacles){
        o.move();
        o.show();

        if(dino.hits(o)){
            alert('Game Over');
            noLoop();
        }
    }

    dino.show();
    dino.move();
}