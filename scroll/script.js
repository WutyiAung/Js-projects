
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  var linksHeight = links.getBoundingClientRect().height;
  var containerHeight = linksContainer.getBoundingClientRect().height;

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0; 
  }
});

// ********** fixed navbar ************

var navbar = document.getElementById("nav");
var topLink = document.querySelector(".top-link");

window.addEventListener("scroll",function(){
    var scrollHeight = this.window.scrollY ;
    var navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})


// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   const navHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navHeight) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }
//   // setup back to top link

//   if (scrollHeight > 500) {
//     console.log("helo");

//     topLink.classList.add("show-link");
//   } else {
//     topLink.classList.remove("show-link");
//   }
// });

// // ********** smooth scroll ************
// // select links

    var scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
        link.addEventListener("click",(e) => {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);
            const position = element.offsetTop ;
            
            window.scrollTo({
                left : 0,
                top : position,
            })
            linksContainer.style.height = 0
        })
    });
    
   // const navHeight = navbar.getBoundingClientRect().height;
        // const containerHeight = linksContainer.getBoundingClientRect().height;
//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeight;

//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     if (navHeight > 82) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // close
//     linksContainer.style.height = 0;
//   });
// });
// // calculate heights
