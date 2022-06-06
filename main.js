(() => {
  const app = {
    currentFilter: null,
    init() {
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      console.log("cache");
      this.$tooltoggle = document.querySelector(".tool-toggle");
      this.$toolmodal = document.querySelector(".tools");
    },
    generateUI() {
      console.log("UI");
      this.toggleTools();
    },
    toggleTools() {
      this.$tooltoggle.addEventListener("click", () => {
        if (this.$toolmodal.classList.contains("view")) {
          this.$toolmodal.classList.remove("view");
        } else {
          this.$toolmodal.classList.add("view");
        }
      });
    },
  };
  app.init();
})();
