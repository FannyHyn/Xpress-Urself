// la var bgColor fonctionne

let palette = [
  ["#031751", "#006B91", "#008E9B", "#5AB3A7", "#FEDEAF", "#FFAA5C", "#FF5A00", "#FF0000"], 
  ["#232323", "#2940D3", "#39A9CB", "#FFEDA3"], 
  ["#F4F9F4", "#A7D7C5", "#74B49B", "#5C8D89"], 
  ["#FEFFDE", "#DDFFBC", "#91C788", "#52734D"], 
  ["#222831", "#393E46", "#00ADB5", "#EEEEEE"], 
  //["#334257", "#476072", "#548CA8", "#EEEEEE"], techno
  ["#1C0C5B", "#3D2C8D", "#916BBF", "#C996CC"], 
  ["#42240C", "#C81912", "#F64B3C", "#FDBA9A"], 
  // ["#FF4D4D", "#FF8364", "#FDB87D", "#FFE8D5"], amour
  // ["#EEEBDD","#CE1212","#810000","#1B1717"], amour
  //["#911F27", "#630A10", "#FCF0C8", "#FACE7F"], amour
  //["#FFD6B6", "#EA7362", "#B74242", "#5C2626"], amour
  ["#F4F4F2", "#E8E8E8", "#BBBFCA", "#495464"], 
];

let currentPalette;

// gui params
var je_suis = ['optimiste', 'pessimiste'];
var jai_confiance_dans = ['la société', 'la politique', 'la science', 'la nature', 'la technologie', 'la relgion/spiritualité', 'l amour', 'je n ai confiance en rien'];
var je_choisis = ['temps', 'argent'];
var quand_il_y_a_des_règles_je_les = ['suis', 'esquive', 'ignore'];
var je_vois_le_verre = ['à moitié vide', 'à moitié plein'];
let d = 216;
var choisir_motif = 2;


// gui
var visible = true;
var gui;

// dynamic parameters


function setup() {

  createCanvas(1080, 1080);

  // Create Layout GUI
  sliderRange(0, 100, 1);
  gui = createGui('Xpress Urself');
  gui.addGlobals('je_suis', 'jai_confiance_dans', 'je_choisis', 'quand_il_y_a_des_règles_je_les', 
    'je_vois_le_verre','choisir_motif');

  // Don't loop automatically
  noLoop();
  //strokeWeight(4);
  noStroke();
}




function draw() {

  // clear all
  clear();
 


  switch(je_suis) {
  case'optimiste':
    background("#F9F7F7");
    break;

  case 'pessimiste':
    background("#242424");
    break;
  }


  switch (jai_confiance_dans) {
  case 'la société':
    currentPalette = palette[0];
    break;

  case 'la politique':
    currentPalette = palette[1];
    break;

  case 'la science':
    currentPalette = palette[2];
    break;

  case 'la nature':
    currentPalette = palette[3];
    break;

  case 'la technologie':
    currentPalette = palette[4];
    break;

  case 'la relgion/spiritualité':
    currentPalette = palette[5];
    break;

  case 'l amour':
    currentPalette = palette[6];
    break;

  case 'je n ai confiance en rien':
    currentPalette = palette[7];
    break;
  }

  for (let x = d/2; x < width-d; x += d) {
    for (let y = d/2; y < height-d; y += d) {
      if (random() < 1/2) {
        makeTile(x, y, d/2);
        makeTile(x+d/2, y, d/2);
        makeTile(x, y+d/2, d/2);
        makeTile(x+d/2, y+d/2, d/2);
      } else {
        makeTile(x, y, d);
      }
    }
  }
}




function makeTile(x, y, d) {
  shuffle(currentPalette, true);
  fill(currentPalette[0]);
  square(x, y, d);
  push();
  translate(x+d/2, y+d/2);
  rotate(random([0, PI/2]));
  let r = floor(random(4));
  var a = d/2;
  var b = d/2;
  switch (r) {
  case 0:
    fill(currentPalette[1]);

    switch(je_choisis) {

    case 'argent':
      ellipseMode(CENTER);
      ellipse(d/4, d/4, d/2);
      ellipse(-d/4, d/4, d/2);
      ellipse(d/4, -d/4, d/2);
      ellipse(-d/4, -d/4, d/2);
      break;

    case 'temps':
      arc(0, -d/2, d, d, 0, PI, PIE);
      arc(0, d/2, d, d, PI, 2*PI, PIE);
      break;
    }
    break;
  case 1:

    switch(quand_il_y_a_des_règles_je_les) {


    case 'suis':
      fill(currentPalette[1]);
      ellipse(0, 0, d);
      break;

    case 'esquive':
      fill(currentPalette[1]);
      arc(-d/2, -d/2, d, d, 0, PI/2, PIE);
      fill(currentPalette[2]);
      arc(d/2, d/2, d, d, PI, 3*PI/2, PIE);
      break;

    case 'ignore':
      fill(currentPalette[1]); 
      arc(0, d/2, d, d, 0, PI, PIE);
      break;
    }
    break;
  case 2:

    switch(je_vois_le_verre) {

    case 'à moitié vide':
      fill(currentPalette[1]);
      arc(-d/2, -d/2, d*2, d*2, 0, PI/2, PIE);
      break;

    case 'à moitié plein':
      fill(currentPalette[1]);
      arc(0, -d/2, d, d, 0, PI, PIE);
      fill(currentPalette[2]);
      arc(d/2, d/2, d, d, PI, 3*PI/2, PIE);
      fill(currentPalette[3]);
      arc(-d/2, d/2, d, d, 3*PI/2, 2*PI, PIE);
      // fill(currentPalette[1]);
      // triangle(d, d, 0, 0, 0, d);
      break;
    }
    break;
  case 3 :

    fill(currentPalette[1]);
    //rect(-d/2, -d/2, d/2, d/2);
    //fill(currentPalette[2]);
    //rect(-d/2, 0, d/2, d/2);
    //fill(currentPalette[3]);
    //rect(0, -d/2, d/2, d/2);

    break;

    //   case 4 :
    //    beginShape();
    // for (var angle = 0; angle < TWO_PI; angle += 0.1) {
    //  var na = 2/introverti_ou_extraverti;
    //   var x2 = pow(abs(cos(angle)), na) * a * sgn (cos(angle));
    //  var y2 = pow(abs(sin(angle)), na) * b * sgn (sin(angle));
    //  vertex(x2, y2);
    //  }
    //  endShape(CLOSE);
  }
  pop();
}

// check for keyboard events
function keyPressed() {
  switch(key) {
    // type [F1] to hide / show the GUI
  case 'p':
    visible = !visible;
    if (visible) gui.show(); 
    else gui.hide();
    break;
  }
}

function keyPressed() {
  if (key == "x") {
    save('XpressUrself.jpg');
  }
}
