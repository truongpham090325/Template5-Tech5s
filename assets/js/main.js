AOS.init();

// Scroll Header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  // Kiểm tra vị trí cuộn
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// End Scroll Header

// Mobile Sidebar Menu Logic
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function openSidebar() {
  mobileSidebar.classList.remove("-translate-x-full");
  sidebarOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeSidebar() {
  mobileSidebar.classList.add("-translate-x-full");
  sidebarOverlay.classList.add("hidden");
  document.body.style.overflow = ""; // Restore scrolling
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openSidebar);
}

if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", closeSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}
// End Mobile Sidebar Menu Logic

// Slide
const swiperThumbsSection5 = new Swiper(".swiper-section-5", {
  spaceBetween: 32,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2Section5 = new Swiper(".swiper2-section-5", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiperThumbsSection5,
  },
  navigation: {
    nextEl: ".section-5 .swiper-button-next",
    prevEl: ".section-5 .swiper-button-prev",
  },
  // Ensure only 1 slide is visible on specified screen ranges
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1240: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const swiperSection7 = new Swiper(".swiper-section-7", {
  slidesPerView: 1, // Mặc định 1 cột cho Mobile
  spaceBetween: 32, // Khoảng cách giữa các slide
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  // Cấu hình chia 3 cột trên Desktop
  breakpoints: {
    1408: {
      slidesPerView: 3, // Hiện 3 khối trên màn hình lớn
      spaceBetween: 30,
    },
    1240: {
      slidesPerView: 3, // Hiện 3 khối trên màn hình lớn
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2, // Hiện 2 khối trên Tablet
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: ".section-7 .swiper-button-next",
    prevEl: ".section-7 .swiper-button-prev",
  },
  pagination: {
    el: ".section-7 .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <div></div>
        </span>
      `;
    },
  },
});

const swiperSection11 = new Swiper(".swiper-section-11", {
  slidesPerView: 1, // Mặc định 1 cột cho Mobile
  spaceBetween: 30, // Khoảng cách giữa các slide
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // Cấu hình chia 3 cột trên Desktop
  breakpoints: {
    1408: {
      slidesPerView: 3, // Hiện 3 khối trên màn hình lớn
      spaceBetween: 30,
    },
    1240: {
      slidesPerView: 3, // Hiện 3 khối trên màn hình lớn
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2, // Hiện 2 khối trên Tablet
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".section-11 .swiper-button-next",
    prevEl: ".section-11 .swiper-button-prev",
  },
  pagination: {
    el: ".section-11 .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <div></div>
        </span>
      `;
    },
  },
});

const swiperSection10 = new Swiper(".swiper-section-10", {
  slidesPerView: 1, // Mặc định 1 cột cho Mobile
  spaceBetween: 0, // Khoảng cách giữa các slide
  loop: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },

  // Cấu hình chia 4 cột trên Desktop
  breakpoints: {
    1408: {
      slidesPerView: 4, // Hiện 4 khối trên màn hình lớn
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3, // Hiện 3 khối trên màn hình lớn
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3, // Hiện 3 khối trên Tablet
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2, // Hiện 2 khối trên Tablet
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".section-10 .swiper-button-next",
    prevEl: ".section-10 .swiper-button-prev",
  },
  pagination: {
    el: ".section-10 .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <div></div>
        </span>
      `;
    },
  },
});
// End Slide
