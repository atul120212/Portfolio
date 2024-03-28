function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });

  gsap.set("#text", {
    // Set initial state
    strokeDashoffset: 706, // Set initial stroke-dashoffset value
    strokeDasharray: 706, // Set initial stroke-dasharray value
  });
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    //create two spans
    let parent = document.createElement("span");
    let child = document.createElement("span");
    //add classes to the spans
    parent.classList.add("parent");
    child.classList.add("child");
    //add text to the spans
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    //clear the text in the element and add the new spans
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from("#loader .child span", {
    x: 100,
    duration: 1.4,
    stagger: 0.2,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-110%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1.4,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      // top: 0,
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomepage();
      },
    });
}

function animateSvg() {
  gsap.to("#text", {
    duration: 1.5,
    strokeDashoffset: 0,
    ease: "linear", // Use linear easing for smooth and constant speed
    onUpdate: function () {
      // Ensure the strokeDasharray stays constant during the animation
      this.target.style.strokeDasharray = "706 706";
    },
  });
  // document.querySelectorAll("#text path").forEach(function (elem) {
  //   elem.childNodes[1].childNodes[0].style.strokeDasharray =
  //     elem.childNodes[1].childNodes[0].getTotalLength() + "px";
  //   elem.childNodes[1].childNodes[0].style.strokeoffset =
  //     elem.childNodes[1].childNodes[0].getTotalLength() + "px";
  // });
  // gsap.to("#text path", {
  //   strokeDashoffset: 0,
  //   // strokeDasharray: 0,
  //   duration: 20,
  //   ease: Expo.easeInOut,
  //   delay: 2,
  // });

  // gsap.from("#text path", {
  //   strokeDasharray: 706,
  //   duration: 7,
  //   ease: "power1.inOut",
  // });
}

function animateHomepage() {
  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to("#home .row img", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateSvg();
      },
    });
}

// function ani() {
//   document.getElementById("c3").style.display = "none";
// }
// function anireturn() {
//   document.getElementById("c3").style.display = "block";
// }
// function toggleDisplay() {
//   var element = document.getElementById("c3");
//   if (element.style.display === "none") {
//     element.style.display = "block";
//   } else {
//     element.style.display = "none";
//   }
// }

// function toggleDisplay(elementId) {
//   var element = document.getElementById(elementId);
//   if (element.style.display === "none") {
//     element.style.display = "block";
//   } else {
//     element.style.display = "none";
//   }
// }

// function toggleDisplay2(elementId, elementId2) {
//   var element = document.getElementById(elementId);
//   var element2 = document.getElementById(elementId2);
//   if (element.style.display === "none" || element2.style.display === "none") {
//     element.style.display = "block";
//     element2.style.display = "block";
//   } else {
//     element.style.display = "none";
//     element2.style.display = "none";
//   }
// }

function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function cardShow() {
  document.querySelectorAll(".cnt").forEach(function (cnt) {
    cnt.addEventListener("mousemove", function(dets) {
      document.querySelector("#cursor").children[
        dets.target.dataset.index
      ].style.opacity = 1;
      document.querySelector("#cursor").children[
        dets.target.dataset.index
      ].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
  });
}

revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
cardShow();
