import React, { Component, Fragment } from 'react'
import { getfiltertodo, gettodo } from '../helper/Helper'
import TodoItem from './TodoItem'

function TodoList({todos,setTodos}){
    const userid = JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))._id
  const handleChange=e=>{
    const todofilter=e.target.value

    if(todofilter==='all'){
        gettodo(userid).then(res=>{
            setTodos(res)

        })
    }
    else if(todofilter==='weekly'){
getfiltertodo(userid,todofilter).then(res=>{
   
    setTodos(res)
})
    }
   else{
    getfiltertodo(userid,todofilter).then(res=>{
   
        setTodos(res)
    })
   }
   
  }

        return (
            <Fragment>

                <h3 className="text-center">
                    TodoList
                </h3>

                <div className="row justify-content-end ">
                    <div className="col-5">

                    <select name="todofilter" className='p-2 w-100 bg-info text-white' 
                    defaultValue='all'
                    onChange={(e)=>handleChange(e)}
                    >
    <option value="all">All</option>
    <option value="weekly">Todos next 7 days (Weekly)</option>
    <option value="monthly">Todos next 30 days (Monthly)</option>

  </select>
                    </div>
                 
                </div>

                {
                todos.length === 0 ? '' :
                    <ul className="list-group my-5">
                        {
                            todos.map(todo => {
                                return (
                                    <TodoItem
                                        key={todo._id}
                                      id={todo._id}
                                        title={todo.title}
                                        date={todo.date}
                                        iscompleted={todo.iscompleted}
                                       setTodos={setTodos}
                                        
                                    />
                                )
                            })
                        }


                    </ul>
                }
                
            </Fragment>
        )
    
}
export default TodoList