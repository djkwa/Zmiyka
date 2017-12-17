class Cell{
    constructor(){
        const x = floor(random(19));
        const y = floor(random(19));
        this.pos = createVector(x,y);
        this.edge = 20;
    }
    draw(){
        fill('red');
        stroke('yellow');
        rect(this.pos.x * this.edge, this.pos.y * this.edge, this.edge, this.edge);
    }
}

class Snake{
    constructor(){
        this.start();
    }
    start(){
        this.cells = [ new Cell() ];
        this.vel = createVector(1,0);
        this.food = new Cell();
        this.isDead = false;
    }
    update(){
        this.swap();
        this.checkEdgeCollision();
        this.checkFoodCollision();
        this.checkSelfCollision();
    }
    checkSelfCollision(){
      const first = this.cells[0];
      if( this.cells.filter( (cell, i) => {
        return i != 0 && first.pos.equals(cell.pos);
      }).length ){
        this.isDead = true;
      }
    }
    checkFoodCollision(){
    const first = this.cells[0];
    if (first.pos.equals(this.food.pos))
    {
    const newCell=new Cell();
    newCell.pos.set(first.pos).add(this.vel)
    this.cells.unshift(newCell);
    this.food = new Cell();
    }
  }
    checkEdgeCollision(){
        const first = this.cells[0];
        if( first.pos.x > 19 ){ first.pos.x = 0}
        if( first.pos.x < 0 ){ first.pos.x = 19}
        if( first.pos.y > 19 ){ first.pos.y = 0}
        if( first.pos.y < 0 ){ first.pos.y = 19}
    }
    move(key){
        switch(key){
            case 'ArrowLeft':
            if(this.vel.x==1){
            this.cells.reverse();
          }
                this.vel.set(-1,0);
                break;
            case 'ArrowRight':
            if(this.vel.x==-1){
            this.cells.reverse();
          }
                this.vel.set(1,0);
                break;
            case 'ArrowDown':
            if(this.vel.y==-1){
            this.cells.reverse();
          }
                this.vel.set(0,1);
                break;
            case 'ArrowUp':
            if(this.vel.y==1){
            this.cells.reverse();
          }
                this.vel.set(0,-1);
                break;
            default:
                break;
        }
    }
    swap(){
        const pos = this.cells[0].pos.copy();
        const last = this.cells.pop();
        last.pos.set(pos).add(this.vel);
        this.cells.unshift(last);
    }
    draw(){
        this.cells.forEach( cell => {
            cell.draw();
        })
        this.food.draw();
;    }
}
