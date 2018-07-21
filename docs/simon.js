new Vue({
  el: "#app",
  data: {
    colors: ["red", "green", "yellow", "blue"],
    currentSequence: [],
    colorStatus: {
      red: false,
      green: false,
      yellow: false,
      blue: false
    },
    userClicks: [],
    currentScore: 0
  },
  created() {
    console.log(
      "👋 Simon says check out the microsoft logo when the page loads ✅"
    );
    console.log("🚨 Reload the page to reset the game 👌");
    this.generateSequence();
  },
  computed: {
    logoTitleRed: function() {
      return this.colorStatus.red ? "logo-tile--lightred" : "logo-tile--red";
    },
    logoTitleGreen: function() {
      return this.colorStatus.green
        ? "logo-tile--lightgreen"
        : "logo-tile--green";
    },
    logoTitleYellow: function() {
      return this.colorStatus.yellow
        ? "logo-tile--lightyellow"
        : "logo-tile--yellow";
    },
    logoTitleBlue: function() {
      return this.colorStatus.blue ? "logo-tile--lightblue" : "logo-tile--blue";
    }
  },
  methods: {
    generateSequence: function() {
      this.currentSequence.push(
        this.colors[this.getRandomInt(this.colors.length)]
      );
      this.play();
    },
    clickColor: function(color) {
      this.userClicks.push(color);
      if (this.checkCorrect()) {
        this.userClicks = [];
        this.currentScore++;
        console.log(
          `Simon says..."correct!" 🎉 Your score is`,
          this.currentScore
        );
        this.lightUp();
        this.generateSequence();
      }
    },
    getRandomInt: function(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    timer: function(ms) {
      return new Promise(res => setTimeout(res, ms));
    },
    checkCorrect: function() {
      let matching = true;
      for (let i = 0; i < this.currentSequence.length; i++) {
        if (this.userClicks[i] !== this.currentSequence[i]) {
          matching = false;
          break;
        }
      }
      return matching;
    },
    play: async function() {
      await this.timer(2000);
      for (var i = 0; i < this.currentSequence.length; i++) {
        this.colorStatus[this.currentSequence[i]] = true;
        await this.timer(1000);
        this.colorStatus[this.currentSequence[i]] = false;
        await this.timer(500);
      }
    },
    lightUp: async function() {
      this.colorStatus.red = true;
      this.colorStatus.green = true;
      this.colorStatus.yellow = true;
      this.colorStatus.blue = true;
      await this.timer(1000);
      this.colorStatus.red = false;
      this.colorStatus.green = false;
      this.colorStatus.yellow = false;
      this.colorStatus.blue = false;
    }
  }
});
