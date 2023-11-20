
// Elements and their respective data
const aboutOne = document.getElementById('main-about1');
const storedText1 = aboutOne.innerHTML;
const about = document.getElementById('about').innerHTML;

let isAlternate = false; // Track the current state

// Function to handle mouseover and mouseout events
function handleMouseOver(element) {
  if (!isAlternate) {
    element.innerHTML = about;
  } else {
    element.innerHTML = storedText1;
  }
}

function handleMouseLeave(element) {
  if (!isAlternate) {
    element.innerHTML = storedText1;
  } else {
    element.innerHTML = about;
  }
}

// Function to toggle content on click
function handleClick(element) {
  if (!isAlternate) {
    element.innerHTML = about;
  } else {
    element.innerHTML = storedText1;
  }
  isAlternate = !isAlternate; // Toggle the state
}

// Add event listeners
aboutOne.addEventListener('mouseover', () => handleMouseOver(aboutOne));
aboutOne.addEventListener('mouseleave', () => handleMouseLeave(aboutOne));
aboutOne.addEventListener('click', () => handleClick(aboutOne));


///////////

// const storedText1 = document.getElementById('main-about1').innerHTML;
// const aboutOne = document.getElementById('main-about1');
// const about = document.getElementById('about').innerHTML;

// // 👇️ Change text content on mouseover
// aboutOne.addEventListener('mouseover', function handleMouseOver() {
//   document.getElementById('main-about1').innerHTML = about;
// });


// // 👇️ Change text content back on mouseout
// aboutOne.addEventListener('mouseleave', function handleMouseLeave() {
//     document.getElementById('main-about1').innerHTML = storedText1;
// });

///////////////////////////


const aboutTwo = document.getElementById('main-about2');
const storedText2 = aboutTwo.innerHTML;
const about2 = document.getElementById('about-two').innerHTML;
let isAlternate2 = false;

function handleMouseOver2(element) {
  if (!isAlternate2) {
    element.innerHTML = about2;
  } else {
    element.innerHTML = storedText2;
  }
}

function handleMouseLeave2(element) {
  if (!isAlternate2) {
    element.innerHTML = storedText2;
  } else {
    element.innerHTML = about2;
  }
}

function handleClick2(element) {
  if (!isAlternate2) {
    element.innerHTML = about2;
  } else {
    element.innerHTML = storedText2;
  }
  isAlternate2 = !isAlternate2;
}

aboutTwo.addEventListener('mouseover', () => handleMouseOver2(aboutTwo));
aboutTwo.addEventListener('mouseleave', () => handleMouseLeave2(aboutTwo));
aboutTwo.addEventListener('click', () => handleClick2(aboutTwo));

// const storedText2 = document.getElementById('main-about2').innerHTML;
// const aboutTwo = document.getElementById('main-about2');
// const about2 = document.getElementById('about-two').innerHTML;

// // 👇️ Change text content on mouseover
// aboutTwo.addEventListener('mouseover', function handleMouseOver() {
//   document.getElementById('main-about2').innerHTML = about2;
// });

// // 👇️ Change text content back on mouseout
// aboutTwo.addEventListener('mouseleave', function handleMouseLeave() {
//     document.getElementById('main-about2').innerHTML = storedText2;
// });


///////////////////

const aboutThree = document.getElementById('main-about3');
const storedText3 = aboutThree.innerHTML;
const about3 = document.getElementById('about-three').innerHTML;
let isAlternate3 = false;

function handleMouseOver3(element) {
  if (!isAlternate3) {
    element.innerHTML = about3;
  } else {
    element.innerHTML = storedText3;
  }
}

function handleMouseLeave3(element) {
  if (!isAlternate3) {
    element.innerHTML = storedText3;
  } else {
    element.innerHTML = about3;
  }
}

function handleClick3(element) {
  if (!isAlternate3) {
    element.innerHTML = about3;
  } else {
    element.innerHTML = storedText3;
  }
  isAlternate3 = !isAlternate3;
}

aboutThree.addEventListener('mouseover', () => handleMouseOver3(aboutThree));
aboutThree.addEventListener('mouseleave', () => handleMouseLeave3(aboutThree));
aboutThree.addEventListener('click', () => handleClick3(aboutThree));


// const storedText3 = document.getElementById('main-about3').innerHTML;
// const aboutThree = document.getElementById('main-about3');
// const about3 = document.getElementById('about-three').innerHTML;

// // 👇️ Change text content on mouseover
// aboutThree.addEventListener('mouseover', function handleMouseOver() {
//   document.getElementById('main-about3').innerHTML = about3;
// });

// // 👇️ Change text content back on mouseout
// aboutThree.addEventListener('mouseleave', function handleMouseLeave() {
//     document.getElementById('main-about3').innerHTML = storedText3;
// });

//////////////////


const aboutFour = document.getElementById('main-about4');
const storedText4 = aboutFour.innerHTML;
const about4 = document.getElementById('about-four').innerHTML;
let isAlternate4 = false;

function handleMouseOver4(element) {
  if (!isAlternate4) {
    element.innerHTML = about4;
  } else {
    element.innerHTML = storedText4;
  }
}

function handleMouseLeave4(element) {
  if (!isAlternate4) {
    element.innerHTML = storedText4;
  } else {
    element.innerHTML = about4;
  }
}

function handleClick4(element) {
  if (!isAlternate4) {
    element.innerHTML = about4;
  } else {
    element.innerHTML = storedText4;
  }
  isAlternate4 = !isAlternate4;
}

aboutFour.addEventListener('mouseover', () => handleMouseOver4(aboutFour));
aboutFour.addEventListener('mouseleave', () => handleMouseLeave4(aboutFour));
aboutFour.addEventListener('click', () => handleClick4(aboutFour));


// const storedText4 = document.getElementById('main-about4').innerHTML;
// const aboutFour = document.getElementById('main-about4');
// const about4 = document.getElementById('about-four').innerHTML;

// // 👇️ Change text content on mouseover
// aboutFour.addEventListener('mouseover', function handleMouseOver() {
//   document.getElementById('main-about4').innerHTML = about4;
// });

// // 👇️ Change text content back on mouseout
// aboutFour.addEventListener('mouseleave', function handleMouseLeave() {
//     document.getElementById('main-about4').innerHTML = storedText4;
// });