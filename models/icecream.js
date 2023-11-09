const mongoose = require("mongoose")
const iceCreamSchema = mongoose.Schema({
    icecream_flavour: String,
    icecream_quantity: Number,
    icecream_cost: Number
})
module.exports = mongoose.model("icecream",
iceCreamSchema)

