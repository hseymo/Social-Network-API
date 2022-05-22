const { Schema, model } = require('mongoose');
const moment = require('moment')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            // default: new ObjectId,
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
    },
    {
      toJSON: {
      },
      id: false,
      timestamps: true
    }
)

module.exports = reactionSchema;