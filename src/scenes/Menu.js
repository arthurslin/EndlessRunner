class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {

    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(screenCenterX, screenCenterY / 2 + 50, 'Kunai Runner', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 100, 'Dodge the incoming Kunais!', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 150, 'Use WASD to control the Ninja', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 200, 'Press Space to start', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 500, 'Press W for Credits', {fontSize: 30}).setOrigin(0.5);
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