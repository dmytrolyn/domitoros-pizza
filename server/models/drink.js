const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {
        small: {
            value: { type: String },
            currency: { type: String },
            weight: { type: String }
        },
        medium: {
            value: { type: String },
            currency: { type: String },
            weight: { type: String }
        },
        large: {
            value: { type: String },
            currency: { type: String },
            weight: { type: String }
        },
    },
    image: { type: String }
},
    {
        versionKey: false
    });

const drinkModel = mongoose.model('drink', drinkSchema);

class Drink {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
    static getAll() {
        return drinkModel.find();
    }
    static getById(id) {
        return drinkModel.findOne({ _id: id });
    }
    static searchByName(toSearch) {
        return drinkModel.find({ name: { $regex: toSearch } }).exec();
    }
};

module.exports = Drink;
