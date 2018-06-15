import './styles/master.css';

var nav = document.getElementById("navigation");
var body = document.getElementById("body");
var stuck = false;
var velcro = getDistance();

function getDistance(){
  var topDist = nav.offsetTop;
  return topDist;
}

window.onscroll = function(){
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;

  if((distance <= 0) && !stuck){
    nav.style.position = 'fixed'
    nav.style.top = '0';
    stuck = true;
  } else if (stuck && (offset<=velcro)){
    nav.style.position = 'static';
    stuck = false;
  }
}
