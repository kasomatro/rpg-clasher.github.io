define([
    "Phaser"
], function (Phaser) {

    var BootState = function (game) {

    };

    BootState.prototype = {

        constructor: BootState,

        preload: function () {
            
        },

        create: function () {
            this.game.state.start("Preload");
        }
    };

    return BootState;

});