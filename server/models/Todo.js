const { Schema, model } = require('mongoose');

const todoSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type:String,
      required: true,
    },
  
    isCompleted:{
      type:Boolean,
      default:false,
    }
  },
  {
    timestamps: true,
  }
)



module.exports = todoSchema