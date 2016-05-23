define([
    "Phaser"
], function (Phaser) {

    var PreloadState = function (game) {

    };

    PreloadState.prototype = {

        constructor: PreloadState,

        preload: function () {

            var loadingBar = this.add.sprite(this.game.world.centerX,
                this.game.world.centerY,
                "loading");
            loadingBar.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(loadingBar);

        },

        create: function () {
            this.game.state.start("Game");
        }
    };

    return PreloadState;

});