import anime from "./anime.es.js";

// Common animation settings
const commonSettings = {
  easing: "easeInOutQuad",
  duration: 500,
};

// Animation configuration objects
const animations = {
  titleBlog: {
    targets: ".titleFloat",
    translateY: [-200, 0],
    ...commonSettings,
  },

  boxList: {
    targets: ".boxList",
    opacity: 1,
    translateY: [100, 0],
    delay: anime.stagger(100, { start: 100 }),
    easing: "easeOutExpo",
  },

  boxProject: {
    targets: ".box-project",
    translateY: [-10, 0],
    opacity: 1,
    delay: anime.stagger(300, { start: 100 }),
    duration: 5000,
  },

  titleProject: {
    targets: ".title-project",
    opacity: 1,
    translateX: [700, 0],
    easing: "easeInOutCirc",
    duration: 1500,
  },

  line: {
    targets: "#line",
    x1: 0,
    easing: "easeInOutSine",
    duration: 800,
    loop: false,
  },
};

// Animation functions using configurations
function animateTitleBlog() {
  anime(animations.titleBlog);
}

function animateBoxList() {
  anime(animations.boxList);
}

function animateBoxProject() {
  anime(animations.boxProject);
}

function animateTitleProject() {
  anime(animations.titleProject);
}

function animateLine() {
  anime(animations.line);
}

function AboutPageAnimation() {
  const elements = {
    swifticon: {
      selector: "#swifticon",
      initialState: { opacity: 0 },
      animation: {
        opacity: 1,
        translateX: [500, 0],
        easing: "easeInOutCirc",
        delay: anime.stagger(200, { start: 5000 }),
      },
    },
    logoSubtext: {
      selector: ".logo-subtext",
      initialState: { opacity: 0 },
      animation: {
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 800,
        delay: 5500, // Appears after logo animation
      },
    },
    nickname: {
      selector: "#nickname",
      initialState: { color: "#FFFFFF" },
      animation: {
        color: "#FF10F0",
        easing: "easeInOutQuad",
        delay: 6000,
      },
    },
    myName: {
      selector: ".my-name",
      animation: {
        opacity: 1,
        easing: "easeInOutCirc",
        delay: anime.stagger(500, { start: 500 }),
      },
    },
    profilePic: {
      selector: "#profilepic",
      animation: {
        opacity: [0, 0.5],
        easing: "easeInOutQuad",
        duration: 1000,
      },
    },
    contentArticle: {
      selector: ".contentArticle",
      animation: {
        opacity: 1,
        translateX: [300, 0],
        easing: "easeInOutCirc",
        delay: 5000,
      },
    },
    shineOverlay: {
      selector: ".shine-overlay",
      animation: {
        translateX: ["-100%", "100%"],
        opacity: [0, 0.6, 0],
        easing: "easeInOutSine",
        delay: 6500,
        duration: 1000,
      },
    },
  };

  // Set initial states
  Object.entries(elements).forEach(([key, value]) => {
    if (value.initialState) {
      document.querySelectorAll(value.selector).forEach((element) => {
        Object.assign(element.style, value.initialState);
      });
    }
  });

  // Run animations
  Object.values(elements).forEach((element) => {
    anime({
      targets: element.selector,
      ...element.animation,
    });
  });
}

function articleContent() {
  const contentAnimations = [
    {
      targets: ".contentArticle",
      opacity: 1,
      translateY: [300, 0],
      easing: "easeInOutCirc",
      duration: 1000,
    },
    {
      targets: ".return-arrow",
      opacity: 1,
      translateX: [700, 0],
      easing: "easeInOutQuad",
      delay: 1000,
      duration: 500,
    },
    {
      targets: ".return-text",
      opacity: 1,
      translateX: [-50, 0],
      easing: "easeInOutQuad",
      delay: 1500,
      duration: 200,
    },
    {
      targets: ".shine-overlay",
      translateX: ["-100%", "100%"],
      opacity: [0, 0.6, 0],
      easing: "easeInOutSine",
      delay: 1000,
      duration: 1500,
    },
  ];

  contentAnimations.forEach((animation) => anime(animation));
}

function runAnimations() {
  animateTitleProject();
  animateBoxList();
  animateLine();
  animateBoxProject();
  animateTitleProject();
  AboutPageAnimation();
}

// Event listeners
window.addEventListener("load", function () {
  articleContent();
});

animateTitleBlog();
animateBoxList();

document.addEventListener("DOMContentLoaded", function () {
  let isAnimating = false;

  document.querySelectorAll("a[hx-get]").forEach((link) => {
    link.addEventListener("click", function (event) {
      if (isAnimating) {
        event.preventDefault();
        return;
      }

      isAnimating = true;

      anime({
        targets: "#contentContainer",
        opacity: 0,
        translateY: 200,
        duration: 200,
        easing: "easeInOutQuad",
        complete: function () {
          htmx.trigger(event.target, "htmx:afterRequest");
        },
      });

      event.preventDefault();
    });
  });

  document.body.addEventListener("htmx:afterSwap", function () {
    const newContent = document.querySelector("#contentContainer");
    isAnimating = false;

    anime({
      targets: newContent,
      opacity: 1,
      translateY: 0,
      duration: 500,
      easing: "easeInOutQuad",
      complete: function () {
        isAnimating = false;
      },
    });

    newContent.style.opacity = 0;
    newContent.style.transform = "translateY(20px)";
    runAnimations();
  });
});
