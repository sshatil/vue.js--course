function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}
Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monstersHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: "",
    };
  },
  computed: {
    monsterHealthBarStyle() {
      return { width: this.monstersHealth + "%" };
    },
    playerHealthBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watcher: {
    playerHealth(value) {
      if (value <= 0 && this.monstersHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monstersHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monstersHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monstersHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const helValue = getRandomValue(8, 20);
      if (this.playerHealth + helValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += helValue;
      }
      this.attackPlayer();
    },
  },
}).mount("#game");
