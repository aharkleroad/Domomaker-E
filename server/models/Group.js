const mongoose = require('mongoose');
const _ = require('underscore');

const setString = (name) => _.escape(string).trim();

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setString,
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Account',
    },
    members: {
        type: Array,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

GroupSchema.statics.toAPI = (doc) => ({
    name: doc.name,
    _id: doc._id
});

const GroupModel = mongoose.model('Group', GroupSchema);
module.exports = GroupModel;