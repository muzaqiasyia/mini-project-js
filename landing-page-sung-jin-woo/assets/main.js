/* ===== SCRIPT BAGIAN NAVIGASI BAR ====== */

// === SCRIPT NAVSCROLL === //
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav').style.top = "0";
  } else {
    document.getElementById('nav').style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// === SCRIPT NAVREMOVE ACTION === //
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const hamMenu = document.getElementById('hamburger');
  hamMenu.classList.remove('active');
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// === SCRIPT HAMBURGER MENU === //
let hamburgerMenu = (element) => document.querySelector(element);
hamburgerMenu('.hamburger').addEventListener('click', function() {
  hamburgerMenu('.hamburger').classList.toggle('active');
  hamburgerMenu('.nav-list').classList.toggle('show');
});



/* ===== SCRIPT BAGIAN HOME ====== */

// === SCRIPT TYPING WORDS === //
const typeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type method
typeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if Deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt"> ${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // make a pause at end word
    typeSpeed = this.wait;
    // Set Deleting to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // move to next words
    this.wordIndex++;
    // pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed)
};
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init typeWriter
  new typeWriter(txtElement, words, wait);
}

// let spoiler = confirm('Apakah Anda Yakin Akan Melihat Konten Website Ini...?');
// if (spoiler) {
//   window.location = "https://www.syiainfoku.my.id"
// }else {
//
//   document.write("Baiklah Tetap Disini Saja Ya... :)")
// }



// === SCRIPT SLIDER IMAGES === //
// let counter = 1;
// setInterval(function() {
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 5000);
