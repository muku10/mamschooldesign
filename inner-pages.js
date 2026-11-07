function bindPageInteractions() {
  const menu = document.getElementById("schoolMenuButton");
  const schoolMenu = document.querySelector(".school-menu-home");
  const toggle = document.getElementById("menuButton");
  const mobile = document.getElementById("mobileMenu");

  menu?.addEventListener("click", () => {
    const open = schoolMenu.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });

  document.addEventListener("click", (event) => {
    if (schoolMenu && !schoolMenu.contains(event.target)) {
      schoolMenu.classList.remove("open");
      menu?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      schoolMenu?.classList.remove("open");
      menu?.setAttribute("aria-expanded", "false");
      mobile?.classList.add("hidden");
      toggle?.setAttribute("aria-expanded", "false");
      if (toggle) toggle.querySelector("span").textContent = "≡";
    }
  });

  toggle?.addEventListener("click", () => {
    const open = mobile.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", !open);
    toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    toggle.querySelector("span").textContent = open ? "≡" : "×";
  });

  mobile?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobile.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.querySelector("span").textContent = "≡";
    });
  });

  document.querySelectorAll("[data-subscribe]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.querySelector("[data-form-message]").textContent = "Thank you for subscribing.";
      form.reset();
    });
  });

  document.querySelector("[data-contact]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.querySelector("[data-sent]").textContent = "Your message has been sent.";
    event.currentTarget.reset();
  });
}

bindPageInteractions();
