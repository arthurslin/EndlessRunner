class Credits extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }
    preload() {

    }
    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(screenCenterX, screenCenterY / 2, "Music created by FoxSynergy" , {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 100, 'Found at https://opengameart.org/content/8-bit-ninja', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 200, 'Art & Game Created by Arthur Lin', {fontSize: 30}).setOrigin(0.5);
        this.add.text(screenCenterX, screenCenterY / 2 + 300, 'Press Space for Menu', {fontSize: 30}).setOrigin(0.5);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            this.scene.start("menuScene");
        }
     
    }
}