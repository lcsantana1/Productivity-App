import React, {useState} from 'react'
import Edit from './edit/Edit'
import Delete from './delete/Delete'
import { deletetodo, edittodo, edittodoComplete, gettodo } from '../helper/Helper';
function TodoItem({title,date,iscompleted ,id,setTodos}) {
  
  const userid = JSON.parse(localStorage.getItem('user'))._id;
    const [modalDelete, setModalDelete] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    
  const handleEdit= (id) => {
  
     setModalShow(true)
     }
 const toggleModal = () => setModalShow(!modalShow);  
 const editSubmit= (data)=>{
    // console.log(data)
    edittodo(id,data).then(res=>{
      if (res) {
        	gettodo(userid).then(res=>{
				setTodos(res)

			})
      }else{
        alert('something went wrong')
      }
    })
    setModalShow(false)
  }
  

    const handleDelete=(id)=>{
        
        setModalDelete(true)
      }
      const deleteSubmit= ()=>{
        deletetodo(id).then(res=>{
          if (res) {
            gettodo(userid).then((res2)=>{

                setTodos(res2)})
          }else{
            alert('something went wrong')
          }
        })
        
        setModalDelete(false)
      }

      const handleTodoComplete= (data)=>{
        // console.log(data)
        edittodoComplete(id,data).then(res=>{
          if (res) {
                gettodo(userid).then(res=>{
                    setTodos(res)
    
                })
          }else{
            alert('something went wrong')
          }
        })
        setModalShow(false)
      }
      const toggleDeleteModal = () =>setModalDelete(!modalDelete);
      
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <div>
                <span className={`mt-1 mb-0 align-middle fs-4 ${iscompleted ? 'completed-task' : ''}`}>{title}</span>
            <br/>
            <span className='text-muted'>{date.slice(0,10)}</span>
                </div>
            
            <div className="todo-icon d-flex justify-content-center">
                <span 
                    className={`mx-2 ${iscompleted ? 'text-success cursor-pointer' : 'text-secondary cursor-pointer'}`}
                    onClick={(e)=>handleTodoComplete({iscompleted: !iscompleted})}
                >
                    <i className={`${iscompleted ? 'far fa-check-square' : 'far fa-square'}`} />
                </span>
                <span 
                    className="mx-2 text-warning cursor-pointer"
                    onClick={(e)=>handleEdit(id)}
                >
                    <i className="fas fa-pen" />
                </span>
                <span 
                    className="mx-2 text-danger cursor-pointer" onClick={(e=>handleDelete(id))} >
                    <i className="fas fa-trash"  />
                </span>
                {modalShow && <Edit show={modalShow} title={title} toggle={toggleModal} editsubmit={editSubmit}/>}
                {modalDelete && <Delete show={modalDelete} deleteSubmit={deleteSubmit} toggle={toggleDeleteModal}/>}
            </div>
        </li>
        )
    
}
export default TodoItem