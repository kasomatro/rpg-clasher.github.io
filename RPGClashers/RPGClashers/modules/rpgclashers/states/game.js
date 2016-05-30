/// <reference path="../vendor/phaser.js" />


define([
    "Phaser",


], function (Phaser) {
      
   
    var sprite;
    var cursors;
    var GameState = function (game) {

    };

    GameState.prototype = {

        constructor: GameState,
        
        create: function () {
            this.game.stage.backgroundColor = '#787878';
            
            this.map = this.game.add.tilemap('testPoke');

            this.map.addTilesetImage('PathAndObjects', 'tiles');
            this.layer = this.map.createLayer('ground1');
            this.layer.resizeWorld();
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.sprite = this.game.add.sprite(300, 200, 'skeleton');

            this.sprite.animations.add('walk', [143,144,145,146,147,148,149,150,151]);

            this.sprite.animations.play('walk', 30, true);

            //this.game.state.start("GameOver");
        },

        //update: function () {
        //    if (this.cursors.up.isDown) {
        //        sprite.position.y -= 8;

        //    }
        //}
    };

    return GameState;

}); 