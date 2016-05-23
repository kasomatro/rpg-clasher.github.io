define([
    "Phaser"
], function (Phaser) {

    var PreloadState = function (game) {

    };

    PreloadState.prototype = {

        constructor: PreloadState,

        preload: function () {

        },

        create: function () {
            this.game.state.start("Game");
        }
    };

    return PreloadState;

});