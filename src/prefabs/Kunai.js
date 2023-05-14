class Kunai extends Phaser.GameObjects.Sprite {
    constructor(scene, x = game.config.width + 60, y = Phaser.Math.Between(25,game.config.height - 25), texture = "kunai", frame) {
      super(scene, x, y, texture, frame);
      // add object to existing scene
      scene.add.existing(this);
    }
    update() {
        this.x  -= kunaiSpeed;
        if(this.x <= this.width - 60) {
            this.reset();
        }
    }
    reset() {
        this.y = Phaser.Math.Between(25,game.config.height - 25)
        this.x = game.config.width + 60
    }
  }
  