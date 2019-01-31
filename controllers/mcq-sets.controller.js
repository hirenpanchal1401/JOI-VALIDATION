const db = require('../db_config/config');

const mcqSets = db.McqSets;

exports.create = async function(req, res) {
  let data;
  try{
    data = await mcqSets.create({
      name: req.value.body.name,
      is_active: req.value.body.is_active,
      difficulty: req.value.body.difficulty,
    });
  }catch(err){
    res.status(500).json({ 
      status: false,
      message: "Unable To Create.",
      data: err
    });
  }
  if(data !== undefined){
    res.status(200).json({ 
      status: true,
      message: "Created Successfully",
      data: data
    });
  }
};
  // mcqSets.create({
  //   name: req.body.name,
  //   is_active: req.body.is_active,
  //   difficulty: req.body.difficulty,
  // }).then((data) => {
  //   res.status(200).json({ 
  //       status: true,
  //       message: "Created Successfully",
  //       data: data
  //     });
  // }).catch((err) => {
  //   res.status(500).json({ 
  //       status: false,
  //       message: "Unable To Create.",
  //       data: err
  //     });
  // });

exports.list =async function(req, res) {
  let data;
  try{
    data = await mcqSets.findAll();
  }catch(err){
    res.status(500).json({ 
      status: false,
      message: "Unable To List Data.",
      data: err
    });
  }
  if(data !== undefined){
    res.status(200).json({ 
      status: true,
      message: "All mcq-sets Fetched Successfully",
      data: data
    });
  }
};
  // mcqSets.findAll().then((data) => {
  //   res.status(200).json({ 
  //     status: true,
  //     message: "List Of Data",
  //     data: data
  //   });
  // }).catch((err) => {
  //   res.status(500).json({ 
  //     status: false,
  //     message: "Unable To List Data.",
  //     data: err
  //   });
  // });


exports.edit =async function(req, res) {
  let data;
  try{
    data = await mcqSets.update({
      name: req.body.name,
      is_active: req.body.is_active,
      difficulty: req.body.difficulty,
    },
    { where: { id: req.params.id }})
  }catch(err){
    res.status(500).json({ 
      status: false,
      message: "Unable To Update.",
      data: err
    });
  }
  if(data !== undefined){
    res.status(200).json({ 
      status: true,
      message: "Updated Successfully",
      data: data
    });
  }
}
  // mcqSets.update({
  //   name: req.body.name,
  //   is_active: req.body.is_active,
  //   difficulty: req.body.difficulty,
  // },
  // { where: { id: req.params.id }})
  // .then((data) => {
  //   res.status(200).json({ 
  //     status: true,
  //     message: "Updated Successfully",
  //     data: data
  //   });
  // }).catch((err) => {
  //   res.status(500).json({ 
  //     status: false,
  //     message: "Unable To Update.",
  //     data: err
  //   });
  // });


exports.delete =async function (req, res) {
  let data;
  try{
    data =await mcqSets.destroy({ where: { id: req.params.id } })
  }catch(err){
    res.status(500).json({ 
      status: false,
      message: "Unable To Delete.",
      data: err
    });
  }
  if(data !== undefined){
    res.status(200).json({ 
      status: true,
      message: "Deleted Successfully",
      data: data
    });
  }
}
//   mcqSets.destroy({ where: { id: req.params.id } })
//     .then(() => {
//       res.status(200).json({ 
//         status: true,
//         message: "Deleted Successfully",
//         data: data
//       });
//     }).catch((err) => {
//       res.status(500).json({ 
//         status: false,
//         message: "Unable To Delete.",
//         data: err
//       });
//     });
// };

exports.deactive =async function(req, res) {
  let data;
  try{
    data = await mcqSets.update({
      is_active: false,
    },
    { where: { id: req.params.id } })
  }catch(err){
    res.status(500).json({ 
      status: false,
      message: "Unable To Deactive.",
      data: err
    });
  }
  if(data !== undefined){
    res.status(200).json({ 
      status: true,
      message: "Deactived Successfully",
      data: data
    });
  }
}
//   mcqSets.update({
//     is_active: false,
//   },
//   { where: { id: req.params.id } })
//   .then((data) => {
//     res.status(200).json({ 
//       status: true,
//       message: "Deactived Successfully",
//       data: data
//     });
//   }).catch((err) => {
//     res.status(500).json({ 
//       status: false,
//       message: "Unable To Deactive.",
//       data: err
//     });
//   });


exports.active =async function(req, res) {
  let data;
  try{
    data = await mcqSets.update({
      is_active: true,
    },
    { where: { id: req.params.id } })
  }catch(err){
    res.status(500).json({ 
      status: false,
      message: "Unable To Active.",
      data: err
    });
  }
  if(data !== undefined){
    res.status(200).json({ 
      status: true,
      message: "Actived Successfully",
      data: data
    });
  }
}
  // mcqSets.update({
  //   is_active: true,
  // },
  // { where: { id: req.params.id } })
  // .then((data) => {
  //   res.status(200).json({ 
  //     status: true,
  //     message: "Actived Successfully",
  //     data: data
  //   });
  // }).catch((err) => {
  //   res.status(500).json({ 
  //     status: false,
  //     message: "Unable To Active.",
  //     data: err
  //   });
  // });