import React from 'react';
import {Todos} from "../types/type.ts";

type Props = {
    todos: Todos[],
    deleteMessage: (id: number) => void
}

const MyComponent:React.FC<Props> = ({todos, deleteMessage}) => {
    return (
        <div >
            {todos.map((todo, index) => (
                <div className={'font-semibold flex justify-between p-2'} key={index}>
                    {todo.message}  <span onClick={() => deleteMessage(todo.id)} className={'border-2 rounded-lg transition hover:bg-red-500 cursor-pointer w-5 text-center  border-red-500'}>X</span>
                </div>
            ))}
        </div>
    );
};

export default MyComponent;
