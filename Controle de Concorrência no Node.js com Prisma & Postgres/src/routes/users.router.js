const express = require('express');
const usersRouter = express.Router();

usersRouter.post('/count', async (req, res) => {
  const transaction = await req.app.get('sequelize').transaction();
  try {
    const { User } = req.app.get('models');

    const user = await User.findOne({
      where: {
        id: 1,
      },
      lock: transaction.LOCK.UPDATE,
      transaction,
    });

    user.count += 1;
  
    await user.save(
      { transaction }
    );

    await transaction.commit();

    res.json({ message: 'Successful.' });
  } catch (error) {
    if (transaction)
      await transaction.rollback();

    console.log(error)
    
    return res.status(400).send({ error }).end();
  }
});

usersRouter.post('/count-2', async (req, res) => {
  let transaction;
  try {
    const { User } = req.app.get('models');

    await User.update(
      { count: req.app.get('sequelize').literal('count + 1') },
      {
        where: {
          id: 1
        },
      }
    );

    res.json({ message: 'Successful.' });
  } catch (error) {
    if (transaction) await transaction.rollback();
    console.log(error)
    
    return res.status(400).send({ error }).end();
  }
});

// https://github.com/sequelize/sequelize/issues/7831
usersRouter.post('/count-3', async (req, res) => {
  try {
    const { User } = req.app.get('models');

    const user = await User.findOne({
      where: {
        id: 1,
      },
    },);
    // version = 1

    console.log(`Before save: ${user.version}`); // Log antes de salvar
    await user.update({
      count: user.count + 1
    });
    console.log(`After save: ${user.version}`); // Log após salvar

    res.json({ message: 'Successful.' });
  } catch (error) {
    if (error.name === 'SequelizeOptimisticLockError') {
      return res.status(409).send({ error: 'Conflict, the record was modified by another transaction' }).end();
    }
    return res.status(400).send({ error }).end();
  }
});

usersRouter.get('/', async (req, res) => {
  try {
    const { User } = req.app.get('models');

    const user = await User.findOne();

    res.json({ count: user.count });
  } catch (error) {
    console.log(error)
    
    return res.status(400).send({ error }).end();
  }
});

module.exports = usersRouter;
