window.onload = function () {

  var slider = new Slider({
    container: document.getElementById('sliderMainContainer'),
    color: 'red',
    maxValue: 500,
    minValue: 0,
    step: 25,
    radius: 200
  });
  slider.createSlider();
  var slider1 = new Slider({
    container: document.getElementById('sliderMainContainer'),
    color: 'green',
    maxValue: 300,
    minValue: 0,
    step: 25,
    radius: 200
  });
  slider1.createSlider();
  var slider2 = new Slider({
    container: document.getElementById('sliderMainContainer'),
    color: 'blue',
    maxValue: 500,
    minValue: 0,
    step: 25,
    radius: 200
  });
  slider2.createSlider();
  var slider3 = new Slider({
    container: document.getElementById('sliderMainContainer'),
    color: 'violet',
    maxValue: 400,
    minValue: 0,
    step: 25,
    radius: 200
  });
  slider3.createSlider();
}

class Slider {
  constructor(options) {
    this.container = options.container;
    this.color = options.color;
    this.maxValue = options.maxValue;
    this.minValue = options.minValue;
    this.step = options.step;
    this.radius = options.radius;
    this.padding = 10;
    this.buttonSize = 20;
  }

  addProgressElements(radius, offset, sliderNumber) {
    var backgroundContainer = document.createElement('div');
    backgroundContainer.style.width = radius*2 - (this.padding*2 * (sliderNumber+1));
    backgroundContainer.style.height = radius*2 - (this.padding*2 * (sliderNumber+1));
    backgroundContainer.style.top = offset + (this.padding * (sliderNumber+1));
    backgroundContainer.style.left = offset + (this.padding * (sliderNumber+1));
    backgroundContainer.style.position = 'absolute';
    backgroundContainer.style.backgroundColor = 'transparent';

    var background = document.createElement('div');
    background.style.width = radius*2 - (this.padding*2 * (sliderNumber+1)) - 2;
    background.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) - 2;
    background.style.borderRadius = radius + 'px';
    background.style.backgroundColor = this.color;
    background.style.top = 1;
    background.style.left = 1;
    background.style.position = 'absolute';

    var backgroundOver = document.createElement('div');
    backgroundOver.style.width = radius*2 - (this.padding*2 * (sliderNumber+1));
    backgroundOver.style.height = radius*2 - (this.padding*2 * (sliderNumber+1));
    backgroundOver.style.backgroundColor = 'transparent';
    backgroundOver.id = 'backgroundOver' + sliderNumber;

    var backgroundLeftOverStatic = document.createElement('div');
    backgroundLeftOverStatic.style.width = radius - (this.padding * (sliderNumber+1));
    backgroundLeftOverStatic.style.height = radius*2 - (this.padding*2 * (sliderNumber+1));
    backgroundLeftOverStatic.style.borderBottomLeftRadius = radius + 'px';
    backgroundLeftOverStatic.style.borderTopLeftRadius = radius + 'px';
    backgroundLeftOverStatic.style.backgroundColor = '#D0D0D1';
    backgroundLeftOverStatic.style.position = 'absolute';
    backgroundLeftOverStatic.style.top = 0;
    backgroundLeftOverStatic.style.left = 0;
    backgroundLeftOverStatic.id = 'backgroundLeftOverStatic' + sliderNumber;
    
    var backgroundRightOver = document.createElement('div');
    backgroundRightOver.style.width = (radius*2 - (this.padding*2 * (sliderNumber+1)))/2;
    backgroundRightOver.style.height = radius*2 - (this.padding*2 * (sliderNumber+1));
    backgroundRightOver.style.borderTopRightRadius = radius + 'px';
    backgroundRightOver.style.borderBottomRightRadius = radius + 'px';
    backgroundRightOver.style.left = radius - (this.padding * (sliderNumber+1));
    backgroundRightOver.style.position = 'absolute';
    backgroundRightOver.style.backgroundColor = '#D0D0D1';

    var backgroundRightOverStatic = document.createElement('div');
    backgroundRightOverStatic.style.width = radius - (this.padding * (sliderNumber+1)) - 1;
    backgroundRightOverStatic.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) - 2;
    backgroundRightOverStatic.style.borderTopRightRadius = radius + 'px';
    backgroundRightOverStatic.style.borderBottomRightRadius = radius + 'px';
    backgroundRightOverStatic.style.top = 1;
    backgroundRightOverStatic.style.left = radius - (this.padding * (sliderNumber+1));
    backgroundRightOverStatic.style.position = 'absolute';
    backgroundRightOverStatic.style.backgroundColor = this.color;
    backgroundRightOverStatic.style.display = 'none';
    backgroundRightOverStatic.id = 'backgroundRightOverStatic' + sliderNumber;

    var backgroundOverStatic = document.createElement('div');
    backgroundOverStatic.style.width = radius*2 - this.buttonSize*2 - (this.padding*2 * (sliderNumber+1));
    backgroundOverStatic.style.height = radius*2 - this.buttonSize*2 - (this.padding*2 * (sliderNumber+1));
    backgroundOverStatic.style.borderRadius = radius - this.buttonSize + 'px';
    backgroundOverStatic.style.top = this.buttonSize;
    backgroundOverStatic.style.left = this.buttonSize;
    backgroundOverStatic.style.position = 'absolute';
    backgroundOverStatic.style.backgroundColor = 'white';
    
    backgroundOver.appendChild(backgroundRightOver);
    backgroundContainer.appendChild(background);
    backgroundContainer.appendChild(backgroundOver);
    backgroundContainer.appendChild(backgroundLeftOverStatic);
    backgroundContainer.appendChild(backgroundRightOverStatic);
    backgroundContainer.appendChild(backgroundOverStatic);
    var numberOfSteps = (this.maxValue-this.minValue)/this.step;
    console.log(numberOfSteps);
    var lineStep = 360/numberOfSteps;
    for (var i = 0; i < numberOfSteps; i++) {
      var line = document.createElement('div');
      line.style.width = radius*2 - (this.padding*2 * (sliderNumber+1));
      line.style.height = 2;
      line.style.position = 'absolute';
      line.style.top = (radius*2 - (this.padding*2 * (sliderNumber+1)))/2;
      line.style.left = 0;
      line.style.backgroundColor = 'white';
      line.style.opacity = '0.5';
      line.style.transform = 'rotate(' + i * lineStep + 'deg)';
      backgroundContainer.appendChild(line);
    }
    return backgroundContainer;
  }

  createSlider() {
    var slider = this;
    window.isClicked = false;
    var padding = 10;
    var mainContainer = this.container;
    var numberOfSliders = mainContainer.getElementsByClassName('sliderButton').length;

    mainContainer.style.backgroundImage = 'linear-gradient(180deg, #EFEFEF, #CACBCD)';

    var sliderContainer = document.createElement('div');
    sliderContainer.style.width = slider.radius*2;
    sliderContainer.style.height = slider.radius*2;
    sliderContainer.style.position = 'absolute';
    sliderContainer.className = 'sliderContainer';
    sliderContainer.id = 'sliderContainer' + numberOfSliders;

    var sliderButton = document.createElement('div');
    sliderButton.style.backgroundColor = '#F0F0F1';
    sliderButton.style.width = this.buttonSize;
    sliderButton.style.height = this.buttonSize;
    sliderButton.style.borderRadius = '50%';
    sliderButton.style.position = 'absolute';
    sliderButton.className = 'sliderButton';
    sliderButton.style.zIndex = 200;
    sliderButton.style.borderColor = 'DarkGray';
    sliderButton.style.borderWidth = 1;
    sliderButton.style.borderStyle = 'solid';
    sliderButton.id = 'sliderButton' + numberOfSliders;

    var value = document.createElement('div');
    value.style.fontSize = '22px';
    var radius = slider.radius - (numberOfSliders * this.buttonSize) - sliderButton.clientWidth/2;
    mainContainer.appendChild(slider.addProgressElements(radius, numberOfSliders * this.buttonSize, numberOfSliders));
    sliderContainer.appendChild(sliderButton);
    mainContainer.appendChild(sliderContainer);

    var angle = 0;
    var lastAngle = 1;
    var left = 1;
    var right = 0;
    var X, Y;
    var stepInDegrees = 360 / ((slider.maxValue - slider.minValue) / slider.step);

    sliderButton.style.left = slider.radius - sliderButton.clientWidth/2;
    sliderButton.style.top = (numberOfSliders * sliderButton.clientWidth) + (this.padding * (numberOfSliders+1));

    sliderButton.onmousedown = function(e) {
      e.stopPropagation();
      var containers = mainContainer.getElementsByClassName('sliderContainer');
      for(var i = 0; i < containers.length; i++) {
        containers[i].style.removeProperty('z-index');
      }
      window.isClicked = true;
      e.target.parentElement.style.zIndex = 199;
      e.target.parentElement.sliderButton = this;
      e.target.parentElement.numberOfSliders = numberOfSliders;
      e.target.parentElement.addEventListener("mousemove", onMouseMove);
    };
    document.onmouseup = function(e) {
      window.isClicked = false;
      var containers = mainContainer.getElementsByClassName('sliderContainer');
      for(var i = 0; i < containers.length; i++) {
        containers[i].removeEventListener("mousemove", onMouseMove);
      }
    };
    sliderButton.onmousemove = function(e) {
      e.preventDefault();
    }
    function onMouseMove(e) {
      if(window.isClicked && e.target.sliderButton) {
        var mousePosX = e.pageX - mainContainer.offsetLeft - (slider.padding * numberOfSliders) - e.target.sliderButton.clientWidth;
        var mousePosY = e.pageY - mainContainer.offsetTop - (slider.padding * numberOfSliders) - e.target.sliderButton.clientWidth;
        var arctangent = Math.atan2(mousePosX - radius, mousePosY - radius);
        console.log(arctangent);
        angle = -arctangent/(Math.PI/180) + 180;
        if(angle % stepInDegrees > stepInDegrees/2) {
          angle = (Math.floor(angle/stepInDegrees) + 1) * stepInDegrees;
        } else {
          angle = Math.floor(angle/stepInDegrees) * stepInDegrees;
        }


        X = Math.round((radius - sliderButton.clientWidth/2 - (slider.padding * (numberOfSliders+1))) * Math.sin(angle*Math.PI/180));
        Y = Math.round((radius - sliderButton.clientWidth/2 - (slider.padding * (numberOfSliders+1))) * -Math.cos(angle*Math.PI/180));

        if(left == 1 && (angle - lastAngle) > 180) {
          return;
        }
        if(right == 1 && (lastAngle - angle) > 180) {
          return;
        }
        //value.innerHTML = Math.round((angle/360) * slider.maxValue);
        sliderButton.style.left = X + radius + numberOfSliders*20 - sliderButton.clientWidth/2;
        sliderButton.style.top = Y + radius + numberOfSliders*20 - sliderButton.clientWidth/2;

        document.getElementById('backgroundLeftOverStatic' + numberOfSliders).style.display = angle > 180 ? 'none' : 'block';
        document.getElementById('backgroundRightOverStatic' + numberOfSliders).style.display = angle > 180 ? 'block' : 'none';

        document.getElementById('backgroundOver' + numberOfSliders).style.transform = 'rotate(' + angle + 'deg)';

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