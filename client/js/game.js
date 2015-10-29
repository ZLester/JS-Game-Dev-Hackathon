var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameContainer');

var startMenuState = {
  preload: function () {
    game.stage.backgroundColor = '#787878';
    game.load.tilemap('mario', '../assets/levels/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', '../assets/sheets/super_mario.png');
    game.load.image('title', '../assets/images/title.png');
  },
  create: function () {
    this.map = game.add.tilemap('mario');
    // game.physics.startSystem(Phaser.Physics.ARCADE);

    // this.player = this.game.add.sprite(100, 245, 'player');
    // game.physics.arcade.enable(this.player);
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