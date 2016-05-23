define([
    "Phaser",
    "units/player",
    "units/bomb"
], function (Phaser, Player, Bomb) {

    var GameState = function (game) {

    };

    GameState.prototype = {

        constructor: GameState,

        create: function () {
            this.game.state.start("GameOver");
        },

        update: function () {

        },

      
    };

    return GameState;

}); 