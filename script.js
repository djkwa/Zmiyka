let snake;
let maxScore=0;
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
    background(43, 40, 130);
    noFill();
    stroke(0);
    rect(0,0,400,400);
    if(!snake.isDead){
      snake.update();
      snake.draw();
      frameRate(snake.cells.length +2);
      text('Скоре: '+ (snake.cells.length - 1), width - 100, 50);

    } else{
      snake.draw();
      text('Гаме овэр \n Скоре: '+ (snake.cells.length - 1) + '\n Прэс спэйс ту континуэ', 200, 150);
      let score = snake.cells.length-1;
      if (score>maxScore) {
        maxScore = score;
      }
      console.log(maxScore);
      text('Рекорд: ' + maxScore, 80, 50);
    }
  }
