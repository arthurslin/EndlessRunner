class Over extends Phaser.Scene {
    constructor() {
        super("overScene");
    }
    preload() {

    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(screenCenterX, screenCenterY / 2, "You survived for " + lastScore + " seconds!" , {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 100, 'Press Space to try again', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 200, 'Press W for credits', {fontSize: 30}).setOrigin(0.5);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySpace)) {

            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            this.scene.start("creditScene");
        }
    }
}