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
const scrollTopBtn = document.querySelector(".scrollTopBtn");

// event listeners

function watchBreakpoint(x) {
  if (x.matches) {
    pagesNav.style.display = "flex";
    mobileOverlay.style.display = "none";
  } else {
    pagesNav.style.display = "none";
  }
}

let breakpoint = window.matchMedia("(min-width: 992px)");
watchBreakpoint(breakpoint); // Call listener function at run time
breakpoint.addListener(watchBreakpoint); // Attach listener function on state changes

hamburgerBtn.addEventListener("click", () => {
  pagesNav.style.display = "flex";
  mobileOverlay.style.display = "block";
});

closeMobileNav.addEventListener("click", () => {
  pagesNav.style.display = "none";
  mobileOverlay.style.display = "none";
});

mobileOverlay.addEventListener("click", () => {
  pagesNav.style.display = "none";
  mobileOverlay.style.display = "none";
});

searchBoxBtn.addEventListener("click", () => {
  searchWindow.style.top = "0";
});

closeBtn.addEventListener("click", () => {
  searchWindow.style.top = "-100%";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// products filter
productsTitles.forEach((title) => {
  title.addEventListener("click", (e) => {
    const tag = e.target.dataset.tag;
    productsTitles.forEach((title) => {
      title.classList.remove("active");
    });
    title.classList.add("active");

    gridItems.forEach((item) => (item.style.display = "block"));
    gridItems.forEach((item) => {
      if (item.dataset.tag !== tag) {
        item.style.display = "none";
      }
    });

    if (tag === "hamisi") {
      gridItems.forEach((item) => (item.style.display = "block"));
    }
  });
});

// window scroll

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".header-bottom").classList.add("fixed");
    scrollTopBtn.style.display = "block"
  } else {
    document.querySelector(".header-bottom").classList.remove("fixed");
    scrollTopBtn.style.display = "none"
  }
})

window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});

// slider

let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    paginationClickable: true,
    clickable: true,
  },
});
