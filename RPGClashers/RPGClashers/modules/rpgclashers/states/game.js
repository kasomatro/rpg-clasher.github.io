﻿/// <reference path="../vendor/phaser.js" />

define([
    "Phaser"
], function (Phaser) {

    var GameState = function (game) {

    };

    GameState.prototype = {

        constructor: GameState,

        create: function () {
            this.game.state.start("GameOver");
          this.game.  
        },
    };

    return GameState;

}); 