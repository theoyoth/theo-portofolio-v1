const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.to(".overlay h1", { y: -80, opacity: 0, ease: "power4.out", duration: 1 });
tl.to(".overlay p", { y: -60, opacity: 0, ease: "power4.out" });
tl.to(".overlay", {
  top: -1500,
  ease: "sine.out",
});

tl.to(".nav-item", { y: 0, opacity: 1, stagger: 0.4 });

tl.to(".title-page1", {
  opacity: 1,
  x: 0,
  stagger: 0.4,
  ease: "power.out",
});

tl.to(".socmed", { y: 0, opacity: 1, stagger: 0.2 });

// ==================== animate PROJECTS
gsap.to(".projects-title", {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: ".page2",
    start: "-230px top",
    end: "+=200",
    toggleActions: "play resume none none",
  },
});
gsap.to(".web-project", {
  opacity: 1,
  y: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".projects",
    start: "-250px top",
  },
});

// ==================== animate ABOUT
gsap.to(".titlePage3", {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: ".page3",
    start: "top center",
    end: "bottom center",
    toggleActions: "play resume none none",
  },
});
gsap.to(".me-introduction", {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: ".page3-content",
    start: "top center",
    end: "center center",
    toggleActions: "play resume none none",
  },
});
gsap.to(".me-explanation", {
  opacity: 1,
  y: 0,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".page3-content",
    start: "top center",
    end: "center center",
    toggleActions: "play resume none none",
  },
});
gsap.to(".me-skills", {
  opacity: 1,
  x: 0,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".me-introduction",
    start: "center center",
    end: "+=300",
    toggleActions: "play resume none none",
  },
});
gsap.to(".me-designs", {
  opacity: 1,
  x: 0,
  scrollTrigger: {
    trigger: ".me-skills",
    start: "top center",
    end: "bottom center",
    toggleActions: "play resume none none",
  },
});

// GET THE HAMBURGER MENU FOR MOBILE
const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-links");
const navItem = navMenu.querySelectorAll(".nav-item");
const crossMenu = document.getElementById("cross-menu");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.add("nav-links-active");
});
crossMenu.addEventListener("click", function () {
  navMenu.classList.remove("nav-links-active");
});

navItem.forEach((item) => {
  item.addEventListener("click", function () {
    navMenu.classList.remove("nav-links-active");
  });
});

// NAVBAR
// if the navbar more than 600px
function scrollHeader() {
  const navBar = document.getElementById("nav-menu");
  if (window.pageYOffset >= 600) {
    navBar.classList.add("nav-links-overflow");
  } else {
    navBar.classList.remove("nav-links-overflow");
  }
}
window.addEventListener("scroll", scrollHeader);

//message to visitors
const notifICon = document.getElementById("notif-icon");
const messageNotif = document.getElementById("message-notif");

notifICon.addEventListener("click", () => {
  messageNotif.classList.toggle("message-notif-active");
});
