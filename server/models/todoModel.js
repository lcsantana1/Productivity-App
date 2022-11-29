import mongoose from 'mongoose'

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type:String,
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId, 
      required: true, 
      ref: 'User'
    },
    iscompleted:{
      type:Boolean,
      default:false,

    }
  },
  {
    timestamps: true,
  }
)

const Todo = mongoose.model('Todo', todoSchema)

export default Todo