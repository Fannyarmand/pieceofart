var img;
function preload() {

}
// Mise en place du code
function setup() {
  let c = createCanvas(600, 400);

  // background(loadImage);
  //c.elt.style.border = '5px solid black';//

}
// Dessin
function draw() {
  let couleur_particules = color(random(0), random(255), random(255));
  if (mouseIsPressed) {
     ellipse(mouseX, mouseY, 50);
    ellipse(mouseX+25, mouseY+25, 50);
    ellipse(mouseX+25, mouseY-25, 50);
    ellipse(mouseX-25, mouseY-25, 50);
    ellipse(mouseX-25, mouseY+25, 50);
    square(mouseX+50, mouseY+50, 50);
    triangle(mouseX+50, mouseY+50, mouseX+75, mouseY+25, mouseX+100, mouseY+50);


  }
  let taille = random(90);;
  stroke( couleur_particules);
  fill(couleur_particules);
  square(mouseX, mouseY, 15)

}
