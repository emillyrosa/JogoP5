function mouseClicked() {
  //Botões do menu
  if(tela==0){
    if (mouseX > 5 && mouseX < 5 + 150 && mouseY > 332 && mouseY < 332 + 40){
    tela = 1;
    }    
    if (mouseX > 145 && mouseX < 145 + 150 && mouseY > 412 && mouseY < 412 + 40){
    tela = 2;
    }
    if (mouseX > 287 && mouseX < 287 + 150 && mouseY > 512 && mouseY < 512 + 40){
    tela = 3;
    }
  }
  
  //Botão para voltar ao menu
  if(tela == 1 || tela == 2 || tela == 3){
    if (mouseX > 25 && mouseX < 18 + 50 && mouseY > 15 && mouseY < 15 + 30){
      loop();
      tela = 0;
    }
  }
  
  //Botão retornar o jogo
  if(tela==1){
    if (mouseX > 198 && mouseX < 198 + 50 && mouseY > 254 && mouseY < 254 + 50){
      loop();
      Iniciar();
    }
  }

  //Botões das instruções (planetas)
  if(tela==2){
    if(mouseX > 288 && mouseX < 288 + 160 && mouseY > 410 && mouseY < 410 + 95){
      tela = 1;
    }
    if(mouseX > 95 && mouseX < 95 + 135 && mouseY > 430 && mouseY < 430 + 135){
      tela = 1;
    }
  }
}


