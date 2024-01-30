import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  async getFullName(humanId) {
    // TODO: Implement this method
    return await Human.findByPk(humanId, {include: {fname, lname}})
  }
}

// TODO: Human.init()
Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    lname: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    email: {
      type: DataTypes.VARCHAR,
      allowNull: false
    }
  }, {
    sequelize: db
  }
)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    species: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    birthYear: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize: db
  }
)

// TODO: Define Relationship
Human.hasMany(Animal, {foreignKey: 'human_id'})
Animal.belongsTo(Human, {foreignKey: 'human_id'})

await db.sync({force: true})

export default db;
