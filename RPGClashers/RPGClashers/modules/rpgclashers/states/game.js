define([
    "Phaser"
], function (Phaser) {

    var GameState = function (game) {

    };

    GameState.prototype = {

        constructor: GameState,

        create: function () {
            this.game.state.start("GameOver");
        },
    };

    return GameState;

}); 