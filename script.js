let snake;
function setup(){
    createCanvas(400, 400);
    snake = new Snake();
    frameRate(5);
}
function keyPressed(e){
    snake.move(e.key);
}
function draw(){
    background(150);
    noFill();
    stroke(0);
    rect(0,0,400,400);
    snake.update();
    snake.draw();
}


