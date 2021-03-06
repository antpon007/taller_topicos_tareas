const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const fields = {
  description: {
    type: String,
    default: '',
    trim: true,
  },
  finished: {
    type: Boolean,
    default: false,
    trim: true,
  },
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
};

const task = new Schema(Object.assign(fields, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('task', task),
  fields,
  references,
};
