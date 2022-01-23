/**
 * Car Controller
 * 
 * @by rafaat
 * @since 1.0
 */

const CarModel = require('../models/car');

/* Router Methods */

exports.Index = async (req,res,next) => {

  let query = {};

  try{
    let cars = await CarModel.find(query);
    return res.json({data:cars});
  } catch(error){
    return res.status(500).json({message:"Internal Error"});
  }

}

exports.Create = async (req,res,next) => {
  var model = new CarModel(req.body);
  try{
    let car = await model.save();
    return res.json({message:'New Car Saved.',data:car.toJSON()})
  } catch(error){
    console.log(error);
    return res.status(400).json({message:"Invalid request"});
  }
}

exports.Single = async (req,res,next) => {
  try{
    let car = await CarModel.findById(req.params.id);
    return res.json(car.toJSON());
  } catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Error"});
  }
}

exports.Update = async (req,res,next) => {
  try{
    let car = await CarModel.findById(req.params.id);
    car = Object.assign(car,req.body);
    car = await car.save();
    return res.json(car.toJSON());
  } catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Error"});
  }
}

exports.Delete = async (req,res,next) => {
  try{
    await CarModel.remove({_id:req.params.id});
    return res.json({message:'car deleted'});
  } catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Error"});
  }
}