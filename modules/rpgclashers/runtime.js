﻿/// <reference path="E:\Projects\RPGClashers\RPGClashers\RPGClashers\vendor/require.js" />

requirejs.config({
    
    paths: {

        'Phaser': "vendor/phaser"
    }
});


require([
    "phasergame",
    "states/boot",
    "states/preload",
    "states/game",
    "states/gameover"
], function (PhaserGame, BootState, PreloadState, GameState, GameOverState) {

    var game = new PhaserGame(960, 640);

    game.state.add("Boot", BootState);
    game.state.add("Preload", PreloadState);
    game.state.add("Game", GameState);
    game.state.add("GameOver", GameOverState);

    game.state.start("Boot");

});