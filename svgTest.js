
// const Test = new Vivus('my_svg', { duration: 200, file: 'hat_Test.svg',start:'manual'},function (myVivus) {
//     myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
//   });
// svgTest.play(-1);

//  var myCallback = function () {};
// let armSlider, footSlider, torsoSlider,headSlider;
var rainSvg = new Vivus('obtRain', {
  type: 'oneByOne',
  duration: 1500,
  start: 'manual'
});
var fanSvg = new Vivus('obtFan', {
  type: 'oneByOne',
  duration: 150,
  start: 'manual'
});

var footSvg = new Vivus('obtFoot', {
  type: 'oneByOne',
  duration: 1500,
  start: 'manual'
});
 var timePlay;

 var humanSvg = new Vivus('obtHuman', {
  type: 'oneByOne',
  duration: 1500,
  start: 'manual'
});

//  var armSvg = new Vivus('myarm', {type: 'oneByOne',duration: timePlay,start: 'manual'});
//  var footSvg = new Vivus('myfoot', {type: 'oneByOne',duration: timePlay,start: 'manual'});
//  var headSvg = new Vivus('myhead', {type: 'oneByOne',duration: timePlay,start: 'manual'});
//  var torsoSvg = new Vivus('mytorso', {type: 'oneByOne',duration: timePlay,file:'torso.svg',start: 'manual'});


 
  function setup() {

  
  // armSlider = createSlider(0, 255, 0);
  // armSlider.position(100, 1535);
  // footSlider = createSlider(0, 255, 0);
  // footSlider.position(100, 1600);
  // headSlider = createSlider(0, 255, 0);
  // headSlider.position(100, 1665);
  // torsoSlider = createSlider(0, 255, 0);
  // torsoSlider.position(100, 1705);

  // const armValue = armSlider.value();
  // const footValue = footSlider.value();
  // const torsoValue = torsoSlider.value();
  // const headvalue = headSlider.value();

    let button1 = select('#submit');
    button1.mousePressed(textSubmit);
  }


  

  function textSubmit() {
    timePlay = 4000;
 
    for (i = 0; i < 7700; i++) {
      humanSvg.next();
      console.log('a');
    }
  }

  
  function RainFunction() {
    var checkBox = document.getElementById("checkrain");
  
    if (checkBox.checked == true){
      for (i = 0; i < 500; i++) {
        timePlay = 140;
       rainSvg.next();
        
      }
    } else {
      for (i = 0; i < 500; i++) {
        timePlay = 140;
        rainSvg.previous();
      }
    }
  }

 
      

  function footFunction() {
    var checkBox = document.getElementById("checkfoot");
  
    if (checkBox.checked == true){
      for (i = 0; i < 500; i++) {
        timePlay = 140;
       footSvg.next();
        
      }
    } else {
      for (i = 0; i < 500; i++) {
        timePlay = 140;
        footSvg.previous();
      }
    }
  }