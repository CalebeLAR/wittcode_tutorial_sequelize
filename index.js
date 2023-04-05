const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false
  }
}); 

const User = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.CHAR(30),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

const Games = sequelize.define('games', {
  game_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR(30),
    allowNull: false
  },
  size: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  price: {
    type: DataTypes.CHAR(5),
    defaultValue: 'free'
  },
  realease: {
    type: DataTypes.DATE,
  }
});

async function activeModel (Model) {
  await Model.sync({force: true})
  console.log('sucesso')
};

activeModel(User);
activeModel(Games);

// sequelize.authenticate().then(()=> console.log('sucesso')).catch(err => console.log('fracasso'));
