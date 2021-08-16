const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    surname: { type: String },
    login: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String },
    phone: { type: String },
    email: { type: String },
    orders: []
},
    {
        versionKey: false,
    });

const userModel = mongoose.model('user', userSchema);

class User {
    constructor(id, login, password, gender = "Male", name = "Name", surname="Surname", phone = 0, email = "your@email.com") {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.gender = gender;
        this.email = email;
        this.login = login;
        this.password = password;
        this.orders = [];
    }
    static getAll() {
        return userModel.find();
    }
    static getById(id) {
        return userModel.findOne({ _id: id });
    }
    static findByLogin(login) {
        return userModel.findOne({ login });
    }
    static insert(newUser) {
        return new userModel(newUser).save();
    }
    static pushOrder(id, order) {
        return userModel.updateOne({ _id: id }, { $push: {
            orders: order
        }});
    }
    static update(id, data) {
        return userModel.updateOne({ _id: id }, data)
    }
    static changePassword(id, password) {
        return userModel.updateOne({ _id: id }, { password })
    }
};

module.exports = User;
