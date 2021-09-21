function Créditos(){
  imageMode(CORNER);
  background(0);
  
  image(eu,290, 90, 130, 140);
  
  //Texto de apresentação
  textFont('Helvetica');
  fill('#ffffff');
  textSize(16);
  textAlign(CENTER,CENTER);
  text('PROGRAMADORA: \nEmilly Rosa', 7, 105, 300);
  
  textSize(13);
  textAlign(LEFT);
  text('- Técnica em eletrônica pela Escola Técnica Estadual de São Paulo (ETEC).\n- Graduanda em Ciência e Tecnologia \npela Universidade Federal do Rio Grande do Norte (UFRN).', 15, 155, 290);
  
  //Botão de voltar
  fill(250,50);
  noStroke();
  rect(20,12,36,36,10);
  image(i, 14,18,45,25);
  
  if (mouseX > 25 && mouseX < 18 + 50 && mouseY > 15 && mouseY < 15 + 30){
    image(i, 12, 15, 50, 30);
  } 
}