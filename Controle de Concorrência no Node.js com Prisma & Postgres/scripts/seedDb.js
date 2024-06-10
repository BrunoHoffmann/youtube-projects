const { sequelize } = require('../src/shared/database');
const { User } = sequelize.models;

seed();

async function seed() {
  await User.sync({ force: true });
  await Promise.all([
    User.create({
      id: 1,
      count: 0,
      version: 0,
    }),
  ]);
}
