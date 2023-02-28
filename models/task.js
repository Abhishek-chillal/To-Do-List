const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = {
    name: String
};
const itemModel = new mongoose.model("itemcollection", itemSchema);

const listSchema = new Schema({
    name:{
        type:String
    },
    items:[itemSchema]
    
});
const listModel = new mongoose.model("listcollection", listSchema);

module.exports = 
{
    itemModel:itemModel,
    listModel:listModel
}