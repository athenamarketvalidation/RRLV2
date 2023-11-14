const section = document.querySelector("section");
const end = section.querySelector("h1");
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
//Scenes
let scene = new ScrollMagic.Scene({
    duration: 2500,
    triggerElement: intro,
    triggerHook: 0
  })
  // .addIndicators() //remove to remove indicators
  .setPin(intro)
  .addTo(controller);
//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;
scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});
setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 41.66666666666667);
