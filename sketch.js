var img;
function preload() {
  img = loadImage("https://upload.wikimedia.org/wikipedia/commons/e/ee/GEO_Globe_Image.jpg");
}
// Mise en place du code
function setup() {
  let c = createCanvas(900, 900);
  background("orange");
  image(img, 0, 0);
  //c.elt.style.border = '5px solid black';//

}


function fleur(taille) {
  ellipse(mouseX, mouseY, taille);
    ellipse(mouseX+25, mouseY+25, taille);
    ellipse(mouseX+25, mouseY-25, taille);
    ellipse(mouseX-25, mouseY-25, taille);
    ellipse(mouseX-25, mouseY+25, taille);

}
function maison() {
  square(mouseX+50, mouseY+50, 50);
    triangle(mouseX+50, mouseY+50, mouseX+75, mouseY+25, mouseX+100, mouseY+50);

}
// Dessin
function draw() {
  let taille = random(90);
  let couleur_particules = color(random(0), random(255), random(255));
  if (mouseIsPressed) {
    fleur(taille); 
    maison();
  }

  
  stroke( couleur_particules);
  fill(couleur_particules);
  square(mouseX, mouseY, 20)

}
