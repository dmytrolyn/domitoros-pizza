const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {
        standard: {
            value: { type: String },
            currency: { type: String },
            weight: { type: String }
        },
        double: {
            value: { type: String },
            currency: { type: String }
        }
    },
    image: { type: String }
},
    {
        versionKey: false
    });

const dessertModel = mongoose.model('dessert', dessertSchema);

class Dessert {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
    static getAll() {
        return dessertModel.find();
    }
    static getById(id) {
        return dessertModel.findOne({ _id: id });
    }
};

module.exports = Dessert;
