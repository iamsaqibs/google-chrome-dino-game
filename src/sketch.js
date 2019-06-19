let dino;
let obstacles = [];
let soundClassifier;


function preload(){
    const options = { probabilityThreshold: 0.95 };
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup() {
    createCanvas(1350, 450);
    dino = new Dino();
    soundClassifier.classify(gotCommand);
}

function gotCommand (error, results){
    if(error){
        console.error(error);
    }

    console.log(results[0].label, results[0].confidence);

    if (results[0].label == 'up'){
        dino.jump();
    }
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