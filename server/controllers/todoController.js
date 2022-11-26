import Todo from "../models/todoModel.js";

export const addtodo=('/addtodo', async (req,res)=>{
    
    const {title, date, userid}=req.body;

  const createitem= await Todo.create({
       title,
       date,
       userid
     });
     if(createitem){
       res.status(200).json({success:true})
     }
     else
     {
       res.status(500).json({message:"object not found"})
     }
})

export const gettodoByID = ("/:id",
  async (req, res) => {
    const item = await Todo.find({userid:req.params.id});
    if (item) {
      res.json(item);
    } else {
      res.status(404);
      throw new Error("Todo Not Found...");
    }
  });

  
  export const updatetodo = ("/update/:id", async (req, res) => {
    const data= req.body;
    try {
      const todo= await Todo.findOneAndUpdate({_id:req.params.id}, data);
    if (todo) {
      res.json({success: true});
    } else {
      res.status(500);
      throw new Error("Internal error");
    }
    } catch (error) {
      res.status(404);
      res.json({success: false, message:'Todo not found'})
    }
  });

  export const deletetodo = async (req, res) => {
    try {
         await Todo.findByIdAndDelete(req.params.id);
         res.status(200).json({success:true});
      } 
      catch (err) {
        return res.status(400).json({ message: err.message })
      }
};
  
export const updatetodoiscomplete = ("/updateiscomplete/:id", async (req, res) => {
  const data= req.body;
  try {
    const todo= await Todo.findOneAndUpdate({_id:req.params.id}, data);
  if (todo) {
    res.json({success: true});
  } else {
    res.status(500);
    throw new Error("Internal error");
  }
  } catch (error) {
    res.status(404);
    res.json({success: false, message:'Todo not found'})
  }
});
export const filtertodo = ("/filter/:id/:filtertodo",
  async (req, res) => {
 const filtertodo=req.params.filtertodo
 var startDate = new Date();
 startDate.setDate(startDate.getDate()-1);
    if(filtertodo==='weekly'){

      var d = new Date();
      d.setDate(d.getDate()+7);

    }
    else if(filtertodo==='monthly'){
      var d = new Date();
      d.setDate(d.getDate()+30);  
    }
        
    const todo = await Todo.find({
      'userid': req.params.id,
      'date':{
      $gt: startDate.toISOString(),
      $lt:  d.toISOString()
  } })
  console.log(todo)
    if (todo) {
      res.json(todo);
    } else {
      res.status(404);
      throw new Error("Todo Not Found...");
    }
  });
