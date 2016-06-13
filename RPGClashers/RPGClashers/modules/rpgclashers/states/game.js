/// <reference path="preload.js" />
/// <reference path="phaser - Copy.js" />


define([
    "Phaser",


], function (Phaser) {
      
   
    var sprite;
    var cursors;
    var walkSpeed = 10;
    var positionChange = 2;
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

            this.sprite.animations.add('walkRight', [143, 144, 145, 146, 147, 148, 149, 150, 151]);
            this.sprite.animations.add('walkLeft', [117, 118, 119, 120, 121, 122, 123, 124, 125]);
            this.sprite.animations.add('walkUp', [104, 105, 106, 107, 108, 109, 110, 111, 112]);
            this.sprite.animations.add('walkDown', [130,131,132,133,134,135,136,137,138]);
            
            this.cursors = this.game.input.keyboard.createCursorKeys();

            this.camera.follow(this.sprite, Phaser.Camera.FOLLOW_LOCKON);

            //this.game.state.start("GameOver");
        },

        update: function () {
            if (this.cursors.left.isDown) {
                this.sprite.animations.play('walkLeft', walkSpeed, true);
                this.sprite.x -= positionChange;
            } else if (this.cursors.right.isDown) {
                this.sprite.animations.play('walkRight', walkSpeed, true);
                this.sprite.x += positionChange;
            } else if (this.cursors.up.isDown) {
                this.sprite.animations.play('walkUp', walkSpeed, true);
                this.sprite.y -= positionChange;
            } else if (this.cursors.down.isDown) {
                this.sprite.animations.play('walkDown', walkSpeed, true);
                this.sprite.y += positionChange;
            } else {
                this.sprite.animations.stop();
            }
           
        }
    };

    return GameState;

}); 