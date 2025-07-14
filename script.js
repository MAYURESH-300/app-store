document.addEventListener("DOMContentLoaded", function () {
      const searchBtn = document.getElementById("search-btn");
      const searchBar = document.getElementById("search-bar");
      const searchInput = document.getElementById("search-input");
      const menuBtn = document.querySelector(".menu-icon");
      const menuOverlay = document.getElementById("menu-overlay");
      const menuClose = document.querySelector(".menu-close");
      const profileBtn = document.getElementById("profile-btn");

      // 🔽 Show welcome section on first load
      const defaultSection = document.getElementById("default-section");
      if (defaultSection) {
        defaultSection.style.display = "block";
      }

      // 🔽 Toggle search bar
      if (searchBtn && searchBar) {
        searchBtn.addEventListener("click", () => {
          searchBar.classList.toggle("show");
          if (searchInput) {
            searchInput.focus();
          }
        });
      }

      // 🔽 Toggle menu overlay
      if (menuBtn && menuOverlay) {
        menuBtn.addEventListener("click", () => {
          menuOverlay.style.display =
            menuOverlay.style.display === "block" ? "none" : "block";
        });
      }

      // 🔽 Close menu overlay
      if (menuClose && menuOverlay) {
        menuClose.addEventListener("click", () => {
          menuOverlay.style.display = "none";
        });
      }

      // 🔽 Go to profile page
      if (profileBtn) {
        profileBtn.addEventListener("click", () => {
          window.location.href = "login.html";
        });
      }

      // 🔽 Show category section by ID
      window.showCategory = function (id) {
        document.querySelectorAll("main section").forEach((section) => {
          section.style.display = "none";
        });

        const target = document.getElementById(id);
        if (target) {
          target.style.display = "block";
        }

        // Hide welcome section explicitly
        const defaultSection = document.getElementById("default-section");
        if (defaultSection) {
          defaultSection.style.display = "none";
        }

        // Hide menu overlay
        if (menuOverlay) {
          menuOverlay.style.display = "none";
        }
      };

      // 🔍 Search functionality
      if (searchInput) {
        searchInput.addEventListener("input", () => {
          const query = searchInput.value.toLowerCase().trim();

          let anyMatch = false;

          document.querySelectorAll(".section").forEach((section) => {
            const cards = section.querySelectorAll(".app-card");
            let sectionHasMatch = false;

            cards.forEach((card) => {
              const title = card.querySelector("h3").textContent.toLowerCase();
              const desc = card.querySelector("p").textContent.toLowerCase();

              if (title.includes(query) || desc.includes(query)) {
                card.style.display = "block";
                sectionHasMatch = true;
                anyMatch = true;
              } else {
                card.style.display = "none";
              }
            });

            section.style.display = sectionHasMatch ? "block" : "none";
          });

          // If input is empty, show only welcome section
          if (query === "") {
            document.querySelectorAll("main section").forEach((section) => {
              section.style.display = "none";
            });

            const defaultSection = document.getElementById("default-section");
            if (defaultSection) {
              defaultSection.style.display = "block";
            }
          }
        });
      }
    });
