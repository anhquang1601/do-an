const kindRoom = require("../Modal/kinkroom");
const room = require("../Modal/room");
const billRoom = require("../Modal/bill");
const student = require("../Modal/student");
const priorityObject = require("../Modal/priorityObject");
const serviceBill = require("../Modal/servicebill");
const service = require("../Modal/service");
const listService = require("../Modal/listService");
const listConvenient = require("../Modal/listConvenient");
const converient = require("../Modal/converient");
const listOfHostel = require("../Modal/listOfHostels");
const customer = require("../Modal/customer");
const hopdong = require("../Modal/hopdong")
const updateController = {
  updateKindRoom: (req, res) => {
    const { maloaiphong, tenloaiphong } = req.body;
    kindRoom
      .findOneAndUpdate(
        { maloaiphong: req.params.id },
        { $set: { tenloaiphong: tenloaiphong } }
      )
      .then((data) => {
        if (data !== null) {
          res.status(200).json("update succes !");
        } else {
          res.status(400).json("no data");
        }
      });
  },

  updateRoom: (req, res) => {
    const { maphong, tenphong} = req.body;
    const {id} =req.params
          room
            .findOneAndUpdate(
              { _id: id },
              {
                $set: {
                  tenphong: tenphong,
                  maphong: maphong,
                },
              }
            )
            .then((data) => {
              if(data !== null){
                hopdong.findOneAndUpdate(
                  { _id: id },
                  {
                    $set: {
                      maphong: maphong,
                      tenphong: tenphong
                    }
                  }
                ).then((data) => {
                  if(data !== null){
                    billRoom.findOneAndUpdate(
                      { _id: id },
                      {
                        $set: {
                          maphong: maphong,
                        }
                      }
                    )
                  }
                })
              }
            });
  },

  billroom: (req, res) => {
    const { id } = req.params;
    const {
      ngaytao,
      nhanvienlap,
      sodientieuthu,
      sodiensudung,
      sonuoctieuthu,
      sonuocsudung,
      tongtien,
      giadien,
      gianuoc,
    } = req.body;
    
          billRoom.findOne({ _id: id }).then((data) => {
            if (data !== null) {
              billRoom
                .findByIdAndUpdate(
                  { _id: id },
                  {
                    $set: {
                      ngaytao: ngaytao,
                      nhanvienlap: nhanvienlap,
                      sodiensudung: sodientieuthu - data.sodientieuthu,
                      sodientieuthu: sodientieuthu,
                      gianuoc: gianuoc,
                      giadien: giadien,
                      sonuocsudung: sonuoctieuthu - data.sonuoctieuthu,
                      sonuoctieuthu: sonuoctieuthu,
                      tongtien: tongtien,
                      type: false,
                      phongID: data._id,
                    },
                  }
                )
                .then(() => res.status(200).json("update success !"));
            }
          })
      .catch((err) => res.status(400).json({ err: err }));
  },

  student: (req, res) => {
    const { masv } = req.params;
    const { hoten, namsinh, diachi, sdt, email, madoituong } = req.body;
    priorityObject
      .findOne({ madoituong: madoituong })
      .then((data) => {
        if (data !== null) {
          student
            .findOneAndUpdate(
              { masv: masv },
              {
                $set: {
                  hoten: hoten,
                  namsinh: namsinh,
                  diachi: diachi,
                  sdt: sdt,
                  email: email,
                  madoituong: madoituong,
                },
              }
            )
            .then(() => req.status(200).json("update success !"));
        }
      })
      .catch((err) => res.status(400).json({ err: err }));
  },

  updateRentRoom: (req, res) => {
    const { id } = req.params;
    const { roomId, tenphong } = req.body;
    room
      .findOne({ maphong: roomId })
      .then((data) => {
        console.log(data.sinhvienID.length)
        if (data !== null && data.sinhvienID.length < 5) {
          student
            .findOneAndUpdate(
              { _id: id },
              { $set: { roomId: data._id, type: true } }
            )
            .then((student) => {
              if(student !== null){
                room.findOneAndUpdate(
                  {maphong: roomId},
                  { $push: {sinhvienID: student._id}}
                )
                .then((room) =>(
                  res.status(200).json(room),
                 hopdong({
                  masv: student.masv,
                  hoten:student.hoten,
                  maphong:roomId,
                  diachi: student.diachi,
                  namsinh: student.namsinh,
                  id: room._id
                }))
                
                .save(function(err){
                  if(err){
                    res.status(400).json(err);
                  }
                }
              ))
              }
            })
        }
       
      })
      .catch((err) => res.status(100).json({message: err}));
  },
  updatePayRoom: (req, res) => {
    const { id } = req.params;
    billRoom
      .findOne({ _id: id })
      .then((data) => {
        if (data !== null) {
          billRoom
            .findOneAndUpdate(
              { _id: id },
              { $set: { type: true } }
            )
            .then((data) => res.status(200).json(data));
        }
      })
      .catch((err) => console.log(err));
  },
  priortyObjectUpdate: (req, res) => {
    const { mauutien } = req.params;
    const { tendoituonguutien } = req.body;
    priorityObject
      .findByIdAndUpdate(
        { mauutien: mauutien },
        { $set: { tendoituonguutien: tendoituonguutien } }
      )
      .then(() => res.status(200).json("update success !"))
      .catch((err) => res.status(400).json({ err: err }));
  },

  serviceBillUpdate: (req, res) => {
    const { masv, madichvu, thoigiansudung, dongia, thanhtien } = res.body;
    const { id } = req.params;
    student.findOne({ masv: masv }).then((data1) => {
      if (data1 !== null) {
        service.findOne({ madichvu: madichvu }).then((data) => {
          if (data !== null) {
            serviceBill
              .findOneAndUpdate(
                { id: id },
                {
                  $set: {
                    masv: masv,
                    madichvu: madichvu,
                    thoigiansudung: thoigiansudung,
                    dongia: dongia,
                    thanhtien: thanhtien,
                    sinhvienID: data1._id,
                    dichvuID: data._id,
                  },
                }
              )
              .then(() => res.status(200).json("update success !"))
              .catch((err) => res.status(400).json({ err: err }));
          }
        });
      }
    });
  },

  serviceUpdate: (req, res) => {
    const { madichvu } = req.params;
    const { tendichvu } = req.body;
    service
      .findOneAndUpdate(
        { madichvu: madichvu },
        { $set: { tendichvu: tendichvu } }
      )
      .then(() => res.status(200).json("update success !"));
  },

  listServiceUpdate: (req, res) => {
    const { maphong, madichvu, soluong } = req.body;
    const { id } = req.params;
    room.findOne({ maphong: maphong }).then((data) => {
      if (data !== null) {
        madichvu
          .findOne({ madichvu: madichvu })
          .then((data2) => {
            if (data2 !== null) {
              listService
                .findByIdAndUpdate(
                  { id: id },
                  {
                    $set: {
                      madichvu: madichvu,
                      maphong: maphong,
                      soluong: soluong,
                    },
                  }
                )
                .then(() => res.status(200).json("success update !"));
            }
          })
          .catch((err) => res.status(400).json({ err: err }));
      }
    });
  },

  listConvenientUpdate: (req, res) => {
    const { maphong, matiennghi, soluong } = req.body;
    const { id } = req.params;
    room
      .findOne({ maphong: maphong })
      .then((data) => {
        if (data !== null) {
          converient.findOne({ matiennghi: matiennghi }).then((data2) => {
            if (data2 !== null) {
              listConvenient
                .findByIdAndUpdate(
                  { id: id },
                  {
                    $set: {
                      maphong: maphong,
                      matiennghi: matiennghi,
                      soluong: soluong,
                    },
                  }
                )
                .then(() => res.status(200).json("update success !"));
            }
          });
        }
      })
      .catch((err) => res.status(200).json({ err: err }));
  },

  converientUpdate: (req, res) => {
    const { tentiennghi } = req.body;
    const { matiennghi } = req.params;
    converient
      .findByIdAndUpdate(
        { matiennghi: matiennghi },
        { $set: { tentiennghi: tentiennghi } }
      )
      .then(() => res.status(200).json("update success !"))
      .catch((err) => res.status(400).json({ err: err }));
  },

  listOfHostelUpdate: (req, res) => {
    const { maphong, makhach, thoigianden, thoigiandi } = req.body;
    const { id } = res.params;
    room.findOne({ maphong: maphong }).then((data) => {
      if (data !== null) {
        customer
          .findOne({ makhach: makhach })
          .then((data2) => {
            if (data2 !== null) {
              listOfHostel
                .findOneAndUpdate(
                  { id: id },
                  {
                    $set: {
                      maphong: maphong,
                      makhach: makhach,
                      thoigianden: thoigianden,
                      thoigiandi: thoigiandi,
                      phongID: data._id,
                      khachID: data2._id,
                    },
                  }
                )
                .then(() => res.status(200).json("update success !"));
            }
          })
          .catch((err) => res.status(400).json({ err: err }));
      }
    });
  },

  customerUpdate: (req, res) => {
    const { makhach } = req.params;
    const { tenkhach, sdt } = req.body;
    listOfHostel.findOne({ makhach: makhach }).then((data) => {
      if (data == null) {
        customer.findByIdAndUpdate(
          { makhach: makhach },
          {
            $set: {
              tenkhach: tenkhach,
              sdt: sdt,
            },
          }
        );
      }
    });
  },
};
module.exports = updateController;
