document.addEventListener('DOMContentLoaded',function(){
  var slider = new Slider({
    container: document.getElementById('randomContainer'),
    color: 'red',
    maxValue: 500,
    minValue: 0,
    step: 25,
    radius: 200,
    title: 'Transportation'
  });
  slider.createSlider();
  var slider1 = new Slider({
    container: document.getElementById('randomContainer'),
    color: 'green',
    maxValue: 300,
    minValue: 0,
    step: 25,
    radius: 200,
    title: 'Food'
  });
  slider1.createSlider();
  var slider2 = new Slider({
    container: document.getElementById('randomContainer'),
    color: 'blue',
    maxValue: 500,
    minValue: 0,
    step: 25,
    radius: 200,
    title: 'Insurance'
  });
  slider2.createSlider();
  var slider3 = new Slider({
    container: document.getElementById('randomContainer'),
    color: 'violet',
    maxValue: 400,
    minValue: 0,
    step: 10,
    radius: 200,
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
  backgroundContainer.style.width = radius*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundContainer.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundContainer.style.top = offset + (this.padding * (sliderNumber+1)) + 'px';
  backgroundContainer.style.left = offset + (this.padding * (sliderNumber+1)) + 'px';
  backgroundContainer.style.position = 'absolute';
  backgroundContainer.style.backgroundColor = 'transparent';

  var background = document.createElement('div');
  background.style.width = radius*2 - (this.padding*2 * (sliderNumber+1)) - 2 + 'px';
  background.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) - 2 + 'px';
  background.style.borderRadius = radius + 'px';
  background.style.backgroundColor = this.color;
  background.style.top = 1 + 'px';
  background.style.left = 1 + 'px';
  background.style.position = 'absolute';

  var backgroundOver = document.createElement('div');
  backgroundOver.style.width = radius*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundOver.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundOver.style.backgroundColor = 'transparent';
  backgroundOver.id = 'backgroundOver' + sliderNumber;

  var backgroundLeftOverStatic = document.createElement('div');
  backgroundLeftOverStatic.style.width = radius - (this.padding * (sliderNumber+1)) + 'px';
  backgroundLeftOverStatic.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundLeftOverStatic.style.borderBottomLeftRadius = radius + 'px';
  backgroundLeftOverStatic.style.borderTopLeftRadius = radius + 'px';
  backgroundLeftOverStatic.style.backgroundColor = '#dbdbdb';
  backgroundLeftOverStatic.style.position = 'absolute';
  backgroundLeftOverStatic.style.top = 0 + 'px';
  backgroundLeftOverStatic.style.left = 0 + 'px';
  backgroundLeftOverStatic.id = 'backgroundLeftOverStatic' + sliderNumber;
  
  var backgroundRightOver = document.createElement('div');
  backgroundRightOver.style.width = (radius*2 - (this.padding*2 * (sliderNumber+1)))/2 + 'px';
  backgroundRightOver.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundRightOver.style.borderTopRightRadius = radius + 'px';
  backgroundRightOver.style.borderBottomRightRadius = radius + 'px';
  backgroundRightOver.style.left = radius - (this.padding * (sliderNumber+1)) + 'px';
  backgroundRightOver.style.position = 'absolute';
  backgroundRightOver.style.backgroundColor = '#dbdbdb';

  var backgroundRightOverStatic = document.createElement('div');
  backgroundRightOverStatic.style.width = radius - (this.padding * (sliderNumber+1)) - 1 + 'px';
  backgroundRightOverStatic.style.height = radius*2 - (this.padding*2 * (sliderNumber+1)) - 2 + 'px';
  backgroundRightOverStatic.style.borderTopRightRadius = radius + 'px';
  backgroundRightOverStatic.style.borderBottomRightRadius = radius + 'px';
  backgroundRightOverStatic.style.top = 1 + 'px';
  backgroundRightOverStatic.style.left = radius - (this.padding * (sliderNumber+1));
  backgroundRightOverStatic.style.position = 'absolute';
  backgroundRightOverStatic.style.backgroundColor = this.color;
  backgroundRightOverStatic.style.display = 'none';
  backgroundRightOverStatic.id = 'backgroundRightOverStatic' + sliderNumber;

  var backgroundOverStatic = document.createElement('div');
  backgroundOverStatic.style.width = radius*2 - this.buttonSize*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundOverStatic.style.height = radius*2 - this.buttonSize*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
  backgroundOverStatic.style.borderRadius = radius - this.buttonSize + 'px';
  backgroundOverStatic.style.top = this.buttonSize + 'px';
  backgroundOverStatic.style.left = this.buttonSize + 'px';
  backgroundOverStatic.style.position = 'absolute';
  backgroundOverStatic.style.backgroundColor = 'white';
  
  backgroundOver.appendChild(backgroundRightOver);
  backgroundContainer.appendChild(background);
  backgroundContainer.appendChild(backgroundOver);
  backgroundContainer.appendChild(backgroundLeftOverStatic);
  backgroundContainer.appendChild(backgroundRightOverStatic);
  backgroundContainer.appendChild(backgroundOverStatic);
  var numberOfSteps = (this.maxValue-this.minValue)/this.step;
  var lineStep = 360/numberOfSteps;
  for (var i = 0; i < numberOfSteps; i++) {
    var line = document.createElement('div');
    line.style.width = radius*2 - (this.padding*2 * (sliderNumber+1)) + 'px';
    line.style.height = Math.floor(this.buttonSize * 0.1) + 'px';
    line.style.position = 'absolute';
    line.style.top = (radius*2 - (this.padding*2 * (sliderNumber+1)))/2 + 'px';
    line.style.left = 0 + 'px';
    line.style.backgroundColor = 'white';
    line.style.opacity = '0.5';
    line.style.transform = 'rotate(' + i * lineStep + 'deg)';
    line.style.msTransform = 'rotate(' + i * lineStep + 'deg)';
    backgroundContainer.appendChild(line);
  }
  return backgroundContainer;
}

Slider.prototype.createValues = function(sliderNumber) {
  if(!document.getElementById('valuesMainContainer')) {
    var valuesMainContainer = document.createElement('div');
    valuesMainContainer.style.width = this.radius + 'px';
    valuesMainContainer.style.height = this.radius*2 + 'px';
    valuesMainContainer.style.cssFloat = 'left';
    valuesMainContainer.style.display = 'inline-block';
    valuesMainContainer.id = 'valuesMainContainer';

    var valuesInnerContainerForAllign = document.createElement('div');
    valuesInnerContainerForAllign.id = 'valuesInnerContainerFull';
    valuesInnerContainerForAllign.style.width = '1px';
    valuesInnerContainerForAllign.style.height = this.radius*2 + 'px';
    valuesInnerContainerForAllign.style.display = 'inline-block';
    valuesInnerContainerForAllign.style.verticalAlign = 'middle';
    
    var valuesInnerContainer = document.createElement('div');
    valuesInnerContainer.id = 'valuesInnerContainer';
    valuesInnerContainer.style.width = this.radius-1 + 'px';
    valuesInnerContainer.style.display = 'inline-block';
    valuesInnerContainer.style.verticalAlign = 'middle';
    valuesMainContainer.appendChild(valuesInnerContainerForAllign);
    valuesMainContainer.appendChild(valuesInnerContainer);
  } else {
    var valuesMainContainer = document.getElementById('valuesMainContainer');
    var valuesInnerContainer = document.getElementById('valuesInnerContainer');
  }

  var valueItemContainer = document.createElement('div');
  valueItemContainer.style.width = this.radius + 'px';
  valueItemContainer.style.height = this.radius * (60/200) + 'px';

  var currencyContainer = document.createElement('div');
  currencyContainer.style.height = this.radius * (60/200) + 'px';
  currencyContainer.style.width = this.radius * 26/200 + 'px';
  currencyContainer.style.cssFloat = 'left';
  currencyContainer.style.position = 'relative';

  var currency = document.createElement('div');
  currency.style.fontSize = this.radius * (38/200) + 'px';
  currency.style.position = 'absolute';
  currency.style.bottom = -this.radius * (10/200) + 'px';
  currency.innerHTML = '$';
  currency.style.fontFamily = "Arial,Gadget,sans-serif";
  currency.style.fontWeight = 'bold';
  currencyContainer.appendChild(currency);

  var valueContainer = document.createElement('div');
  valueContainer.style.height = this.radius * (60/200) + 'px';
  valueContainer.style.width = this.radius * (75/200) + 'px';
  valueContainer.style.cssFloat = 'left';
  valueContainer.style.position = 'relative';

  var value = document.createElement('div');
  value.style.fontSize = this.radius * (38/200) + 'px';
  value.style.position = 'absolute';
  value.style.bottom = -this.radius * 10/200 + 'px';
  value.style.fontFamily = "Arial,Gadget,sans-serif";
  value.style.fontWeight = 'bold';
  value.innerHTML = '0';
  value.id = 'value' + sliderNumber;
  valueContainer.appendChild(value);

  var labelContainer = document.createElement('div');
  labelContainer.style.height = this.radius * (60/200) + 'px';
  labelContainer.style.width = this.radius * (60/200) + 'px';
  labelContainer.style.cssFloat = 'left';
  labelContainer.style.position = 'relative';
  labelContainer.style.marginLeft = this.radius * (5/200) + 'px';

  var label = document.createElement('div');
  label.style.fontSize = this.radius * (14/200) + 'px';
  label.style.position = 'absolute';
  label.style.bottom = -this.radius * (3/200) + 'px';
  label.style.fontFamily = "Arial,Gadget,sans-serif";
  label.innerHTML = this.title;
  labelContainer.appendChild(label);

  var colorContainer = document.createElement('div');
  colorContainer.style.height = this.radius * (60/200) + 'px';
  colorContainer.style.width = this.radius * (15/200) + 'px';
  colorContainer.style.cssFloat = 'left';
  colorContainer.style.position = 'relative';

  var valueColor = document.createElement('div');
  valueColor.style.width = this.radius * (15/200) + 'px';
  valueColor.style.height = this.radius * (9/200) + 'px';
  valueColor.style.backgroundColor = this.color;
  valueColor.style.position = 'absolute';
  valueColor.style.bottom = 0;
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
  window.isClicked = false;
  var padding = 10;
  var mainContainer = this.container;
  var numberOfSliders = mainContainer.getElementsByClassName('sliderButton').length;

  if(!document.getElementById('sliderMainContainer')) {
    var sliderMainContainer = document.createElement('div');
    sliderMainContainer.style.width = slider.radius*2 + 'px';
    sliderMainContainer.style.height = slider.radius*2 + 'px';
    sliderMainContainer.style.position = 'relative';
    sliderMainContainer.style.cssFloat = 'left';
    sliderMainContainer.id = 'sliderMainContainer';
  } else {
    var sliderMainContainer = document.getElementById('sliderMainContainer');
  }

  var sliderContainer = document.createElement('div');
  sliderContainer.style.width = slider.radius*2 + 'px';
  sliderContainer.style.height = slider.radius*2 + 'px';
  sliderContainer.style.position = 'absolute';
  sliderContainer.className = 'sliderContainer';
  sliderContainer.id = 'sliderContainer' + numberOfSliders;


  var sliderButton = document.createElement('div');
  sliderButton.style.background = '#ededed';
  sliderButton.style.backgroundImage = 'linear-gradient(180deg, white, #ededed)';
  sliderButton.style.width = this.buttonSize + 'px';
  sliderButton.style.height = this.buttonSize + 'px';
  sliderButton.style.borderRadius = '50%';
  sliderButton.style.position = 'absolute';
  sliderButton.className = 'sliderButton';
  sliderButton.style.zIndex = 200;
  sliderButton.style.borderColor = '#c6c6c6';
  sliderButton.style.borderWidth = Math.floor(this.buttonSize * 0.05) + 'px';
  sliderButton.style.borderStyle = 'solid';
  sliderButton.id = 'sliderButton' + numberOfSliders;

  var radius = slider.radius - (numberOfSliders * this.buttonSize) - sliderButton.clientWidth/2;
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

  sliderButton.style.left = slider.radius - sliderButton.clientWidth/2 + 'px';
  sliderButton.style.top = (numberOfSliders * sliderButton.clientWidth) + (this.padding * (numberOfSliders+1)) + 'px';

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
    window.isClicked = true;
    e.target.parentElement.style.zIndex = 199;
    e.target.parentElement.addEventListener(events.onmove, onMouseMove);
  };

  document.addEventListener(events.onup, onMouseUp);
  function onMouseUp(e) {
    window.isClicked = false;
    var containers = mainContainer.getElementsByClassName('sliderContainer');
    for(var i = 0; i < containers.length; i++) {
      containers[i].removeEventListener(events.onmove, onMouseMove);
    }
  };
  function onMouseMove(e) {
    if (/Mobi/.test(navigator.userAgent)) {
      e.preventDefault();
    }
    if(window.isClicked) {
      var touch;
      if(e.touches) {
        touch = e.touches[0];
      }
      var pos_x = e.pageX || touch.pageX;
      var pos_y = e.pageY || touch.pageY;
      var mousePosX = pos_x - mainContainer.offsetLeft - sliderMainContainer.offsetLeft -
      (slider.padding * numberOfSliders) - sliderButton.clientWidth;
      var mousePosY = pos_y - mainContainer.offsetTop - sliderMainContainer.offsetTop -
      (slider.padding * numberOfSliders) - sliderButton.clientWidth;
      var arctangent = Math.atan2(mousePosX - radius, mousePosY - radius);
      angle = -arctangent/(Math.PI/180) + 180;
      
      if(angle % stepInDegrees > stepInDegrees/2) {
        angle = (Math.floor(angle/stepInDegrees) + 1) * stepInDegrees;
      } else {
        angle = Math.floor(angle/stepInDegrees) * stepInDegrees;
      }

      X = Math.round((radius - sliderButton.clientWidth/2 - (slider.padding * (numberOfSliders+1))) * Math.sin(angle*Math.PI/180));
      Y = Math.round((radius - sliderButton.clientWidth/2 - (slider.padding * (numberOfSliders+1))) * -Math.cos(angle*Math.PI/180));

      if((angle - lastAngle) > 180 || (lastAngle - angle) > 180) {
        return;
      }

      document.getElementById('value'+(numberOfSliders+1)).innerHTML = Math.round((angle/360) * slider.maxValue);
      sliderButton.style.left = X + radius + numberOfSliders*sliderButton.clientWidth - sliderButton.clientWidth/2 + 'px';
      sliderButton.style.top = Y + radius + numberOfSliders*sliderButton.clientWidth - sliderButton.clientWidth/2 + 'px';

      document.getElementById('backgroundLeftOverStatic' + numberOfSliders).style.display = angle > 180 ? 'none' : 'block';
      document.getElementById('backgroundRightOverStatic' + numberOfSliders).style.display = angle > 180 ? 'block' : 'none';

      document.getElementById('backgroundOver' + numberOfSliders).style.transform = 'rotate(' + angle + 'deg)';
      document.getElementById('backgroundOver' + numberOfSliders).style.msTransform = 'rotate(' + angle + 'deg)';

      lastAngle = angle;
    }
  };
}
