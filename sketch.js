var tela = 0;

//Imagens
var funI;
var a;
var al;
var r;
var i;
var ins;
var j;
var s;
var t;
var m;
var n;
var v;
var sun;
var ti;
var eu;
var gala;
var xia;
var sound;
var noSound;

//Sons
var pulo;
var gameOver;

//Fonte
var fonteAlien;

//Angulos
var angle = 0;
var angle2 = 0;

function setup(){
  createCanvas(450,600);
  
  pulo = loadSound("Assets/Pulo.mp3");
  gameOver = loadSound("Assets/GameOver.mp3");
  
  astronaut = new Astronaut();
}

function preload(){
  funI = loadImage('Images/fundoIniciar.jpeg');
  a = loadImage('Images/Astronaut.png');
  al = loadImage('Images/Alien.png');
  r = loadImage('Images/Return.png');
  i = loadImage('Images/Inicio.png');
  ins = loadImage('Images/fundoInstruções.jpg');
  j = loadImage('Images/Júpiter.png');
  s = loadImage('Images/Saturno.png');
  t = loadImage('Images/Terra.png');
  m = loadImage('Images/Marte.png');
  n = loadImage('Images/Netuno.png');
  v = loadImage('Images/Vênus.png');
  sun = loadImage('Images/Sun.png');
  ti = loadImage('Images/titleIns.png');
  eu = loadImage('Images/Eu.jpeg');
  gala = loadImage('Images/gala.png');
  xia = loadImage('Images/xia.png');
  sound = loadImage('Images/Sound.png');
  noSound = loadImage('Images/noSound.png');
  
  fonteAlien = loadFont('Assets/letra.otf');
}

function draw(){
  if(tela==0){
   Menu();
  }
  else{
    if(tela==1){
      Iniciar();
    }
    else{
      if(tela==2){
        Instruções();
    }
    else{
        if(tela==3){
          Créditos();
        }
      }
    }
  }
}