import React, { useState }  from 'react'
import { addtodo } from '../helper/Helper'

function TodoInput({handleSubmit}){

    


        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                    <div className="input-group col-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Todo"
                            name="title"
                            required
                          
                        />
                    </div>
                    <div className="input-group col-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fas fa-clock"/>
                            </div>
                        </div>

                        <input
                            type="date"
                            className="form-control"
                            placeholder="New Todo"
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            name="date"
                          
                        />
                    </div>
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-block mt-3 btn-info"
                    >
                        Add
                    </button>
                </form>
            </div>
        )
    
}
export default TodoInput
