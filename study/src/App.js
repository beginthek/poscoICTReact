import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
import TodoList from "./component/TodoList"
import SaveTodo from "./component/SaveTodo"

function App() {
    const [
        todoList,
        setTodoList,
    ] =
        useState(
            []
        )

    const saveTodo =
        (
            e
        ) => {
            let todo =
                document.getElementById(
                    "todo"
                )
            let copy =
                [
                    ...todoList,
                ]
            copy.push(
                todo.value
            )
            setTodoList(
                copy
            )
            todo.value =
                ""
            //
        }

    const deleteTodo =
        (
            e
        ) => {
            let parentElement =
                e
                    .target
                    .parentElement
            parentElement.style.textDecorationLine =
                "line-through"
        }
    ;<h1></h1>
    return (
        <div className="App">
            <h1>
                Todo
                List
            </h1>

            <SaveTodo
                saveTodo={
                    saveTodo
                }
            />
            <TodoList
                todoList={
                    todoList
                }
                deleteTodo={
                    deleteTodo
                }
            />
        </div>
    )
}

export default App
