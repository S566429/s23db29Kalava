const mongoose = require("mongoose")
var icecreamSchema = mongoose.Schema({
    icecream_flavour: {type:String , required: true},
    icecream_quantity: { type:String , required: true, maxLength:[3]},
    icecream_cost: {type: Number, required: true, min:50, max:5000}
})
module.exports = mongoose.model("icecream",
icecreamSchema)




