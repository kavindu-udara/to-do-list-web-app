import React, { useState } from 'react'

const FinishedTodo = ({finishedTodoList}) => {

    const [list, setList] = useState(finishedTodoList);

    const handleDeletefinishTodo = (title) => {
        const deletedTodo = list.filter(item => item.title !== title);
        setList(deletedTodo);
    }
    
      return(
        list.map((finish, index) => {
            return(
                <div key={index} className="w-full rounded bg-violet-400 py-3 mt-5 px-2 hover:bg-violet-200">
                <div className="flex">
                    <div className="w-3/4">
                        <p className='text-2xl line-through text-gray-600'>{finish.title}</p>
                    </div>
                    <div className="w-1/4">
                        <div className="flex">
                            <div className="w-1/2">
                                <i className="text-2xl bi bi-check-square cursor-pointer text-violet-600 hover:text-violet-900"></i>
                            </div>
                            <div className="w-1/2">
                                <i className="text-2xl bi bi-trash cursor-pointer text-violet-600 hover:text-violet-900" onClick={() => handleDeletefinishTodo(finish.title)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
          })
      )
    
}

export default FinishedTodo