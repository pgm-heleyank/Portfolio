(() => {
  const app = {
    currentFilter: null,
    init() {
      this.cacheElements();
      this.generateUI();
      setInterval(() => {
        this.clock();
      }, 1000);
    },
    cacheElements() {
      console.log("cache");
      this.$tooltoggle = document.querySelector(".tool-toggle");
      this.$toolmodal = document.querySelector(".tools");
      this.$clock = document.querySelector(".clock");
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
    clock() {
      const localeString = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Brussels",
      });
      const time = new Date(localeString);
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      this.$clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    },
  };
  app.init();
})();
