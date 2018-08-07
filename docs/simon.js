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
    colorSymbols: {
      red: "❤️",
      green: "💚",
      yellow: "💛",
      blue: "💙"
    },
    userClicks: [],
    currentScore: 0,
    difficulty: 1000
  },
  created() {
    this.generateSequence();
  },
  computed: {
    logoTitleRed: function() {
      return this.colorStatus.red ? "logo-tile--largered" : "logo-tile--red";
    },
    logoTitleGreen: function() {
      return this.colorStatus.green
        ? "logo-tile--largegreen"
        : "logo-tile--green";
    },
    logoTitleYellow: function() {
      return this.colorStatus.yellow
        ? "logo-tile--largeyellow"
        : "logo-tile--yellow";
    },
    logoTitleBlue: function() {
      return this.colorStatus.blue ? "logo-tile--largeblue" : "logo-tile--blue";
    },
    winner: function() {
      return this.currentScore >= 10 ? true : false;
    }
  },
  methods: {
    generateSequence: function() {
      this.currentSequence.push(
        this.colors[this.getRandomInt(this.colors.length)]
      );
      if (this.currentScore > 0) {
        this.play();
      } else {
        console.log(
          `🕵️‍♂️ 🕵️‍♀️ HEY! \n\n\n *whispers* \n\n\nThere is a game inside this webpage... \ntry clicking on the ${
            this.colorSymbols[this.currentSequence[0]]
          } tile on the Microsoft logo to get started!`
        );
        console.log("\n\n\n🚨 Reload the page to reset the game 👌\n\n\n");
      }
    },
    clickColor: function(color) {
      this.userClicks.push(color);
      if (this.checkCorrect()) {
        this.userClicks = [];
        if (this.difficulty > 100) {
          this.difficulty -= 100;
        }
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
      let sequence =
        this.userClicks[this.userClicks.length - 1] ===
        this.currentSequence[this.userClicks.length - 1];
      console.log(
        `${this.userClicks[this.userClicks.length - 1]} ${
          sequence === true ? "👍" : "👎"
        }`
      );
      if (!sequence) {
        this.reset();
      }
      for (let i = 0; i < this.currentSequence.length; i++) {
        if (this.userClicks[i] !== this.currentSequence[i]) {
          matching = false;
          break;
        }
      }
      return matching;
    },
    reset: function() {
      console.log(`
      😢
      Oh no! Game Over! Your score was ${this.currentScore} 
      `);
      this.currentSequence = [];
      this.userClicks = [];
      this.currentScore = 0;
      this.difficulty = 1000;
      this.generateSequence();
    },
    play: async function() {
      await this.timer(2000);
      for (var i = 0; i < this.currentSequence.length; i++) {
        this.colorStatus[this.currentSequence[i]] = true;
        await this.timer(this.difficulty);
        this.colorStatus[this.currentSequence[i]] = false;
        await this.timer(this.difficulty / 2);
      }
    },
    lightUp: async function() {
      let t = 150;
      this.colorStatus.red = true;
      await this.timer(t);
      this.colorStatus.red = false;
      this.colorStatus.green = true;
      await this.timer(t);
      this.colorStatus.green = false;
      this.colorStatus.yellow = true;
      await this.timer(t);
      this.colorStatus.yellow = false;
      this.colorStatus.blue = true;
      await this.timer(t);
      this.colorStatus.blue = false;
      this.colorStatus.red = true;
      await this.timer(t);
      this.colorStatus.red = false;
    }
  }
});
