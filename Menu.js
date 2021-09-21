var altura = 40;
var largura = 150;

function Menu(){
  imageMode(CORNER);
  background(0);
  image(xia, -200, 0, 1000, 648);
  image(gala, -200, -500, 1000, 800);
  textAlign(CENTER);
  textSize(26);
  textStyle(BOLD);
  
  fill('#ffffff');
  textFont(fonteAlien);
  textSize(36);
  text('astronauta', 215, 250);
  fill('#ff8000');
  text('explorador', 250, 290);
  
  //Retângulo Iniciar
  if (mouseX > 5 && mouseX < 5 + largura && mouseY > 332 && mouseY < 332 + altura){
    noStroke();
    fill(0);
    rectMode(CORNER);
    rect(5, 332, largura, altura,10);
  }
  
  //Texto Iniciar
  fill(240);
  noStroke();
  textSize(25);
  textFont('Monospace');
  text('Iniciar', 78, 360);
  
  //Retângulo das instruções
  if (mouseX > 145 && mouseX < 145 + largura && mouseY > 412 && mouseY < 412 + altura){
    noStroke();
    fill(0);
    rectMode(CORNER);
    rect(145, 412, largura, altura,10)
  }
  
  //Texto das Instruções
  fill(240);
  noStroke();
  text('Instruções', 220,440); 
  
  //Retângulo dos créditos
  if (mouseX > 287 && mouseX < 287 + largura && mouseY > 512 && mouseY < 512 + altura){
    noStroke();
    fill(0);
    rectMode(CORNER);
    rect(287, 512, largura, altura,10)
  }
  
  //Texto dos créditos
  fill(240);
  noStroke();
  text('Créditos', 365,540); 
  
  //Rotação dos planetas
  angleMode(DEGREES);
  translate(162, 65);
  rotate(angle);
  imageMode(CENTER);
  image(sun, 0, 0, 110, 110);
  
  translate(100, 90);
  rotate(angle2);
  image(t, 0, 0, 95, 95);
  
  angle++;
  angle2 += 0.5;
}

