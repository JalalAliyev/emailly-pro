const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./recipient');

const surverSchema = new Schema({
  title: {
    type: String,
    requried: true,
  },
  body: {
    type: String,
    requried: true,
  },
  subject: {
    type: String,
    requried: true,
  },
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('surveys', surverSchema);
