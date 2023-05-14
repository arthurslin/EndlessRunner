class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }
  preload() {
    this.load.audio("music", "./assets/music.mp3"); // background music from https://opengameart.org/content/8-bit-ninja
    this.load.atlas("nin", "./assets/spritesheet.png", "./assets/sprites.json");
    this.load.image("background", "./assets/background.png");
    this.load.image("kunai", "./assets/kunai.png");
    this.load.image("gameover", "./assets/gameover.png");
  }
  create() {
    this.music = this.sound.add("music");
    let mConfig = {
      mute: false,
      volume: 0.5,
      loop: true,
    };
    this.music.play(mConfig);

    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.background = this.add
      .tileSprite(0, 0, 960, 720, "background")
      .setOrigin(0, 0)
      .setScale(1.5);

    this.anims.create({
      key: "running",
      frames: this.anims.generateFrameNames("nin", {
        prefix: "nin",
        start: 1,
        end: 5,
        frames: [1, 2, 3, 4, 5],
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.player = new Player(this, 100, 100, "nin", "nin1").setScale(1.5);

    this.player.play("running");

    this.makeKunais();

    this.time.delayedCall(14500, () => {
      kunaiSpeed += 1;
    });
    this.gameTime = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true}); // code from jjcapellan https://phaser.discourse.group/t/countdown-timer/2471/3
    this.score = 0;
    function onEvent() {
        if (!this.gameOver) {
        this.score += 1
        }
        this.scoreboard.setText("Time Survived:" + this.score + "s");
    }
    
    this.scoreboard = this.add.text(10, 10, "Time Survived:" + this.score + "s", {
      fontSize: 30,
    });

    this.gameOver = false;
    this.overtext = this.add
      .text(game.config.width / 2, game.config.height / 2 - 50, "", {fontSize:45})
      .setOrigin(0.5);
    this.menutext = this.add
      .text(game.config.width / 2, game.config.height / 2 - 50, "", {fontSize:45})
      .setOrigin(0.5);
  }
  update() {
    this.background.tilePositionX += 1;
    this.player.update();
    this.kunaiSpawning();
    this.collisionChecker();
    if (this.gameOver) { 
        this.overtext.setText("GAME OVER")
        lastScore = this.score;
        this.music.stop();
        this.time.delayedCall(2000, () => {
            this.scene.start("overScene");
        })
    }
  }
  checkCollision(player, projectile) {
    // code taken from rocket patrol
    // simple AABB checking
    if (
      player.x < projectile.x + projectile.width * 1.5 &&
      player.x + player.width * 1.5 > projectile.x &&
      player.y < projectile.y + projectile.height * 1.5 &&
      player.height * 1.5 + player.y > projectile.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  removePlayer() {
    this.player.setAlpha(0);
    this.player.canmove = false;
    const p = this.add.particles("gameover");
    const e = p.createEmitter();
    e.setPosition(this.player.x + 15, this.player.y + 15);
    e.setSpeed(50);
    e.explode(50, this.player.x + 15, this.player.y + 15);
    this.player.x = -1000;
    this.player.y = -1000;
  }


  collisionChecker() {
    if (this.checkCollision(this.player, this.kunai1)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai2)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai3)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai4)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai5)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai6)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai7)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai8)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai9)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai10)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai11)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai12)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai13)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai14)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai15)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai16)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai17)) {
        this.removePlayer();
      this.gameOver = true;
    }
    if (this.checkCollision(this.player, this.kunai18)) {
        this.removePlayer();
      this.gameOver = true;
    }
  }

  makeKunais() {
    this.kunai1 = new Kunai(this).setScale(3);
    this.kunai2 = new Kunai(this).setScale(3);
    this.kunai3 = new Kunai(this).setScale(3);
    this.kunai4 = new Kunai(this).setScale(3);
    this.kunai5 = new Kunai(this).setScale(3);
    this.kunai6 = new Kunai(this).setScale(3);
    this.kunai7 = new Kunai(this).setScale(3);
    this.kunai8 = new Kunai(this).setScale(3);
    this.kunai9 = new Kunai(this).setScale(3);
    this.kunai10 = new Kunai(this).setScale(3);
    this.kunai11 = new Kunai(this).setScale(3);
    this.kunai12 = new Kunai(this).setScale(3);
    this.kunai13 = new Kunai(this).setScale(3);
    this.kunai14 = new Kunai(this).setScale(3);
    this.kunai15 = new Kunai(this).setScale(3);
    this.kunai16 = new Kunai(this).setScale(3);
    this.kunai17 = new Kunai(this).setScale(3);
    this.kunai18 = new Kunai(this).setScale(3);
  }

  kunaiSpawning() {
      this.kunai1.update();
      this.kunai2.update();
      this.kunai3.update();
      this.time.delayedCall(15000, () => {
        this.kunai4.update();
        this.kunai5.update();
        this.kunai6.update();
        this.time.delayedCall(15000, () => {
          this.kunai7.update();
          this.kunai8.update();
          this.kunai9.update();
          this.time.delayedCall(15000, () => {
            this.kunai10.update();
            this.kunai11.update();
            this.kunai12.update();
            this.time.delayedCall(15000, () => {
              this.kunai13.update();
              this.kunai14.update();
              this.kunai15.update();
              this.time.delayedCall(15000, () => {
                this.kunai16.update();
                this.kunai17.update();
                this.kunai18.update();
              });
            });
          });
        });
      });
  }
}
