define([
    "Phaser"
], function (Phaser) {
    var map;
    var layer;
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

            this.game.load.tilemap('testPoke', 'assets/tilemaps/maps/map.json', null, Phaser.Tilemap.TILED_JSON);

            //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

            this.game.load.image('tiles', 'assets/tilemaps/maps/tileSet.png' );

        },

        create: function () {
            //this.game.state.start("Game");
            this.game.stage.backgroundColor = '#787878';



            //  The 'mario' key here is the Loader key given in game.load.tilemap
           this.map = this.game.add.tilemap('testPoke');
           
            //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
            //  The second parameter maps this name to the Phaser.Cache key 'tiles'
           this.map.addTilesetImage('World1Test', 'tiles');

            //  Creates a layer from the World1 layer in the map data.
            //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
           this.layer = this.map.createLayer('ground1');

            //  This resizes the game world to match the layer dimensions
           layer.resizeWorld();
        }
    };

    return PreloadState;

});