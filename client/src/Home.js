import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { addtodo,gettodo } from './helper/Helper'

function Home() {
	
	const [todos, setTodos]=useState([])
	const auth = localStorage.getItem('token');
	const user = JSON.parse(localStorage.getItem('user'))
	const history= useHistory()

	const handleLogout=()=>{
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		history.push('/login')
	}
    const handleSubmit=e=>{
        e.preventDefault()
        const title=e.target.title.value;
        let date = e.target.date.value;
    date= new Date(date)
	if (!title) {
		return
		
	}
	const userid = JSON.parse(localStorage.getItem('user'))._id;
    addtodo({title,date, userid}).then(res=>{

		if(res){
			e.target.reset()
			gettodo(user._id).then(res=>{
				setTodos(res)
		
			})
		}
	})

    }

		useEffect(()=>{
			if (!auth) {
				history.push('/login')
				return
			}
			gettodo(user._id).then(res=>{
				setTodos(res)

			})
			
		},[])

		

		return (
			<div className="container">
				<span className='float-right cursor-pointer mt-4 p-2 logout' onClick={handleLogout}>
				<img src="/logout.png" alt="" />
				</span>
				<div className="row">
					<div className="col-12 col-md-8 mx-auto mt-4">
						<div>
						<h3 className="text-capitalize text-center">Add New Todo</h3>
						
						</div>
						<TodoInput handleSubmit={handleSubmit}
						/>
						<TodoList todos={todos} setTodos={setTodos}
						/>
					</div>
				</div>
			</div>
		);
	
}

export default Home;
