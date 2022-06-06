import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/** main nav animation */

const observe = document.querySelector(".wrapper");

gsap.to(observe, {
  scrollTrigger: {
    trigger: ".me",
    start: "0% 80%",
    end: "0% -20%",
    scrub: 1,
    onEnter: () => {
      gsap.to(".main-nav__item-home", {
        opacity: 0.5,
      });
      gsap.to(".main-nav__item-me", {
        opacity: 1,
      });
    },
    onLeave: () => {
      gsap.to(".main-nav__item-me", {
        opacity: 0.5,
      });
    },
    onEnterBack: () => {
      gsap.to(".main-nav__item-me", {
        opacity: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".main-nav__item-me", {
        opacity: 0.5,
      });
      gsap.to(".main-nav__item-home", {
        opacity: 1,
      });
    },
  },
});
gsap.to(observe, {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "0% 80%",
    end: "0% -20%",
    scrub: 1,
    onEnter: () => {
      gsap.to(".main-nav__item-portfolio", {
        opacity: 1,
      });
      gsap.to(".main-nav__container", {
        color: "#333333",
        borderRight: "5px solid #333333",
      });
    },
    onLeave: () => {
      gsap.to(".main-nav__item-portfolio", {
        opacity: 0.5,
      });
      gsap.to(".main-nav__container", {
        color: "#FCFCFC",
        borderRight: "5px solid #FCFCFC",
      });
    },
    onEnterBack: () => {
      gsap.to(".main-nav__item-portfolio", {
        opacity: 1,
      });
      gsap.to(".main-nav__container", {
        color: "#333333",
        borderRight: "5px solid #333333",
      });
    },
    onLeaveBack: () => {
      gsap.to(".main-nav__item-portfolio", {
        opacity: 0.5,
      });
      gsap.to(".main-nav__container", {
        color: "#FCFCFC",
        borderRight: "5px solid #FCFCFC",
      });
    },
  },
});
gsap.to(observe, {
  scrollTrigger: {
    trigger: ".hobbies",
    start: "0% 80%",
    end: "0% -500%",
    scrub: 1,
    onEnter: () => {
      gsap.to(".main-nav__item-hobbies", {
        opacity: 1,
      });
    },
    onLeave: () => {
      gsap.to(".main-nav__item-hobbies", {
        opacity: 0.5,
      });
      gsap.to(".main-nav__item-contact", {
        opacity: 1,
      });
      gsap.to(".main-nav__container", {
        color: "#333333",
        borderRight: "5px solid #333333",
      });
    },
    onEnterBack: () => {
      gsap.to(".main-nav__item-hobbies", {
        opacity: 1,
      });
      gsap.to(".main-nav__item-contact", {
        opacity: 0.5,
      });
      gsap.to(".main-nav__container", {
        color: "#FCFCFC",
        borderRight: "5px solid #FCFCFC",
      });
    },
    onLeaveBack: () => {
      gsap.to(".main-nav__item-hobbies", {
        opacity: 0.5,
      });
    },
  },
});

/* disappearing words */
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing-page",
    start: "top top",
    end: "+=350",
    scrub: 1,
  },
});

tl.addLabel("disappearing Words start")
  .to(".word-1", { scale: 0.8, opacity: 0 })
  .to(".word-2", { scale: 0.8, opacity: 0 })
  .to(".word-3", { scale: 0.8, opacity: 0 })
  .to(".word-4", { scale: 0.8, opacity: 0 })
  .to(".word-5", { scale: 0.8, opacity: 0 })
  .to(".word-6", { scale: 0.8, opacity: 0 })
  .to(".word-7", { scale: 0.8, opacity: 0 })
  .to(".word-8", { scale: 0.8, opacity: 0 })
  .to(".word-9", { scale: 0.8, opacity: 0 })
  .to(".word-10", { scale: 0.8, opacity: 0 })
  .to(".word-11", { scale: 0.8, opacity: 0 })
  .to(".word-12", { scale: 0.8, opacity: 0 })
  .to(".word-13", { scale: 0.8, opacity: 0 })
  .to(".word-14", { scale: 0.8, opacity: 0 })
  .to(".word-15", { scale: 2 });

/* project carousel */

let count = 0;
const targets = document.querySelectorAll(".portfolio__project");
gsap.set(targets, { xPercent: 100 });
gsap.set(targets[0], { xPercent: 0 });

// Next button
const slideOneNext = () => {
  gsap.fromTo(
    targets[count],
    { xPercent: 0, zIndex: 1 },
    { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: 0 }
  );
  count = count < targets.length - 1 ? ++count : 0;
  gsap.fromTo(
    targets[count],
    { xPercent: 100, zIndex: 2 },
    { duration: 1.2, xPercent: 0 }
  );
};
const nextButton = document.querySelector(".portfolio__btn--next");
nextButton.addEventListener("click", () => {
  slideOneNext();
});
// Previous button
function slideOnePrev() {
  gsap.fromTo(
    targets[count],
    { xPercent: 0, zIndex: 1 },
    { xPercent: 0, zIndex: 0 }
  );
  count = count > 0 ? --count : targets.length - 1;
  gsap.fromTo(
    targets[count],
    { xPercent: -100, zIndex: 1 },
    { duration: 1.2, xPercent: 0, zIndex: 1 }
  );
}
const prevButton = document.querySelector(".portfolio__btn--prev");
prevButton.addEventListener("click", function () {
  slideOnePrev();
});

/* Hobbies horizontal scroll */

const horizontalScrollWrapper = gsap.utils.toArray(".horizontal-scroll");

gsap.to([horizontalScrollWrapper], {
  x: (_, el) => -(el.scrollWidth - window.innerWidth + 40),
  scrollTrigger: {
    trigger: ".hobbies",
    start: "top top",
    end: "500%",
    pin: true,
    scrub: true,
    invalidateOnRefresh: true,
  },
});
