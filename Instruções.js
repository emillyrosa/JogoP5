function Instruções(){
  imageMode(CORNER);
  background(ins);
  textAlign(CENTER);
  textStyle(BOLD);
  
  fill('#ffffff');
  textFont(fonteAlien);
  textSize(32);
  text('como jogar', 260, 30);
  
  //Texto dos planetas
  fill('#9ea4b4');
  textSize(18);
  textFont('Monospace');
  noStroke();
  text('Saturno', 364,525);
  text('Júpiter', 164, 580);
  text('Vênus', 89, 436);
  text('Marte', 137, 354);
  text('Terra', 341, 360);
  text('Netuno', 210, 289);
  
  //Botão de voltar
  fill(250,50);
  noStroke();
  rect(20,12,36,36,10);
  image(i, 14,18,45,25);
  
  if (mouseX > 25 && mouseX < 18 + 50 && mouseY > 15 && mouseY < 15 + 30){
    image(i, 12, 15, 50, 30);
  }
  
  //Júpiter
  if (mouseX > 95 && mouseX < 95 + 135 && mouseY > 430 && mouseY < 430 + 135){
    image(j, 95, 430, 135, 135);
  }
  
  //Saturno
  if (mouseX > 288 && mouseX < 288 + 160 && mouseY > 410 && mouseY < 410 + 95){
    image(s, 288, 410, 160, 95);
  }
  
    //Terra
  if (mouseX > 307 && mouseX < 307 + 65 && mouseY > 280 && mouseY < 280 + 65){
    image(t, 307, 282, 65, 65);
  }
  
   //Marte
  if (mouseX > 120 && mouseX < 120 + 35 && mouseY > 308 && mouseY < 308 + 35){
    image(m, 120, 308, 35, 35);
  }
  
   //Netuno
  if (mouseX > 186 && mouseX < 186 + 45 && mouseY > 232 && mouseY < 232 + 45){
    image(n, 186, 232, 45, 45);
  }
  
   //Vênus
  if (mouseX > 65 && mouseX < 65 + 50 && mouseY > 370 && mouseY < 370 + 50){
    image(v, 65, 370, 50, 50);
  }
  
  //Texto de instruções
  fill('#9ea4b4');
  rect(75,60,350,165,15);
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("No astronauta explorador você deve ajudar o astronautinha skatista atravessar o espaço para chegar ao planeta escolhido e explorar as informações desse astro. Para isso você deve utilizar a tecla ESPAÇO do seu teclado.", 100, 88, 300);
}