
const storedText1 = document.getElementById('main-about1').innerHTML;
const aboutOne = document.getElementById('main-about1');
const about = document.getElementById('about').innerHTML;

// 👇️ Change text content on mouseover
aboutOne.addEventListener('mouseover', function handleMouseOver() {
  document.getElementById('main-about1').innerHTML = about;
});

// header.classList.add("on-scroll");

// 👇️ Change text content back on mouseout
aboutOne.addEventListener('mouseleave', function handleMouseLeave() {
    document.getElementById('main-about1').innerHTML = storedText1;
});


const storedText2 = document.getElementById('main-about2').innerHTML;
const aboutTwo = document.getElementById('main-about2');
const about2 = document.getElementById('about-two').innerHTML;

// 👇️ Change text content on mouseover
aboutTwo.addEventListener('mouseover', function handleMouseOver() {
  document.getElementById('main-about2').innerHTML = about2;
});

// 👇️ Change text content back on mouseout
aboutTwo.addEventListener('mouseleave', function handleMouseLeave() {
    document.getElementById('main-about2').innerHTML = storedText2;
});

const storedText3 = document.getElementById('main-about3').innerHTML;
const aboutThree = document.getElementById('main-about3');
const about3 = document.getElementById('about-three').innerHTML;

// 👇️ Change text content on mouseover
aboutThree.addEventListener('mouseover', function handleMouseOver() {
  document.getElementById('main-about3').innerHTML = about3;
});

// 👇️ Change text content back on mouseout
aboutThree.addEventListener('mouseleave', function handleMouseLeave() {
    document.getElementById('main-about3').innerHTML = storedText3;
});

const storedText4 = document.getElementById('main-about4').innerHTML;
const aboutFour = document.getElementById('main-about4');
const about4 = document.getElementById('about-four').innerHTML;

// 👇️ Change text content on mouseover
aboutFour.addEventListener('mouseover', function handleMouseOver() {
  document.getElementById('main-about4').innerHTML = about4;
});

// 👇️ Change text content back on mouseout
aboutFour.addEventListener('mouseleave', function handleMouseLeave() {
    document.getElementById('main-about4').innerHTML = storedText4;
});