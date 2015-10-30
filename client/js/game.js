var gameOptions = {
  width: 800,
  height: 600
}

var game = new Phaser.Game(gameOptions.width, gameOptions.height, Phaser.AUTO, 'gameContainer');

var mainState = {
  preload: function () {
    game.stage.backgroundColor = '#999';
    game.load.image('player', 'assets/player.png'); 
    game.load.image('ground', 'assets/ground.png');
    game.load.image('token', 'assets/hrlogo.png')
  },
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // this.playerStart = this.generateRandomLoc();
    this.player = this.game.add.sprite(gameOptions.width/2, gameOptions.height/2, 'player');
    game.physics.arcade.enable(this.player);
    // this.player.body.gravity.y = 1000; 
    // this.player.body.bounce.y = 0.5;
    this.player.body.collideWorldBounds = true;
    this.player.scale.setTo(0.75, 0.75);

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
    var cursors = game.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
        this.player.x -= 3;
    }
    else if (cursors.right.isDown) {
        this.player.x += 3;
    }
    if (cursors.up.isDown) {
        this.player.y -= 3;
    } else if (cursors.down.isDown) {
        this.player.y += 3;
    }
  },
  generateToken: function() {
    var tokenLoc = this.generateRandomLoc();

  },
  generateRandomLoc: function () {
    var randX = Math.floor(Math.random() *  740);
    var randY = Math.floor(Math.random() * 540);
    return [randX, randY];
  }
};

game.state.add('main', mainState);
game.state.start('main');