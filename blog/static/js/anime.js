import anime from './anime.es.js';

window.addEventListener('load',function() {
articleContent();
});

function animateFloating() {
anime({
  targets: '.floatting',
  translateY: [5, -5],
  delay: 100,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 600,
  loop: true,
})
}


function animateBoxList() {
anime({
  targets: '.boxList',
  opacity: 1,
  translateY: [100, 0],
  delay: anime.stagger(500, {start: 100}),
  duration: 1000,
  easings: 'easeOutExpo'
});
}

animateFloating();
animateBoxList();

function animateBoxProject() {
anime({
  targets: '.box-project',
  translateY: [-10,0],
  opacity: 1,
  delay: anime.stagger(300,{start: 100}),
  duration: 5000,
})
}

function animateTitleProject(){
anime({
  targets: '.title-project',
  opacity: 1,
  translateX: [700, 0],
  easing: 'easeInOutCirc',
  duration: 1500,
})
}

function animateLine() { 
anime({
    targets: '#line',
    x1: 0,
    easing: 'easeInOutSine',
    duration: 800,
    loop: false
});

}
function logoAnimation() {
  anime({
    targets: '#swifticon',
    opacity: 1,
    translateX: [500, 0],
    easings: 'easeInOutCirc',
    delay: anime.stagger(200, {start: 5000}),
    complete: function(){

    }
  })
}

function TextName(){
  anime({
    targets: '.my-name',
    opacity: 1,
    easings: 'easeInOutCirc',
    delay: anime.stagger(500,{start: 100})
  })
}



function articleContent(){
  anime({
    targets: '.contentArticle',
    opacity: 1,
    translateY: [300, 0],
    easing: 'easeInOutCirc',
    duration: 1000,
  })
  anime({
    targets: '.return-arrow',
    opacity: 1,
    translateX: [700, 0],
    easing: 'easeInOutQuad',
    delay: 1000,
    duration: 500,
  });
  anime({
    targets: '.return-text',
    opacity: 1,
    translateX: [-50, 0],
    easing: 'easeInOutQuad',
    delay: 1500,
    duration: 200,
  });
  anime({
    targets: '.shine-overlay',
    translateX: ['-100%', '100%'], // Move overlay from left to right
    opacity: [0, 0.6, 0], // Fade in and out
    easing: 'easeInOutSine',
    delay: 1000,
    duration: 1500,
  });
}


function runAnimations(){
  animateFloating();
  animateBoxList();
  animateLine();
  animateBoxProject();
  animateTitleProject();
  logoAnimation();
  TextName();
}




document.addEventListener('DOMContentLoaded', function () {
    // Set an animation flag to prevent overlapping animations
    let isAnimating = false;
    // Add a common click event listener to all <a> tags with hx-get attributes
    document.querySelectorAll('a[hx-get]').forEach(link => {
        link.addEventListener('click', function(event) {
            if (isAnimating) {
                event.preventDefault();
                return;
            }
            isAnimating = true;
            // Fade out the existing content
            anime({
                targets: '#contentContainer',
                opacity: 0,
                translateY: 200,
                duration: 200,
                easing: 'easeInOutQuad',
                complete: function() {
                    // Trigger the HTMX request
                    htmx.trigger(event.target, "htmx:afterRequest");
                }
            });

            // Prevent HTMX from immediately handling the click
            event.preventDefault();
        });
    });

    // HTMX after swap event: animate in the new content
    document.body.addEventListener('htmx:afterSwap', function() {
        const newContent = document.querySelector('#contentContainer');
        isAnimating = false;
        anime({
            targets: newContent,
            opacity: 1,
            translateY: 0,
            duration: 500,
            easing: 'easeInOutQuad',
            complete: function() {
                isAnimating = false; // Reset the animation flag after fade-in
            }
        });
        // Reset new content's style for fade-in animation
        newContent.style.opacity = 0;
        newContent.style.transform = 'translateY(20px)';
        runAnimations()
        // Fade in the new content
    });
});

