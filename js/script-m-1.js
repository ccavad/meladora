// dom elements 
const productsTitles = document.querySelectorAll(".products li");
const gridItems = document.querySelectorAll(".products .grid-item");
const searchBoxBtn = document.querySelector(".searchbox-btn");
const searchWindow = document.querySelector(".search-window");
const closeBtn = document.querySelector(".close-btn"); 
const hamburgerBtn = document.querySelector(".hamburger-btn");
const pagesNav = document.querySelector(".pages-nav");
const mobileOverlay = document.querySelector(".mobile-overlay");
const closeMobileNav = document.querySelector(".closeMobileNav");

// event listeners 

function watchBreakpoint(x) {
  if (x.matches) { 
    pagesNav.style.display = "flex";
    mobileOverlay.style.display = "none"
  } else {
    pagesNav.style.display = "none"
  }
}

let breakpoint = window.matchMedia("(min-width: 992px)")
watchBreakpoint(breakpoint) // Call listener function at run time
breakpoint.addListener(watchBreakpoint) // Attach listener function on state changes

hamburgerBtn.addEventListener("click", () => {
  pagesNav.style.display = "flex";
  mobileOverlay.style.display = "block"
})

closeMobileNav.addEventListener("click", () => {
  pagesNav.style.display = "none";
  mobileOverlay.style.display = "none"
})

mobileOverlay.addEventListener("click", () => {
  pagesNav.style.display = "none";
  mobileOverlay.style.display = "none"
})


searchBoxBtn.addEventListener("click", () => {
  searchWindow.style.top = "0";
})

closeBtn.addEventListener("click", () => {
  searchWindow.style.top = "-100%"
})

// products filter 
productsTitles.forEach(title => {
  title.addEventListener("click", (e) => {
    const tag = e.target.dataset.tag
    console.log(tag)
    productsTitles.forEach(title => {
      title.classList.remove("active")
    })
    title.classList.add("active")

    gridItems.forEach(item => item.style.display = "block")
    gridItems.forEach(item => {
      if (item.dataset.tag !== tag) {
        item.style.display = "none"
      }
    })

    if (tag === "hamisi") {
      gridItems.forEach(item => item.style.display = "block")
    }
  })
})

// window scroll 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector(".header-bottom").classList.add("fixed")
    } else {
      document.querySelector(".header-bottom").classList.remove("fixed")
    }
}

// slider 

let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  // keyboardControl: true,
  // allowTouchMove: true,
  // lazy: true,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    paginationClickable: true,
    clickable: true,
  }, 
  // breakpoints: {
  //   514: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //     allowTouchMove: true
  //   },
  //   756: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   }
  // }
});