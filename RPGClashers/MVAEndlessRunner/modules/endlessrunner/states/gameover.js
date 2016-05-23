define([
    "Phaser"
], function (Phaser) {

    var GameOverState = function (game) {

    };

    GameOverState.prototype = {

        constructor: GameOverState,
       
        create: function () {
            var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY,
                "Game Over", {
                    font: "50px Arial",
                    fill: "#ffaa44",
                    align: "center"
                });
            text.anchor.setTo(0.5, 0.5);
        },

    };

    return GameOverState;

});
