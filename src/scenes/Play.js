class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }
  preload() {
    this.load.atlas("nin", "./assets/spritesheet.png", "./assets/sprites.json");

  }
  create() {
    
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.anims.create({
        key: "running",
        frames: this.anims.generateFrameNames("nin", {
            prefix: "nin",
            start:1,
            end: 5,
            frames:[1,2,3,4,5]
        }),
        frameRate: 10,
        repeat: -1
    })

    this.player = new Player(
        this,
        100,
        100,
        "nin",
        "nin1"
    )
    this.player.play("running")


  }
  update() {
    this.player.update();
  }
  
}
