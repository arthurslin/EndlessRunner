class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      // add object to existing scene
      scene.add.existing(this);
      this.moveSpeed = 1;
    }
    update() {
        if (keyA.isDown && this.x > 20) {
            this.x -= this.moveSpeed;
        }
        if (keyD.isDown && this.x < game.config.width) {
            this.x += this.moveSpeed;
        }
        if (keyW.isDown && this.y > 20) {
            this.y -= this.moveSpeed;
        }
        if (keyS.isDown && this.y < game.config.height) {
            this.y += this.moveSpeed;
        }
    }
  }
  