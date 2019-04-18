var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 3},
    price: {type: Number, required: true, minlength: 1},
    image: {type: String},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});


mongoose.model("Product", ProductSchema);
