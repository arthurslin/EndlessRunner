class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {

    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(screenCenterX, screenCenterY / 2, 'Running Ninja', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY, 'Press Space to start', {fontSize: 30}).setOrigin(0.5);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            this.scene.start("playScene");
        }
        
    }
}