var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameContainer');

var mainState = {
  preload: function () {
    game.stage.backgroundColor = '#666';
    game.load.image('player', 'assets/player.png'); 
    game.load.image('ground', 'assets/ground.png');
    game.load.image('wall', 'assets/wall.png');
  },
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = this.game.add.sprite(100, 245, 'player');
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1000; 
    // this.player.body.bounce.y = 0.9;
    this.player.body.collideWorldBounds = true;
    this.player.jump = function() {
      if (this.player.body.touching.down) {
        this.player.body.velocity.y = -700;
      }
    }.bind(this);
    // this.player.scale.setTo(0.25, 0.25);
    this.platforms = game.add.group();
    this.platforms.enableBody = true;
    
    this.walls = game.add.group();
    this.walls.enableBody = true;
    this.walls.createMultiple(100, 'wall');
    this.walls.scale.setTo(1.5, 0.5);
    this.ground = [];
    for (var i = 0; i < game.world.width; i+=70) {
      this.ground.push(this.platforms.create(i, game.world.height - 70, 'ground'));
    }
    for (var j = 0; j < this.ground.length; j++) {
      this.ground[j].body.immovable = true;
    }

    this.timer = game.time.events.loop(1500, this.addWalls, this);  
    
  },
  update: function () {
    for (var i = 0; i < this.ground.length; i++) {
      game.physics.arcade.collide(this.player, this.ground[i]);
      game.physics.arcade.overlap(this.player, this.ground[i], this.restartGame, null, this);
    }
    game.physics.arcade.collide(this.player, this.walls);
    this.player.body.velocity.x = 0;

    var cursors = game.input.keyboard.createCursorKeys();
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); 
    var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    spaceKey.onDown.add(this.player.jump, this);
    upKey.onDown.add(this.player.jump, this);    
    if (cursors.left.isDown) {
        this.player.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
        this.player.body.velocity.x = 250;
    }
  },
  restartGame: function() {  
    game.state.start('main');
  },
  addWall: function(x, y) {
    var wall = this.walls.getFirstDead();
    wall.reset(x, y);
    wall.body.velocity.y = 200;
    wall.body.immovable = true; 
    wall.checkWorldBounds = true;
    wall.outOfBoundsKill = true;
  },
  addWalls: function() {  
      var hole = Math.floor(Math.random() * 8) + 1;
      for (var i = 0; i < 11; i++) {
        if (i !== hole && i !== hole + 1) {
          this.addWall(i * 50, 0);   
        }
      }
  },


};

game.state.add('main', mainState);
game.state.start('main');