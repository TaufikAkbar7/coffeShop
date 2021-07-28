const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//variabel template type data string
const defaultString = {
    type: String,
    required: true,
};
  
//variabel template type data number
const defaultNumber = {
    type: Number,
    required: true,
};

const ProductSchema = new Schema(
    {
        name: defaultString,
        harga: defaultNumber,
        detail: defaultString,
        image: defaultString,
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;