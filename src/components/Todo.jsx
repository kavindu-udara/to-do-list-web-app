import { useState } from "react"

const Todo = ({ todoList }) => {

    const [list, setList] = useState(todoList);

    const handleTodoDelete = (title) => {
        const deletedTodo = list.filter(item => item.title !== title);
        setList(deletedTodo);
    }

    return (
        list.map((todo, index) => {
            return (
                <div key={index} className="w-full rounded bg-violet-500 py-3 mt-5 px-2 hover:bg-violet-600">
                    <div className="flex">
                        <div className="w-3/4">
                            <p className='text-2xl'>{todo.title}</p>
                        </div>
                        <div className="w-1/4">
                            <div className="flex">
                                <div className="w-1/2">
                                    <i className="text-2xl bi bi-square cursor-pointer text-violet-200"></i>
                                </div>
                                <div className="w-1/2">
                                    <i className="text-2xl bi bi-x-lg cursor-pointer text-violet-200" onClick={() => handleTodoDelete(todo.title)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        )
    )
}

export default Todo;