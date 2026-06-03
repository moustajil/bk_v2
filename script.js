"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for in-page links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Simple testimonial carousel (graceful with single card)
  const left = document.querySelector(".testimonials__arrow--left");
  const right = document.querySelector(".testimonials__arrow--right");
  const cards = Array.from(document.querySelectorAll(".testimonial-card"));
  let index = 0;
  function show(i) {
    cards.forEach((c, ci) => (c.style.display = ci === i ? "block" : "none"));
  }
  if (cards.length) show(0);
  left?.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    show(index);
  });
  right?.addEventListener("click", () => {
    index = (index + 1) % cards.length;
    show(index);
  });
});