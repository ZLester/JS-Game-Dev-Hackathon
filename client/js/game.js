var game = new Phaser.Game(800, 15*16, Phaser.AUTO, 'gameContainer');

var startMenuState = {
  preload: function () {
    // game.stage.backgroundColor = '#666';
    game.load.tilemap('mario', '../assets/levels/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', '../assets/sheets/super_mario.png');
    game.load.image('title', '../assets/images/title.png');
  },
  create: function () {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.map = game.add.tilemap('mario');
    this.map.addTilesetImage('level1Tiles', 'tiles');
    this.layer = this.map.createLayer('World1');
    this.layer.resizeWorld();
    this.layer.wrap = true;
    this.title = game.add.sprite(40, 80, 'title');
    this.title.scale.setTo(0.25,0.25);
    this.cursors = game.input.keyboard.createCursorKeys();

    // this.player = this.game.add.sprite(100, 245, 'player');
    game.physics.arcade.enable(this.title);
    // this.player.body.gravity.y = 1000; 
    // this.player.body.bounce.y = 0.5;
    // this.player.body.collideWorldBounds = true;
    // this.player.scale.setTo(0.4, 0.4);

    // this.platforms = game.add.group();
    // this.platforms.enableBody = true;
    // this.ground = [];
    // for (var i = 0; i < game.world.width; i+=70) {
    //   this.ground.push(this.platforms.create(i, game.world.height - 70, 'ground'));
    // }
    // this.platforms.forEach(function(platform) {
    //   platform.body.immovable = true;
    // });
    
  },
  update: function () {

    if (this.cursors.left.isDown)
    {
        game.camera.x -= 8;
    }
    else if (this.cursors.right.isDown)
    {
        game.camera.x += 8;
    }

    if (this.cursors.up.isDown)
    {
        game.camera.y -= 8;
    }
    else if (this.cursors.down.isDown)
    {
        game.camera.y += 8;
    }
    // this.title.body.velocity.x = 30;

    // for (var i = 0; i < this.ground.length; i++) {
    //   game.physics.arcade.collide(this.player, this.ground[i]);
    // }
    // this.player.body.velocity.x = 0;

    // var cursors = game.input.keyboard.createCursorKeys();
    // if (cursors.left.isDown)
    // {
    //     this.player.body.velocity.x = -300;
    // }
    // else if (cursors.right.isDown)
    // {
    //     this.player.body.velocity.x = 300;
    // }
    // if (cursors.up.isDown && this.player.body.touching.down)
    // {
    //     this.player.body.velocity.y = -800;
    // }
  }
};

game.state.add('startMenu', startMenuState);
game.state.start('startMenu');