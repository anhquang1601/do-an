const mongoose=require("mongoose");
const Schema=mongoose.Schema
const billSchema=new Schema({
    ngaytao:Date,
    nhanvienlap: String,
    sodientieuthu:Number,
    sodiensudung:Number,
    giadien:Number,
    gianuoc:Number,
    sonuoctieuthu:Number,
    sonuocsudung:Number,
    tongtien:Number,
    maphong:String,
    type: Boolean,
   /*  sinhvienID:{
        type: Schema.Types.ObjectId, ref: 'student'
    }, */
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    }
})


const bill=mongoose.model('bill',billSchema);
module.exports= bill;