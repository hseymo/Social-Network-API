const username = ['Rachel', 'Clark', 'Lewis', 'Christi', 'Greg'];
  
  const thoughts = [
    'Decision Tracker',
    'Find My Phone',
    'Learn Piano',
    'Starbase Defender',
    'Tower Defense',
    'Monopoly Money Manager',
    'Movie trailers',
    'Hello world',
    'Stupid Social Media App',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Firefox',
    'Running app',
    'Cooking app',
    'Poker',
    'Deliveries',
  ];
  
  const possibleReactions = [
    'yay',
    'love',
    'hate',
    'agree',
    'disagree',
    'hmmm',
    'yes!'
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        username: getRandomArrItem(username),
        thoughtText: getRandomArrItem(thoughts),
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(thoughts);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
          reactionBody: getRandomArrItem(possibleReactions),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomThoughts };
  