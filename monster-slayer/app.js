new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            var audio = new Audio('./audio/startGame.mp3');
            audio.play();
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var audio = new Audio('./audio/attack.mp3');
            audio.play();
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turnLog(true, `Player hits monster for ${damage}`);
            if (this.checkWin()) {
                return;
            }
            this.monsterDecision();
        },
        specialAttack: function () {
            var audio = new Audio('./audio/playerSpecialAttack.mp3');
            audio.play();
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turnLog(true, `Player hits monster hard for ${damage}`);
            if (this.checkWin()) {
                return;
            }
            this.monsterDecision();
        },
        heal: function () {
            var audio = new Audio('./audio/heal.mp3');
            audio.play();
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turnLog(true, `Player heals himself for 10`);
            this.monsterDecision();
        },
        giveUp: function () {
            var audio = new Audio('./audio/lose.mp3');
            audio.play();
            this.playerHealth = 0;
            this.gameIsRunning = false;
            this.turnLog(true, `Player gives up`);
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.round(Math.random() * max) + 1, min);
        },
        monsterAttacks: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turnLog(false, `Monster hits player for ${damage}`);
            this.checkWin();
        },
        monsterHeals: function () {
            if (this.monsterHealth <= 90) {
                this.monsterHealth += 10;
            } else {
                this.monsterHealth = 100;
            }
            this.turnLog(false, `Monster heals himself for 10`);
        },
        monsterDecision: function () {
            var decision = Math.max(Math.floor(Math.random() * 2) + 1, 1);
            switch (decision) {
                case 1:
                    this.monsterAttacks();
                    break;
                case 2:
                    this.monsterHeals();
                    break;
            }
        },
        checkWin: function () {
            if (this.monsterHealth <= 20 || this.playerHealth <= 20) {
                var audio = new Audio('./audio/toasty.mp3');
                audio.play();
            }
            if (this.monsterHealth <= 0) {
                var audio = new Audio('./audio/win.mp3');
                audio.play();
                this.monsterHealth = 0;
                if (confirm('You won!, new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                var audio = new Audio('./audio/lose.mp3');
                audio.play();
                this.playerHealth = 0;
                if (confirm('You lost!, new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        turnLog: function (isPlayer, text) {
            this.turns.unshift({
                isPlayer: isPlayer,
                text: text
            });
        }
    }
});