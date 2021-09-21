var astronaut;

var aliens = [];

var timer = 15;

var Sound;

function keyPressed() { 
  if(key == ' ' ){
    astronaut.saltar();  
    pulo.play();
  }
}
  
function Iniciar() {
  if (frameCount % 60 == 0 && timer > 0) { 
    timer--;
  }
  if(timer==0){
    textAlign(CENTER);
    textSize(50);
    textStyle(BOLD);
    fill('#01ff02');
    text('WIN',230,230);
    tela = 2;
  }
  
  imageMode(CORNER);
  background(funI);
  
  //Botão de voltar ao início
  fill(250,50);
  noStroke();
  rect(20,12,36,36,10);
  image(i, 14,18,45,25);
  
  //Imagem de voltar
  if (mouseX > 12 && mouseX < 12 + 50 && mouseY > 15 && mouseY < 15 + 30){
    image(i, 12, 15, 50, 30);
  }  

  //Início do jogo
  if(random(1) < 0.005){
     aliens.push(new Aliens());
  }
  
  for(var a of aliens){
    a.mover();
    a.show();
    if(astronaut.hits(a)){
      aliens.splice(aliens.indexOf(a), 1);
      textAlign(CENTER);
      textSize(50);
      textStyle(BOLD);
      fill('#01ff02');
      text('GAME OVER',230,230);
      gameOver.play();
      timer = 15;
      noLoop();
      
      //Informações do botão de retonar o jogo
      stroke(0);
      fill(250,50);
      rect(198,254,50,50,15);
      image(r,199,253,50,50);
    }
  }
  astronaut.show();
  astronaut.mover();

  //Retângulo para o bloqueio do som
  noStroke();
  fill(250,50);
  rect(400,12,36,36,10)
}

class Astronaut{
  constructor(){
    this.r = 75;
    this.x = 30;
    this.y = height - 150;
    this.vy = 0;
    this.gravity = 2;  
  }
  
  saltar(){
    if(this.y == height - this.r){
      this.vy = -30;
    }
    this.vy = -30;
  }
  
  hits(aliens){
    return collideRectRect(this.x, this.y, this.r,this.r, aliens.x, aliens.y, aliens.r, this.x/2, this.y/2, this.r);
  }
  
  mover() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, (height - 110));
  }
  
  show() {
    image(a,this.x, this.y, 80, 110);
    }
  }

class Aliens{
  constructor(){
    this.r = 50;
    this.x = width;
    this.y = height - this.r;
  }
  
  mover(){
    this.x -= 8;
  }
  
  reiniciar(){
    this.r = 50;
    this.x = width;
    this.y = height - this.r;
  }
  
  show(){
    image(al, this.x, this.y, this.r, this.r);
  }
}
