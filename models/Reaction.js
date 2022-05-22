const { Schema, model } = require('mongoose');
const moment = require('moment')

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId,
        },
        reactionBody: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        username: { 
            type: String, 
            required: true
        },
        // check this is correct????
        createdAt: {
            date: moment().format(),
            // default: 
        },
    },
    {
      toJSON: {
      },
      id: false,
    }
)

module.exports = reactionSchema;