const { Schema, model } = require('mongoose');

const scSchema = new Schema(
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

const MemberSC = model('MemberSC', scSchema);

module.exports = MemberSC;