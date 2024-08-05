import "./todo.css"
import { useState } from "react";

export default function Todo() {



  const [todo, setTodo] = useState([])
  const [addtodo, setAddtodo] = useState("")
  const [editIndex, setEditIndex] = useState(-1)



  function addTask() {
    if (addtodo.trim() !== "") {
      if (editIndex === -1) {
        setTodo([...todo, addtodo])

      } else {
        const editTodo = [...todo]
        editTodo[editIndex] = addtodo
        setTodo(editTodo)
        setEditIndex(-1)

      }
      setAddtodo("")
    }
  }
  console.log(todo);

  function handleDelete(index) {
    const deleteTodo = [...todo]
    deleteTodo.splice(index, 1)
    setTodo(deleteTodo)
  }

  function handleEdit(index) {
    setEditIndex(index)
    setAddtodo(todo[index])
  }



  return (
    <div className="main">
      <div className="inputclass">
        < input type="text" value={addtodo} onChange={(e) => setAddtodo(e.target.value)} placeholder="Enter task here..."/>
        <button onClick={addTask}>
          {
            editIndex === -1 ? "Add Task" : "Edit Task"

          }
        </button>
      </div>
      <div className="tableclass">
        <table>
          {
            todo.map((task, index) =>
              <tr>
                <td>
                  {task}
                </td>

                <td><button onClick={() => handleEdit(index)}>edit</button>
                  <button onClick={() => handleDelete(index)}>delete</button></td>



              </tr>
            )
          }

        </table>

      </div>

    </div>
  )
}

