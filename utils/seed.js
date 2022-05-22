const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [
    { 
        username: 'Rachel',
        email: 'abc@gmail.com',
    }, 
    { 
        username: 'Clark',
        email: 'abcd@gmail.com',
    }, 
    { 
        username: 'Lewis',
        email: 'abcde@gmail.com',
    }, 
    { 
        username: 'Christi',
        email: 'abcdef@gmail.com',
    }, 
    { 
        username: 'Greg',
        email: 'abcdefg@gmail.com',
    }, 
  ];
  const thoughts = getRandomThoughts(10);

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
