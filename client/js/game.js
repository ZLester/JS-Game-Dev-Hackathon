var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameContainer');

var mainState = {
  preload: function () {
    game.stage.backgroundColor = '#555';
    game.load.image('player', 'assets/player.png'); 
    game.load.image('wall', 'assets/player.png');
  },
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.player = this.game.add.sprite(100, 245, 'player');
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1000; 
    this.player.body.bounce.y = 0.4;
    this.platforms = game.add.group();
    this.platforms.enableBody = true;
    this.ground = [];
    for (var i = 0; i < game.world.width; i+=50) {
      this.ground.push(this.platforms.create(i, game.world.height - 50, 'wall'));
    }
    for (var j = 0; j < this.ground.length; j++) {
      this.ground[j].body.immovable = true;
    }
    this.player.body.collideWorldBounds = true;
  },
  update: function () {
    if (this.player.inWorld == false) {
      this.restartGame();
    }
    for (var i = 0; i < this.ground.length; i++) {
      game.physics.arcade.collide(this.player, this.ground[i]);
    }
    var cursors = game.input.keyboard.createCursorKeys();

    this.player.body.velocity.x = 0;
    if (cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;
        this.player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;
        this.player.animations.play('right');
    }
    if (cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.body.velocity.y = -600;
    }
  },
  restartGame: function() {  
      game.state.start('main');
  },
};

game.state.add('main', mainState);
game.state.start('main');