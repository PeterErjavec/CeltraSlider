document.addEventListener('DOMContentLoaded',function(){
  var defaultRadius = 200;
  var slider = new Slider({
    container: document.getElementById('randomContainer'),
    color: '#794B90',
    maxValue: 500,
    minValue: 0,
    step: 25,
    radius: defaultRadius,
    title: 'Transportation'
  });
  slider.createSlider();
  var slider1 = new Slider({
    container: document.getElementById('randomContainer'),
    color: '#0092C5',
    maxValue: 300,
    minValue: 0,
    step: 25,
    radius: defaultRadius,
    title: 'Food'
  });
  slider1.createSlider();
  var slider2 = new Slider({
    container: document.getElementById('randomContainer'),
    color: '#14A22F',
    maxValue: 500,
    minValue: 0,
    step: 25,
    radius: defaultRadius,
    title: 'Insurance'
  });
  slider2.createSlider();
  var slider3 = new Slider({
    container: document.getElementById('randomContainer'),
    color: '#F68A24',
    maxValue: 400,
    minValue: 0,
    step: 10,
    radius: defaultRadius,
    title: 'Entertainment'
  });
  slider3.createSlider();
});

var Slider = function(options) {
  this.container = options.container;
  this.color = options.color;
  this.maxValue = options.maxValue;
  this.minValue = options.minValue;
  this.step = options.step;
  this.radius = window.innerWidth < options.radius*2 ?
  window.innerWidth/2 - 15 : options.radius;
  this.padding = Math.ceil(this.radius*0.05);
  this.buttonSize = Math.ceil(this.radius*0.1);
  this.title = options.title;
}

Slider.prototype.addProgressElements = function(radius, offset, sliderNumber) {
  var backgroundContainer = document.createElement('div');
  backgroundContainer.style.cssText = 'width:' +
  (radius*2 - (this.padding*2 * (sliderNumber+1))) + 'px;'+
  'height:' + (radius*2 - (this.padding*2 * (sliderNumber+1))) + 'px;'+
  'top:' + (offset + (this.padding * (sliderNumber+1))) + 'px;'+
  'left:' + (offset + (this.padding * (sliderNumber+1))) + 'px;'+
  'position: absolute;background-color:transparent;';

  var background = document.createElement('div');
  background.style.cssText =  'width:' + 
  (radius*2 - (this.padding*2 * (sliderNumber+1)) - 2*this.buttonSize - 2) + 'px;'+
  'height:' + (radius*2 - (this.padding*2 * (sliderNumber+1)) - 2*this.buttonSize - 2) + 'px;'+
  'border-radius:' + radius + 'px;border:' + this.buttonSize + 'px solid ' + this.color +';'+
  'background:' + 'transparent;'+ 'top:1px;left:1px;position:absolute;';

  var backgroundOver = document.createElement('div');
  backgroundOver.style.cssText = 'width:' + (radius*2 - (this.padding*2 * (sliderNumber+1))) + 'px;'+
  'height:' + (radius*2 - (this.padding*2 * (sliderNumber+1))) + 'px;'+
  'background-color:transparent;';
  backgroundOver.id = 'backgroundOver' + sliderNumber;

  var backgroundLeftOverStatic = document.createElement('div');
  backgroundLeftOverStatic.style.cssText = 'width:' + ((radius*2 - (this.padding*2 * (sliderNumber+1)))/2 - this.buttonSize - 2) + 'px;'+
  'height:' + (radius*2 - (this.padding*2 * (sliderNumber+1)) - 2*this.buttonSize - 4) + 'px;'+
  'border-bottom-left-radius:' + radius + 'px;border-top-left-radius:'+ radius + 'px;'+
  'background-color:transparent;border:' + (this.buttonSize+2) + 'px solid #dbdbdb;'+
  'border-right:0;position:absolute;top:0px;left:0px;';
  backgroundLeftOverStatic.id = 'backgroundLeftOverStatic' + sliderNumber;

  var backgroundRightOver = document.createElement('div');
  backgroundRightOver.style.cssText = 'width:' + ((radius*2 - (this.padding*2 * (sliderNumber+1)))/2 - this.buttonSize - 2) + 'px;'+
  'height:' + (radius*2 - (this.padding*2 * (sliderNumber+1)) - 2*this.buttonSize - 4) + 'px;'+
  'border-top-right-radius:' + radius + 'px;'+'border-bottom-right-radius:' + radius + 'px;'+
  'top:0px;left:' + ((radius*2 - (this.padding*2 * (sliderNumber+1)))/2) + 'px;position:absolute;'+
  'border:' + (this.buttonSize+2) + 'px solid #dbdbdb;border-left:0;backgroundColor:transparent;';

  var backgroundRightOverStatic = document.createElement('div');
  backgroundRightOverStatic.style.cssText = 'width:' + ((radius*2 - (this.padding*2 * (sliderNumber+1)))/2 - this.buttonSize - 2) + 'px;'+
  'height:' + (radius*2 - (this.padding*2 * (sliderNumber+1)) - 2*this.buttonSize - 2) + 'px;'+
  'border-top-right-radius:' + radius + 'px;border-bottom-right-radius:' + radius + 'px;'+
  'top:1px;left:' + (radius*2 - (this.padding*2 * (sliderNumber+1)))/2 + 'px;'+
  'position:absolute;backgroundColor:transparent;border:' + this.buttonSize + 'px solid ' + this.color+
  ';border-left:0;display:none;';
  backgroundRightOverStatic.id = 'backgroundRightOverStatic' + sliderNumber;

  backgroundOver.appendChild(backgroundRightOver);
  backgroundContainer.appendChild(background);
  backgroundContainer.appendChild(backgroundOver);
  backgroundContainer.appendChild(backgroundLeftOverStatic);
  backgroundContainer.appendChild(backgroundRightOverStatic);
  var numberOfSteps = (this.maxValue-this.minValue)/this.step;
  var lineStep = 360/numberOfSteps;
  for (var i = 0; i < numberOfSteps; i++) {
    X = Math.round((radius - this.buttonSize/2 - (this.padding * (sliderNumber+1)) - 1) * Math.sin((i * lineStep)*Math.PI/180));
    Y = Math.round((radius - this.buttonSize/2 - (this.padding * (sliderNumber+1)) - 1) * -Math.cos((i * lineStep)*Math.PI/180));
    var line = document.createElement('div');
    line.style.cssText = 'width:' + Math.ceil(this.buttonSize * 0.1) + 'px;height:' + (this.buttonSize + 2) + 'px;' +
    'position:absolute;top:' + (Y + radius - this.buttonSize/2 - (this.padding * (sliderNumber+1)) - 1) + 'px;'+
    'left:' + (X + radius - (this.padding * (sliderNumber+1)) - 1) + 'px;' + 'background-color:white;'+
    'opacity:' + '0.6;transform: rotate(' + (i * lineStep) + 'deg);-ms-transform:rotate(' + (i * lineStep) + 'deg);';
    backgroundContainer.appendChild(line);
  }
  return backgroundContainer;
}

Slider.prototype.createValues = function(sliderNumber) {
  if(!document.getElementById('valuesMainContainer')) {
    var valuesMainContainer = document.createElement('div');
    valuesMainContainer.style.cssText = 'width:' + this.radius + 'px;'+ 'height:' + (this.radius*2) + 'px;'+
    'float:left;display:inline-block;';
    valuesMainContainer.id = 'valuesMainContainer';

    var valuesInnerContainerForAllign = document.createElement('div');
    valuesInnerContainerForAllign.id = 'valuesInnerContainerFull';
    valuesInnerContainerForAllign.style.cssText = 'width:1px;height:' + (this.radius*2) + 'px;'+
    'display:inline-block;vertical-align:middle;';
    
    var valuesInnerContainer = document.createElement('div');
    valuesInnerContainer.id = 'valuesInnerContainer';
    valuesInnerContainer.style.cssText = 'width:' + (this.radius-1) + 'px;display:inline-block;vertical-align:middle;';
    valuesMainContainer.appendChild(valuesInnerContainerForAllign);
    valuesMainContainer.appendChild(valuesInnerContainer);
  } else {
    var valuesMainContainer = document.getElementById('valuesMainContainer');
    var valuesInnerContainer = document.getElementById('valuesInnerContainer');
  }

  var valueItemContainer = document.createElement('div');
  valueItemContainer.style.cssText =  'width:' + this.radius + 'px;height:' + (this.radius * 0.25) + 'px;';

  var currencyContainer = document.createElement('div');
  currencyContainer.style.cssText = 'height:' + this.radius * 0.25 + 'px;width:' + this.radius * 26/200 + 'px;'+
  'float:left;position:relative;';

  var currency = document.createElement('div');
  currency.style.cssText = 'font-size:' + (this.radius * (38/200)) + 'px;position:absolute;bottom:' + (-this.radius * 0.05) + 'px;'+
  'font-family:Arial,Gadget,sans-serif;font-weight:bold;';
  currency.innerHTML = '$';
  currencyContainer.appendChild(currency);

  var valueContainer = document.createElement('div');
  valueContainer.style.cssText = 'height:' + (this.radius * 0.25) + 'px;width:'+ (this.radius * (75/200)) + 'px;'+
  'float:left;position:relative;';

  var value = document.createElement('div');
  value.style.cssText = 'font-size:' + (this.radius * (38/200)) + 'px;position:absolute;bottom:' + (-this.radius * 0.05) + 'px;'+
  'font-family:Arial,Gadget,sans-serif;font-weight:bold;';
  value.innerHTML = '0';
  value.id = 'value' + sliderNumber;
  valueContainer.appendChild(value);

  var labelContainer = document.createElement('div');
  labelContainer.style.cssText = 'height:' + (this.radius * 0.25) + 'px;width:' + (this.radius * 0.25) + 'px;'+
  'float:left;position:relative;margin-left:' + (this.radius * (5/200)) + 'px;';

  var label = document.createElement('div');
  label.style.cssText = 'font-size:' + (this.radius * (14/200)) + 'px;position:absolute;bottom:' + (-this.radius * (3/200)) + 'px;'+
  'font-family : Arial,Gadget,sans-serif;';
  label.innerHTML = this.title;
  labelContainer.appendChild(label);

  var colorContainer = document.createElement('div');
  colorContainer.style.cssText = 'height:' + (this.radius * 0.25) + 'px;width:' + (this.radius * (15/200)) + 'px;'+
  'float:left;position:relative;';

  var valueColor = document.createElement('div');
  valueColor.style.cssText = 'width:' + (this.radius * (15/200)) + 'px;height:' + (this.radius * (9/200)) + 'px;' +
  'background-color:' + this.color + ';position:absolute;bottom:0px;';
  colorContainer.appendChild(valueColor);

  valueItemContainer.appendChild(currencyContainer);
  valueItemContainer.appendChild(valueContainer);
  valueItemContainer.appendChild(colorContainer);
  valueItemContainer.appendChild(labelContainer);
  valuesInnerContainer.appendChild(valueItemContainer)
  return valuesMainContainer;
}

Slider.prototype.createSlider = function() {
  var slider = this;
  var isClicked = false;
  var mainContainer = this.container;
  var numberOfSliders = mainContainer.getElementsByClassName('sliderButton').length;

  if(!document.getElementById('sliderMainContainer')) {
    var sliderMainContainer = document.createElement('div');
    sliderMainContainer.style.cssText = 'width:' + (slider.radius*2) + 'px;height:' + (slider.radius*2) + 'px;'+
    'position:relative;float:left;';
    sliderMainContainer.id = 'sliderMainContainer';
  } else {
    var sliderMainContainer = document.getElementById('sliderMainContainer');
  }

  var sliderContainer = document.createElement('div');
  sliderContainer.style.cssText = 'width:' + (slider.radius*2) + 'px;height:' + slider.radius*2 + 'px;position:absolute;';
  sliderContainer.className = 'sliderContainer';
  sliderContainer.id = 'sliderContainer' + numberOfSliders;


  var sliderButton = document.createElement('div');
  sliderButton.style.cssText = 'background:#ededed;background-image:linear-gradient(180deg, white, #ededed);'+
  'width:' + this.buttonSize + 'px;height:' + this.buttonSize + 'px;border-radius:50%;position:absolute;z-index:200;'+
  'border:' + Math.floor(this.buttonSize * 0.05) + 'px solid #c6c6c6;';
  sliderButton.className = 'sliderButton';
  sliderButton.id = 'sliderButton' + numberOfSliders;

  var radius = slider.radius - (numberOfSliders * this.buttonSize);
  sliderMainContainer.appendChild(slider.addProgressElements(radius, numberOfSliders * this.buttonSize, numberOfSliders));
  sliderContainer.appendChild(sliderButton);
  sliderMainContainer.appendChild(sliderContainer);

  var values = slider.createValues(numberOfSliders+1);

  if(!document.getElementById('valuesMainContainer')) {
    mainContainer.appendChild(values);
  }
  if(!document.getElementById('sliderMainContainer')) {
    mainContainer.appendChild(sliderMainContainer);
  }

  var angle = 0;
  var lastAngle = 1;
  var left = 1;
  var right = 0;
  var X, Y;
  var stepInDegrees = 360 / ((slider.maxValue - slider.minValue) / slider.step);

  sliderButton.style.left = slider.radius - this.buttonSize/2 + 'px';
  sliderButton.style.top = (numberOfSliders * this.buttonSize) + (this.padding * (numberOfSliders+1)) + 'px';

  mainContainer.style.backgroundImage = 'linear-gradient(180deg, #f9f9f9, #e5e5e5)';

  if (/Mobi/.test(navigator.userAgent)) {
    var events = {
      ondown: 'touchstart',
      onup: 'touchend',
      onmove: 'touchmove'
    };
  } else {
    var events = {
      ondown: 'mousedown',
      onup: 'mouseup',
      onmove: 'mousemove'
    };
  }

  sliderButton.addEventListener(events.ondown, onMouseDown, false);
  function onMouseDown(e) {
    if (/Mobi/.test(navigator.userAgent)) {
      e.preventDefault();
    }
    e.stopPropagation();
    var containers = mainContainer.getElementsByClassName('sliderContainer');
    for(var i = 0; i < containers.length; i++) {
      containers[i].style.removeProperty('z-index');
    }
    isClicked = true;
    e.target.parentElement.style.zIndex = 199;
    e.target.parentElement.addEventListener(events.onmove, onMouseMove);
  };

  document.addEventListener(events.onup, onMouseUp);
  function onMouseUp(e) {
    isClicked = false;
    var containers = mainContainer.getElementsByClassName('sliderContainer');
    for(var i = 0; i < containers.length; i++) {
      containers[i].removeEventListener(events.onmove, onMouseMove);
    }
  };
  function onMouseMove(e) {
    if (/Mobi/.test(navigator.userAgent)) {
      e.preventDefault();
    }
    if(isClicked) {
      var touch;
      if(e.touches) {
        touch = e.touches[0];
      }
      var pos_x = e.pageX || touch.pageX;
      var pos_y = e.pageY || touch.pageY;
      var mousePosX = pos_x - mainContainer.offsetLeft - sliderMainContainer.offsetLeft -
      (slider.padding * numberOfSliders) - slider.buttonSize;
      var mousePosY = pos_y - mainContainer.offsetTop - sliderMainContainer.offsetTop -
      (slider.padding * numberOfSliders) - slider.buttonSize;
      var arctangent = Math.atan2(mousePosX - radius, mousePosY - radius);
      angle = -arctangent/(Math.PI/180) + 180;
      
      if(angle % stepInDegrees > stepInDegrees/2) {
        angle = (Math.floor(angle/stepInDegrees) + 1) * stepInDegrees;
      } else {
        angle = Math.floor(angle/stepInDegrees) * stepInDegrees;
      }

      X = Math.round((radius - slider.buttonSize/2 - (slider.padding * (numberOfSliders+1))) * Math.sin(angle*Math.PI/180));
      Y = Math.round((radius - slider.buttonSize/2 - (slider.padding * (numberOfSliders+1))) * -Math.cos(angle*Math.PI/180));

      if((angle - lastAngle) > 180 || (lastAngle - angle) > 180) {
        return;
      }

      document.getElementById('value'+(numberOfSliders+1)).innerHTML = Math.round((angle/360) * slider.maxValue);
      sliderButton.style.left = X + radius + numberOfSliders*slider.buttonSize - slider.buttonSize/2 + 'px';
      sliderButton.style.top = Y + radius + numberOfSliders*slider.buttonSize - slider.buttonSize/2 + 'px';

      document.getElementById('backgroundLeftOverStatic' + numberOfSliders).style.display = angle > 180 ? 'none' : 'block';
      document.getElementById('backgroundRightOverStatic' + numberOfSliders).style.display = angle > 180 ? 'block' : 'none';

      document.getElementById('backgroundOver' + numberOfSliders).style.transform = 'rotate(' + angle + 'deg)';
      document.getElementById('backgroundOver' + numberOfSliders).style.msTransform = 'rotate(' + angle + 'deg)';

      lastAngle = angle;
    }
  };
}
