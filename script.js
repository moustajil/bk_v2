"use strict";

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomColor = () => {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

// Menu Buttons
const features = document.querySelector(".features");
const operations = document.querySelector(".operations");
const testimonials = document.querySelector(".testimonials");
const openAccount = document.querySelector(".open-account");

// Nav Links
const navLinks = document.querySelectorAll(".nav_link");

// Navigation
const navigation = document.querySelector(".navigation");

//H1
const h1 = document.querySelector("h1")

// tabs
const tabs = document.querySelectorAll(".tap")
// Tab Container
const tabContainer = document.querySelectorAll(".content")
// tab content
const tabContent = document.querySelector(".content-desc")


navigation.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

