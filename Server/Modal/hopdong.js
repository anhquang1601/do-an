const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const hopdongSchema = mongoose.Schema({
    hoten:String,
    namsinh:Date,
    diachi:String,
    masv:String,
    maphong:String,
    ngaytao:Date,
    id: {type: Schema.Types.ObjectId, ref: 'rooms'}
})
const hopdong=mongoose.model("hopdong",hopdongSchema);
module.exports=hopdong;