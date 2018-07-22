const THEMES = Object.freeze({
  DARK: "dark",
  LIGHT: "light"
});

const app = new Vue({
  el: document.querySelector(".theme"),
  data: {
    auto: true,
    theme: THEMES.DARK,
    themes: THEMES
  },
  methods: {
    changeTheme(theme) {
      this.theme = theme;
      this.auto = false;
    },
    autoTheme() {
      const d = new Date();
      const isDay = d.getHours() < 21 && d.getHours() > 5;
      if (this.auto) {
        if (isDay) {
          this.theme = THEMES.LIGHT;
        } else {
          this.theme = THEMES.DARK;
        }
      }
    }
  },
  watch: {
    theme(nextVal, prevVal) {
      document.body.classList.remove(`js-theme-${prevVal}`);
      document.body.classList.add(`js-theme-${nextVal}`);
    }
  },
  beforeDestroy() {
    clearInterval(this.autoThemeInterval);
  },
  mounted() {
    this.autoTheme();
    this.autoThemeInterval = setInterval(this.autoTheme.bind(this), 1000);
  }
});
