const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Adam',
        email: 'adam@gmail.com',
    },
    {
        username: 'Bean',
        email: 'bean@gmail.com'
    },
    {
        username: 'Carol',
        email: 'carol@gmail.com'
    },
    {
        username: 'Dennis',
        email: 'dennis@gmail.com'
    },
    {
        username: 'Eric',
        email: 'eric@gmail.com'
    },
    {
        username: 'Frank',
        email: 'frank@gmail.com'
    },
    {
        username: 'Gabe',
        email: 'gabe@gmail.com'
    },
    {
        username: 'Hillary',
        email: 'hillary@gmail.com'
    },
    {
        username: 'Issac',
        email: 'issac@gmail.com'
    },
    {
        username: 'Jonas',
        email: 'jonas@gmail.com'
    },
    {
        username: 'Kelvin',
        email: 'kelvin@gmail.com'
    },
  ]


const thoughtsText = [
'I like pickles',
'I like gravy',
'I like cranberries',
'I like mashed potatoes',
'I like Thanksgiving',
'I like chocolate',
'I like Sour Patch Kids',
'I like candy',
'I like Peanut Butter',
'I like salmon',
'I dislike crab',
'I like gnocchi',
'I like pasta',
'I like grapes',
'I dislike Cotton Candy grapes',
'I like tomatoes',
'I like apples',
'I like Aardvark Hot Sauce',
  ]

  const reactionsText = [
'Agree',
'Disagree',
'You are crazy',
'The best',
'The worst',
'It is okay',
  ]

  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


//   NOT WORKING: USERS HAVE THOUGHTS THAT HAVE DIFFERENT USER NAMES
//   const createUsers = () => {
//     let results = [];
//     for (let i = 0; i < users.length; i++) {
//         let selectedUser = user[i]
//         results.push({
//             username: selectedUser.username,
//             email: selectedUser.email,
//             thoughts: [...getRandomThoughts(3)],
//             reactions: [...getThoughtReactions(3)],
//         });
//   }
//   return results;
// }

  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtsText),
        reactions: [...getThoughtReactions(3)],
        username: getRandomArrItem(users).username
      });
    }
    return results;
  };
    
    const getThoughtReactions = (int) => {
      if (int === 1) {
        return getRandomArrItem(reactions);
      }
      const results = [];
      for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactionsText),
            username: getRandomArrItem(users).username
        });
      }
      return results;
    };

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    // const createdUsers = createUsers();
    const thoughts = getRandomThoughts(10);
  
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // console.table(createdUsers);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  
