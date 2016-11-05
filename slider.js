window.onload = function () {

  var slider = new Slider({
    container: document.getElementById('slider-main-container'),
    color: 'red',
    maxValue: 500,
    minValue: 10,
    step: 10,
    radius: 200
  });
  slider.createSlider();
}

class Slider {
  constructor(options) {
    this.container = options.container;
    this.color = options.color;
    this.maxValue = options.maxValue;
    this.minValue = options.minValue;
    this.step = options.step;
    this.radius = options.radius;
  }

  createSlider() {
    var slider = this;
    var isClicked = false;
    var sliderButton = document.createElement('div');
    sliderButton.style.backgroundColor = this.color;
    sliderButton.style.width = '20px';
    sliderButton.style.height = '20px';
    sliderButton.style.borderRadius = '50%';
    sliderButton.style.position = 'absolute';
    var value = document.createElement('div');
    value.style.fontSize = '22px';
    var mainContainer = this.container;
    mainContainer.appendChild(sliderButton);
    mainContainer.appendChild(value);
    var leftOff;
    var topOff;
    var radius = slider.radius - sliderButton.clientWidth/2;
    var angle = 0;
    var lastAngle = 1;
    var left = 1;
    var right = 0;
    var X, Y;

    sliderButton.style.left = radius;
    sliderButton.style.top = 0;

    sliderButton.onmousedown = function(){
      isClicked = true;
      leftOff = mainContainer.getBoundingClientRect().left;
      topOff = mainContainer.getBoundingClientRect().top;
    };
    document.onmouseup = function(){
      isClicked = false;
    };
    mainContainer.onmousemove = function(e) {
      var container = this;
      if(isClicked)
      { 
        var mousePosX = e.pageX - this.offsetLeft;
        var mousePosY = e.pageY - this.offsetTop;
        var arctangent = Math.atan2(mousePosX - radius, mousePosY - radius);
        angle = -arctangent/(Math.PI/180) + 180;
        X = Math.round(radius * Math.sin(angle*Math.PI/180));
        Y = Math.round(radius * -Math.cos(angle*Math.PI/180));

        if(left == 1 && (angle - lastAngle) > 180) {
          return;
        }
        if(right == 1 && (lastAngle - angle) > 180) {
          return;
        }
        value.innerHTML = Math.round((angle/360) * slider.maxValue); 
        sliderButton.style.left = X + radius;
        sliderButton.style.top = Y + radius;

        if(angle < lastAngle) {
          left = 1;
        } else {
          right = 1;
        }
        lastAngle = angle;
      }
    };
  }
}