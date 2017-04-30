// Click within the image to change
// the value of the rectangle
//Using if() and else(), make the mouse perform different actions when in different parts of the window.

var s = function( p ) {
var value = 0;
var angle=0.0;
p.setup = function() {
    p.createCanvas(1300, 300);
    p.rect(30, 30);
};
      
/*function setup() {
  cnv = createCanvas(windowWidth, 400);
  cnv.position(0, 60);
}*/

p.draw = function() {
    p.translate(p.mouseX, p.mouseY);
    p.fill(value);
    p.rect(30, 30);
    p.scale(p.mouseX/100);
    if (p.mouseIsPressed) {
    value = 255;
        p.rect(-25, -25, 50, 50);
  }
  else {
    value = 0;
  }
};

/*function draw() {
  translate(mouseX, mouseY);
  fill(value);
  rect(0, 0, 50, 50);
  scale(mouseX/60.0);
}*/

/*p.mousePressed = function() {
 if (value == 0) {
    p.value = 255;
  } else {
    p.value = 0;
  }
};*/


/*function mousePressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }

  if (mouseIsPressed) {
    rect(0, 0, 50, 50);
  }
  else {
    rect(10, 10);
  }
  //Multiple clicks required
}*/
};
var myp5 = new p5(s, 'Blacknwhite'); 


//Sketch 2//
var t = function( p ) {
    var x = 0;
   
    p.setup = function() {
        p.createCanvas(1300, 100);
        p.background(255);
    };
/*var x = 0;

function setup() {
    createCanvas(900, 600);
}*/
    
    p.draw = function () {
        p.line(x, 0, x, p.height);
        x = p.mouseX;
    };
};

/*function draw() {
    //background(255);
    line(x, 0, x, height);

    x = mouseX;

}*/

var myp5 = new p5(t, 'Lines'); 



