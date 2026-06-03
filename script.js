"use strict";

// Menu 
const features = document.querySelector(".features");
const operations = document.querySelector(".operations");
const testimonials = document.querySelector(".testimonials");



const btnLearnMore = document.querySelector(".button-secondary");
const featuresSection = document.querySelector(".features");

// Scroll to features section on "Learn More" button click
btnLearnMore.addEventListener("click", function (e) {
  e.preventDefault();
  featuresSection.scrollIntoView({
    behavior: "smooth",
  });
});

// Events Propgation 
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

features.addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Features clicked");
}
);

operations.addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Operations clicked");
}
);

testimonials.addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
    console.log("Testimonials clicked");
  }
);