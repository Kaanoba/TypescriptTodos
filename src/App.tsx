
import './App.css'
import Input from "./components/Input.tsx";
import React, {useState} from "react";
import {Todos} from "./types/type.ts";
import Message from "./components/Message.tsx";

const App:React.FC = () => {

    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todos[]>([])

    const addMessage = () => {
        if (todo)
            setTodos([...todos, {message: todo, id: todos.length + 1}])
        setTodo('')
    }

    const deleteMessage = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }



    return (
    <div className={'bg-amber-100 border-2 w-max h-max flex justify-center mx-auto mt-4 p-2 rounded-lg'}>
        <div>
            <h1 className={'font-semibold text-center mb-4 text-3xl'}>Todo App</h1>
            <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
            <Message deleteMessage={deleteMessage} todos={todos}/>
        </div>

    </div>
  )
}

export default App
