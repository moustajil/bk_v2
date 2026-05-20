"use strict";

const navLinks = document.querySelectorAll(".nav__link");
const openAccountBtn = document.querySelector(".nav__btn-open-account");
const operationTabs = document.querySelectorAll(".operations__tab");
const sliderDots = document.querySelectorAll(".slider__dot");
const leftSliderBtn = document.querySelector(".slider__btn--left");
const rightSliderBtn = document.querySelector(".slider__btn--right");


const btnLearnMore = document.querySelector(".button-secondary");
const featuresSection = document.querySelector(".features");

// Scroll to features section on "Learn More" button click
btnLearnMore.addEventListener("click", function (e) {
  e.preventDefault();
  featuresSection.scrollIntoView({
    behavior: "smooth",
  });
});