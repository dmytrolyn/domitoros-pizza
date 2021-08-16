const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
    name: { type: String },
    nextId: { type: Number }
},
    {
        versionKey: false
    });

const sequenceModel = mongoose.model('sequence', sequenceSchema);

class Sequence {
    static get() {
        return sequenceModel.findOne({ name: "nextId" });
    }
    static set(nextId) {
        return sequenceModel.updateOne({ name: "nextId"}, { nextId })
    }
};

module.exports = Sequence;
