
// Submit a link to your GitHub repository that shows a history of multiple meaningful commits with descriptive messages (5) COMPLETE
// Submit a playable link on GitHub pages (5) COMPLETE
// In main.js (or equivalent), include a comment header with your name, game title, approximate hours spent on project, and your creative tilt justification (see below) (5) COMPLETE


// Use multiple Scene classes (dictated by your game's style) (5) COMPLETE
// Properly transition between Scenes and allow the player to restart w/out having to reload the page (5)  COMPLETE
// Include in-game instructions using text or other means (e.g., tooltips, tutorial, diagram, etc.) (5) COMPLETE
// Have some form of player input/control appropriate to your game design (5) COMPLETE
// Include one or more animated characters that use a texture atlas (5) COMPLETE
// Simulate scrolling with a tileSprite (or equivalent means) (5) COMPLETE
// Implement proper collision detection (via Arcade Physics or a custom routine) (5) COMPLETE
// Have looping background music (5) COMPLETE
// Use a minimum of three sound effects for key mechanics, UI, and/or significant events appropriate to your game design (5)
// Use randomness to generate escalating challenge, e.g. terrain, pickups, etc. (5) COMPLETE
// Include some metric of accomplishment that a player can improve over time, e.g., score, survival time, etc. (5) COMPLETE
// Be theoretically endless (5) COMPLETE
// Be playable for at least 15 seconds for a new player of low to moderate skill (5) COMPLETE
// Run without significant crashes or errors (5) COMPLETE
// Include in-game credits for all roles, assets, music, etc. (5) COMPLETE

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 720,
    scene: [Menu, Play, Over, Credits]

}
let game = new Phaser.Game(config);
let keyW, keyA, keyS, keyD, keySpace, kunaiSpeed = 3, lastScore;



