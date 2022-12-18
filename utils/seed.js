const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  
  await User.deleteMany({});
  await Thought.deleteMany({});
 

  const users = [{
    username: "user1",
    email: "user1@email.com",
  },
  {
    username: "user2",
    email: "user2@email.com",
  },];
  
  await User.collection.insertMany(users);

  console.table(users);
  
  console.info('Seeding complete!');
  process.exit(0);
});
