const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  hoten: {
    type: String,
  },
  namsinh: {
    type: String,
  },
  gioitinh:{
    type: String
  },
  sdt: {
    type: Number,
  },
  email: {
    type: String,
  },
  masv: {
    type: String,
  },
  madoituong: {
    type: String,
  },
  tinh: {
    type: String,
  },
  huyen: {
    type: String,
  },
  xa: {
    type: String,
  },
  cmnd: {
    type: String,
  },
  ngaycap: {
    type: String,
  },
  noicap: {
    type: String,
  },
  nguyenquan: {
    type: String,
  },
  diachithuongtru: {
    type: String,
  },
  type:{
    type: Boolean
  },
  maphong:{
      type:String
  },
  roomId: {
    type: Schema.Types.ObjectId,
    ref: "rooms",
  },
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
