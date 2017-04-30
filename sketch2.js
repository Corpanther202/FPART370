//Video 1 (left side)//
var r = function( p ) {
    var capture;
    //var stepsize = 12;
    p.setup = function () {
        p.createCanvas(400, 375);
        //cnv.style("z-index", 2);
        p.capture =  p.createCapture();
        p.capture.hide();
        p.noStroke();
        p.fill(0);
    };
    /*function setup() {
    createCanvas(710, 400);
    capture = createCapture();
    capture.hide();
    noStroke();
    fill(0);
    }*/
    p.draw = function() {
        p.background(200);
        p.capture.loadPixels();
        var stepSize = 12;
        for (var y = 0; y < p.capture.height; y += stepSize) {
        for (var x = 0; x < p.capture.width; x += stepSize) {
            var i = y * p.capture.width + x;
            // divided by "4" because it's the RGBA of the pixel
            var darkness = (255 - p.capture.pixels[i * 4]) / 255;
            var radius = stepSize * darkness;
            p.ellipse(x, y, radius, radius);
        }
    };
 };
 };
    /*function draw() {
    background(200);
    capture.loadPixels();

    var stepSize = 12;
    for (var y = 0; y < capture.height; y += stepSize) {
        for (var x = 0; x < capture.width; x += stepSize) {
            var i = y * capture.width + x;
            // divided by "4" because it's the RGBA of the pixel
            var darkness = (255 - capture.pixels[i * 4]) / 255;
            var radius = stepSize * darkness;
            ellipse(x, y, radius, radius);
        }
    }*/
    
    var myp5 = new p5(r, 'video1');


//Video two (right side)//

var q = function( p ) {
    var capture;
    p.setup = function () {
        p.createCanvas(400, 375);
        p.capture =  p.createCapture();
        p.capture.hide();
    };
        /*var capture;
        function setup() {
        createCanvas(710, 400);
        capture = createCapture();
        capture.hide();
        }*/

    p.draw = function() {
        p.background(200);
        p.image(p.capture, 0, 0);
        p.filter("INVERT");
     };
    /*function draw() {
    background(200);
    image(capture, 30, 30);
    filter("INVERT");
    }*/
};
var myp5 = new p5(q, 'video2');