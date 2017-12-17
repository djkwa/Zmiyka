let snake;
function setup(){
    createCanvas(400, 400);
    snake = new Snake();
    textSize(32);
    textAlign(CENTER);
}
function keyPressed(e){
  if(snake.isDead && e.key == " "){
    snake.start();
    return false;
  }
    snake.move(e.key);
}
function draw(){
    background(150);
    noFill();
    stroke(0);
    rect(0,0,400,400);
    if(!snake.isDead){
      snake.update();
      snake.draw();
      frameRate(snake.cells.length +2);
      text('Score: '+ (snake.cells.length - 1), width - 100, 50);
    } else{
      text('Game over \n Score: '+ (snake.cells.length - 1) + '\n press space to continue', 200, 150);
    }
  }
