//modal for rules
var modalq = document.getElementById('ruules');
var btnq = document.getElementById("modalbtn");
var span = document.getElementById("close");
btnq.onclick = function() {
    modalq.style.display = "block";
}
span.onclick = function() {
    modalq.style.display = "none";
}
//end of modal








//var
document.getElementById("message").innerHTML="debug";
var btn1 = document.getElementById("hit");
var btn2 = document.getElementById("rest");
var btn3 = document.getElementById("retry");
var value = 0;
var dt = 0;
document.getElementById("dealerTot").innerHTML=dt;
var pt = 0;
document.getElementById("playerTot").innerHTML=pt;
//deck of cards
var cards = ["bact1","bact2", "bact3", "bact4", "bact5", "bact6", "bact7", "bact8", "bact9", "bact10", "bact11", "bact12", "bact13", "spore1", "spore2", "spore3", "spore4", "spore5", "spore6", "spore7", "spore8", "spore9", "spore10", "spore11", "spore12", "spore13", "yeast1", "yeast2", "yeast3", "yeast4", "yeast5", "yeast6", "yeast7", "yeast8", "yeast9", "yeast10", "yeast11", "yeast12", "yeast13", "vir1", "vir2", "vir3", "vir4", "vir5", "vir6", "vir7", "vir8", "vir9", "vir10", "vir11", "vir12", "vir13"];
var alternates = ["Bacteria lvl Ancestral, value = 1 or 11","Bacteria lvl 2, value = 2","Bacteria lvl 3, value = 3","Bacteria lvl 4, value = 4","Bacteria lvl 5, value = 5","Bacteria lvl 6, value = 6","Bacteria lvl 7, value = 7","Bacteria lvl 8, value = 8","Bacteria lvl 9, value = 9","Bacteria lvl 10, value = 10","Bacteria Ferdinand Cohn lvl 10, value = 10","Bacteria Robert Koch lvl 10, value = 10","Bacteria Christian Gottfried Ehrenberg lvl 10, value = 10","Spore lvl Ancestral, value = 1 or 11","Spore lvl 2, value = 2","Spore lvl 3, value = 3","Spore lvl 4, value = 4","Spore lvl 5, value = 5","Spore lvl 6, value = 6","Spore lvl 7, value = 7","Spore lvl 8, value = 8","Spore lvl 9, value = 9","Spore lvl 10, value = 10","Spore Elias Magnus Fries lvl 10, value = 10","Spore Christiaan Hendrik Persoon lvl 10, value = 10","Spore Pier Antonio Micheli lvl 10, value = 10","Yeast lvl Ancestral, value = 1 or 11","Yeast lvl 2, value = 2","Yeast lvl 3, value = 3","Yeast lvl 4, value = 4","Yeast lvl 5, value = 5","Yeast lvl 6, value = 6","Yeast lvl 7, value = 7","Yeast lvl 8, value = 8","Yeast lvl 9, value = 9","Yeast lvl 10, value = 10","Yeast Charles L. Fleishchmann lvl 10, value = 10","Yeast Louis Pasteur lvl 10, value = 10","Yeast Anton van Leeuwenhoek lvl 10, value = 10","Virus lvl Ancestral, value = 1 or 11","Virus lvl 2, value = 2","Virus lvl 3, value = 3","Virus lvl 4, value = 4","Virus lvl 5, value = 5","Virus lvl 6, value = 6","Virus lvl 7, value = 7","Virus lvl 8, value = 8","Virus lvl 9, value = 9","Virus lvl 10, value = 10","Virus Wendell Meredith Stanley lvl 10, value = 10","Virus Martinus Beijerinck lvl 10, value = 10","Virus Charles Chamberland lvl 10, value = 10"];
var sources = ["img/01.BMP", "img/02.BMP", "img/03.BMP", "img/04.BMP", "img/05.BMP", "img/06.BMP", "img/07.BMP", "img/08.BMP", "img/09.BMP", "img/10.BMP", "img/11.BMP", "img/12.BMP", "img/13.BMP", "img/14.BMP", "img/15.BMP", "img/16.BMP", "img/17.BMP", "img/18.BMP", "img/19.BMP", "img/20.BMP", "img/21.BMP", "img/22.BMP", "img/23.BMP", "img/24.BMP", "img/25.BMP", "img/26.BMP", "img/27.BMP", "img/28.BMP", "img/29.BMP", "img/30.BMP", "img/31.BMP", "img/32.BMP", "img/33.BMP", "img/34.BMP", "img/35.BMP", "img/36.BMP", "img/37.BMP", "img/38.BMP", "img/39.BMP", "img/40.BMP", "img/41.BMP", "img/42.BMP", "img/43.BMP", "img/44.BMP", "img/45.BMP", "img/46.BMP", "img/47.BMP", "img/48.BMP", "img/49.BMP", "img/50.BMP", "img/51.BMP", "img/52.BMP"];
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// stock of drawing cards
var listPlayer =[];
var listDataBank=[];
var listaltPlayer =[];
var listaltDataBank =[];

//function
//Reset of the game
function Reset(){
document.getElementById("dcd1").innerHTML="";
document.getElementById("dcd2").innerHTML="";
document.getElementById("pcd1").innerHTML="";
document.getElementById("pcd2").innerHTML="";
document.getElementById("ncp").innerHTML="";
document.getElementById("playerTot").innerHTML=0;
document.getElementById("dealerTot").innerHTML=0;
document.getElementById("dealerTot").style.visibility = "hidden";
document.getElementById("message").innerHTML="";
document.getElementById("retry").style.display = "none";
document.getElementById("hit").style.display = "inline";
document.getElementById("rest").style.display = "inline";
}

//Draw of the first cards
function SetDraw(){
  Reset();
  let num = Math.floor(Math.random()*cards.length);
  listPlayer.push(cards[num]);
  listaltPlayer.push(alternates[num]);
  //cards.splice(num,1);
  var pt = values[num];
  document.getElementById("playerTot").innerHTML=pt;
  let img = document.createElement('img');
  img.src=sources[num];
  img.alt=alternates[num];
  document.getElementById('pcd1').appendChild(img);
  let num2 = Math.floor(Math.random()*cards.length);
  listDataBank.push(cards[num2]);
  listaltDataBank.push(alternates[num2]);
  //cards.splice(num2,1);
  var dt = values[num2];
  document.getElementById("dealerTot").innerHTML=dt;
  let img2 = document.createElement('img');
  img2.src=sources[num2];
  img2.alt=alternates[num2];
  document.getElementById('dcd1').appendChild(img2);
  let num3 = Math.floor(Math.random()*cards.length);
  listPlayer.push(cards[num3]);
  listaltPlayer.push(alternates[num3]);
  //cards.splice(num3,1);
  var pt = pt + values[num3];
  document.getElementById("playerTot").innerHTML=pt;
  let img3 = document.createElement('img');
  img3.src=sources[num3];
  img3.alt=alternates[num3];
  document.getElementById('pcd2').appendChild(img3);
  var scores = [];
  scores.push(pt);
  scores.push(dt);
  return scores;
}

function HitCard(scores){
  //button hit onclick
  let num = Math.floor(Math.random()*cards.length);
  listPlayer.push(cards[num]);
  listaltPlayer.push(alternates[num]);
  let img = document.createElement('img');
  img.src=sources[num];
  img.alt=alternates[num];
  document.getElementById('ncp').appendChild(img);
  //cards.splice(num,1);
  var pt = scores[0];
  var pt = pt + values[num];
  document.getElementById("playerTot").innerHTML=pt;
  scores[0]=pt;
  if (pt>21) {
    EndGame(scores);
  }
  return scores;
}

function StandGame(scores){
  //uncovering dealer card when standing
  var pt = scores[0];
  var dt = scores[1];
  let num3 = Math.floor(Math.random()*cards.length);
  listDataBank.push(cards[num3]);
  listaltDataBank.push(alternates[num3]);
  cards.splice(num3,1);
  let img3 = document.createElement('img');
  img3.src=sources[num3];
  img3.alt=alternates[num3];
  document.getElementById('dcd2').appendChild(img3);
  var dt = dt + values[num3];
  scores[1]=dt
  document.getElementById("dealerTot").innerHTML=dt;
  //call for next
  var i =2;
  while (dt<17 && i<5 && dt<pt){
    let num3 = Math.floor(Math.random()*cards.length);
    listDataBank.push(cards[num3]);
    listaltDataBank.push(alternates[num3]);
    cards.splice(num3,1);
    let img3 = document.createElement('img');
    img3.src=sources[num3];
    img3.alt=alternates[num3];
    document.getElementById('dcd2').appendChild(img3);
    var dt = dt + values[num3];
    scores[1]=dt
    document.getElementById("dealerTot").innerHTML=dt;
    i=i+1;
  }
  //show dealer-tot
  document.getElementById("dealerTot").style.visibility = "visible";
  document.getElementById("retry").style.display = "inline";
  document.getElementById("hit").style.display = "none";
  document.getElementById("rest").style.display = "none";
  EndGame(scores);
}

function EndGame(scores){
  var pt=scores[0];
  var dt=scores[1];
  document.getElementById("message").style.visibility = "visible";
  document.getElementById("retry").style.display = "inline";
  document.getElementById("hit").style.display = "none";
  document.getElementById("rest").style.display = "none";
  //draw
  if (dt == pt){
    document.getElementById("message").innerHTML = "It's a draw...";
  }
  //victory
  else if ((pt<=21 && dt<pt)){
    document.getElementById("message").innerHTML ="Victory !";
  }
  //bust
  else if (pt>21){
    document.getElementById("ncd").style.display= "none";
    document.getElementById("dealerTot").style.visibility = "hidden";
    document.getElementById("message").innerHTML = "Bust...";
  }
  //dealer bust
  else if (dt>21){
    document.getElementById("message").innerHTML = "Dealer bust !";
  }
  //defeat
  else if (dt==21 || dt>pt){
    document.getElementById("message").innerHTML = "Defeated !";
  }
}

//main
btn1.onclick =function(){
  scores=HitCard(scores)
}

btn2.onclick =function(){
  StandGame(scores)
}

btn3.onclick =function(){
  scores=SetDraw()
}

window.addEventListener("load", scores=SetDraw());
