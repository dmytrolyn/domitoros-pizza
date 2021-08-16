const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [
        { type: String }
    ],
    category: { type: String },
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

const pizzaModel = mongoose.model('pizza', pizzaSchema);

class Pizza {
    constructor(id, name, ingredients, category, price, image) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.category = category;
        this.price = price;
        this.image = image;
    }
    static getAll() {
        return pizzaModel.find();
    }
    static getById(id) {
        return pizzaModel.findOne({ _id: id });
    }
    static searchByCategory(toSearch) {
        return pizzaModel.find({ category: toSearch }).exec();
    }
};

module.exports = Pizza;
