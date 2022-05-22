const moment = require('moment');
const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        username: { 
            type: String, 
            required: true
        },
        reactions: [Reaction],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
      timestamps: true
    }
);

  // Create a virtual property `reactionCount` that gets the # of reactions
  thoughtSchema
  .virtual('reactionCount')
// is this correct?? 
  .get(function () {
    return this.reactions.length;
  })

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
