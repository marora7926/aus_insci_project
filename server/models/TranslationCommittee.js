const { Schema, model } = require('mongoose');

const tscSchema = new Schema(
    {
        id: {
            type: Integer,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
            unique: true,
        },
        representation: {
            type: String,
            required: true,
        },
    },
    {
    toJSON: {
        virtuals: true,
    },
  }
);

const MemberTSC = model('MemberTSC', tscSchema);

module.exports = MemberTSC;