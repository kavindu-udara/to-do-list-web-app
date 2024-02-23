import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const TodoList = [
    {
      title: 'workout 30min'
    }, {
      title: 'run 1hr'
    }, {
      title: 'sleep 6 hours'
    }
  ];

  const finishedTodo = [
    {
      title: 'workout 30min'
    }, {
      title: 'run 1hr'
    }, {
      title: 'sleep 6 hours'
    }
  ];

  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState(TodoList);
  const [finishedTodoList, setFinishedTodoList] = useState(finishedTodo);
  const [emptyTodo, setEmptyTodo] = useState(true);
  const [finishedEmpty, setFinishedEmpty] = useState(true);

  useEffect(() => {
    if (todoList.length == 0) {
      setEmptyTodo(false);
    } else {
      setEmptyTodo(true);
    }

    if (finishedTodoList.length == 0) {
      setFinishedEmpty(false);
    } else {
      setFinishedEmpty(true);
    }
  })

  const handleNewTodo = () => {
    setTodoList([...todoList, { title: newTodo }]);
    setNewTodo('');
  }

  const handleDeletefinishTodo = (title) => {
    const deletedTodo = finishedTodoList.filter(item => item.title !== title);
    setFinishedTodoList(deletedTodo);

    if (finishedTodoList.length === 0) {
      setFinishedEmpty(false);
    } else {
      setFinishedEmpty(true);
    }

  }

  const handleTodoDelete = (title) => {
    const deletedTodo = todoList.filter(item => item.title !== title);
    setTodoList(deletedTodo);
    if (todoList.length === 0) {
      setEmptyTodo(false);
    } else {
      setEmptyTodo(true);
    }
  }

  const handleFinishTodo = (title) => {
    const index = todoList.findIndex(item => item.title === title);
    if (index !== -1) {
      // Remove the object from TodoList and store it
      const removedItem = todoList.splice(index, 1)[0];
      const deletedTodo = todoList.filter(item => item !== removedItem);
      setTodoList(deletedTodo);

      // Insert the removed object at the beginning of finishedTodo list
      finishedTodoList.splice(0, 0, removedItem);
      setFinishedTodoList(finishedTodoList);

      if (todoList.length === 0) {
        setEmptyTodo(false);
      } else {
        setEmptyTodo(true);
      }

      if (finishedTodoList.length === 0) {
        setFinishedEmpty(false);
      } else {
        setFinishedEmpty(true);
      }

    }
  }

  const handleFinishedtoToDo = (title) => {
    const index = finishedTodoList.findIndex(item => item.title === title);
    if (index !== -1) {
      const removedItem = finishedTodoList.splice(index, 1)[0];
      const deletedTodo = finishedTodoList.filter(item => item !== removedItem);
      setFinishedTodoList(deletedTodo);

      // Insert the removed object at the beginning of finishedTodo list
      setTodoList([...todoList, removedItem]);

      if (todoList.length === 0) {
        setEmptyTodo(false);
      } else {
        setEmptyTodo(true);
      }

      if (finishedTodoList.length === 0) {
        setFinishedEmpty(false);
      } else {
        setFinishedEmpty(true);
      }

    }
  }

  return (
    <>
      <div className="flex">
        <div className="p-5 w-3/4 mx-auto bg-violet-300 mt-10 shadow-lg shadow-violet-500/50 rounded">
          <div className='flex'>
            <div className="w-1/2">
              <h1 className="text-4xl font-bold text-violet-500">My To Do List</h1>
              <div className="flex mt-3 text-violet-700">
                <div className="w-1/2 text-2xl">
                  todo : {todoList.length}
                </div>
                <div className="w-1/2 text-2xl">
                  finished : {finishedTodoList.length}
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <p className="text-right cursor-pointer">
                <i className="text-5xl bi bi-person-circle text-violet-600 mr-5"></i>
              </p>
            </div>
          </div>

          <input type="text" className='mt-10 w-full py-2 px-1 rounded text-2xl bg-violet-50' placeholder='Search' />

          {

            emptyTodo ?

              todoList.map((todo, index) => {
                return (
                  <div key={index} className="w-full rounded bg-violet-500 py-3 mt-5 px-2 hover:bg-violet-600">
                    <div className="flex">
                      <div className="w-3/4">
                        <p className='text-2xl'>{todo.title}</p>
                      </div>
                      <div className="w-1/4">
                        <div className="flex">
                          <div className="w-1/2">
                            <i className="text-2xl bi bi-square cursor-pointer text-violet-200" onClick={() => handleFinishTodo(todo.title)}></i>
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

              :

              <div className="w-full rounded py-3 mt-5 px-2 text-center text-2xl font-bold text-violet-200">No ToDos</div>

          }

          <div className="w-full rounded  py-2 mt-5 px-2 cursor-pointer">
            <div className="flex">
              <div className="w-3/4">
                <input type="text" className="w-full py-2 px-1 text-2xl rounded" placeholder='new todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
              </div>
              <div className="w-1/4">
                <button className='w-full text-center py-2 rounded text-violet-50 ml-1 text-2xl font-bold bg-violet-500 hover:bg-violet-600' onClick={handleNewTodo}>
                  add
                </button>
              </div>
            </div>
          </div>

          <p className='text-2xl mt-3 font-bold text-violet-500 ml-2'>finished</p>

          {

            finishedEmpty ?

              finishedTodoList.map((finish, index) => {
                return (

                  <div key={index} className="w-full rounded bg-violet-400 py-3 mt-5 px-2 hover:bg-violet-200">
                    <div className="flex">
                      <div className="w-3/4">
                        <p className='text-2xl line-through text-gray-600'>{finish.title}</p>
                      </div>
                      <div className="w-1/4">
                        <div className="flex">
                          <div className="w-1/2">
                            <i className="text-2xl bi bi-check-square cursor-pointer text-violet-600 hover:text-violet-900" onClick={() => handleFinishedtoToDo(finish.title)}></i>
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

              :

              <div className="w-full rounded py-3 mt-5 px-2 text-center text-2xl font-bold text-violet-200">No finished ToDos</div>

          }

        </div>
      </div>
    </>
  )
}

export default App
