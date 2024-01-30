import React from 'react';


type IProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addMessage: () => void
}

const Input:React.FC<IProps> = ({todo, setTodo, addMessage}) => {
    return (
        <div >
            <input value={todo} onChange={(e) => setTodo(e.target.value)} className={'border-2 p-1 rounded-lg w-72'} type="text" placeholder={'Write Something..'} name="" id=""/>
            <button onClick={addMessage} className={'border-amber-200 hover:bg-amber-100 transition border-2 w-14 p-1 rounded-lg ml-2'}>Add</button>
            <hr className={'mt-4'}/>
        </div>
    );
};

export default Input;
