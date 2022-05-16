
const mongoose=require("mongoose");
const Schema=mongoose.Schema
const roomSchema=new Schema({
    maloaiphong:String,
    maphong:String,
    tenphong:String,
    tentoanha: String,
     sinhvienID:[{ type: Schema.Types.ObjectId, ref: 'student'}] 
})


const room=mongoose.model('room',roomSchema); 

module.exports=room; 