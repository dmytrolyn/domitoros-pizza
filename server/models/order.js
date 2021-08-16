const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    address: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    total: { type: Number, required: true },
    items: { type: Array, required: true }
},
    {
        versionKey: false,
    });

const orderModel = mongoose.model('order', orderSchema);

class Order {
    constructor(address, phone, name, email, date, time, total, items) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.items = items;
        this.total = total;
        this.date = date;
        this.time = time;
        this.address = address;
    }
    static getAll() {
        return orderModel.find();
    }
    static getById(id) {
        return orderModel.findOne({ _id: id });
    }
    static insert(newOrder) {
        return new orderModel(newOrder).save();
    }
};

module.exports = Order;
