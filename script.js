let snake;
function setup(){
    createCanvas(400, 400);
    snake = new Snake();
    textSize(32);
    textAlign(CENTER);
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
    frameRate(snake.cells.length +2);
    text('Score: '+ (snake.cells.length - 1), width - 100, 50);
  }
