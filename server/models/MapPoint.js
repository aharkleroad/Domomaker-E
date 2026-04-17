const mongoose = require('mongoose');
const _ = require('underscore');

const setString = (name) => _.escape(string).trim();

const MapPointSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setString,
    },
    description: {
        type: String,
        trim: true,
        set: setString,
    },
    type: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    privacy: {
        type: Object,
        required: true,
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Account',
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    endDate: {
        type: Date,
        required: true,
    },
});

MapPointSchema.statics.toAPI = (doc) => ({
    type: doc.type,
    privacy: doc.privacy,
    endDate: doc.endDate,
    _id: doc._id,
});

const MapPointModel = mongoose.model('MapPoint', MapPointSchema);
module.exports = MapPointModel;