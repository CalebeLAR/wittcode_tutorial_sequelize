const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
}); 

const Games = sequelize.define('game', {
  game_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR(30),
    allowNull: false
  },
  mb_size: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false,
  },
  price: {
    type: DataTypes.CHAR(8),
    defaultValue: 'free'
  },
  realease: {
    type: DataTypes.DATE,
  }
},{
  timestamps: false
});

// Games.sync({force: true}).then(()=> {
//   const game = Games.build({name: 'teste1', mb_size: 18000 })
//   game.save()
//   console.log(game.toJSON())
// });

// Games.sync().then(()=> {
//   const game = Games.create({name: 'create3', mb_size: 18.01 })
//   return game
// }).then((game)=> {
//   console.log(game.toJSON())
// });

// Games.sync({force:true}).then(()=> {
//   const game1 = Games.create({name: 'create1', mb_size: 18.00 })
//   const game2 = Games.create({name: 'create2', mb_size: 17.41 })
//   const game3 = Games.create({name: 'create3', mb_size: 180.50 })
//   const game4 = Games.create({name: 'create4', mb_size: 15.00 })
//   return Promise.all([game1, game2, game3, game4])
// }).then((games)=> {
//   const game3 = games.find((game)=> game.dataValues.name === 'create3');
//   return game3.destroy();
// }).then((game3)=>{
//   console.log(Games, 'destroyed')
// });

// Games.sync({alter: true}).then(()=> {
//   const game = Games.create({name: 'teste4', mb_size: 18000 })
//   return game
// }).then((game) => {
//   game.name = 'reload'
//   console.log(game.name)
//   return game.reload()
// }).then((gameReload)=>{
//   console.log(gameReload.toJSON())
// });



// Games.sync().then(()=> {
//   const game1 = Games.create({name: 'create1', mb_size: 18.00 })
//   const game2 = Games.create({name: 'create2', mb_size: 17.41 })
//   const games = Promise.all([game1, game2])
//   return games
// }).then((games)=> {
//   const game2 = games.find((game)=> game.dataValues.name === 'create2')
//   game2.mb_size = 3000.45;
//   game2.save({fields: ['mb_size']})
//   return game2
// }).catch((err)=>{
//   console.log(err)
// });



