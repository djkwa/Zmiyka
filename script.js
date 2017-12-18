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
      text('Гаме овэр \n Скоре: '+ (snake.cells.length - 1), 200, 150);
      $('.video').css('display','block');
      $(".video").get(0).play();
      $('.video').removeClass('video');
        setTimeout(function(){
          $('.video-container').css('display','none');
      },7000);
    }
  }
  function newd(){
  location.reload();
}
