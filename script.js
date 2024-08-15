function initEventListeners() {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // 320: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
    },
  });

  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");
  const burgerMenu = document.getElementById("burgerMenu");
  const drawer = document.getElementById("drawer");
  const closeDrawer = document.getElementById("closeDrawer");
  const blurOverlay = document.getElementById("blurOverlay");
  const contentToBlur = document.getElementById("contentToBlur");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop || drawer.classList.contains("open")) {
      navbar.classList.add("hide-navbar");
    } else {
      navbar.classList.remove("hide-navbar");
    }
    lastScrollTop = scrollTop;
  });

  burgerMenu.addEventListener("click", function () {
    navbar.classList.add("hide-navbar");
    drawer.classList.add("open");
    blurOverlay.classList.add("active");
    contentToBlur.classList.add("blurred");
  });

  closeDrawer.addEventListener("click", function () {
    drawer.classList.remove("open");
    navbar.classList.remove("hide-navbar");
    blurOverlay.classList.remove("active");
    contentToBlur.classList.remove("blurred");
  });

  document.addEventListener("click", function (e) {
    if (!drawer.contains(e.target) && !burgerMenu.contains(e.target)) {
      drawer.classList.remove("open");
      navbar.classList.remove("hide-navbar");
      blurOverlay.classList.remove("active");
      contentToBlur.classList.remove("blurred");
    }
  });
}

includeHTML(initEventListeners);
