// Get date

let d = new Date();
let y = d.toLocaleDateString('en-US');
var today = document.getElementById('tDate').innerText = y;


//Get time
myTimer();
var timeVar = setInterval(myTimer, 1000);

function myTimer() {
let d = new Date();
//let t = d.toLocaleTimeString();
let t = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
var tTime = document.getElementById('tTime').innerText = t;
}







// Cube transformation
let cube = document.querySelector('.cube');
let radioGroup = document.querySelector('.radio-group');
let currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );