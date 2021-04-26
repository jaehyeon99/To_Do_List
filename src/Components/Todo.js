import React, { useState } from 'react';


function Todo() {


    let [todo, addtodo] = useState([]);
    let [something, newthing] = useState('');

    return (
        <div className="Listform">
            <h2>Today's To Do List</h2>
            <br />
            <input onChange={(e) => {
                newthing(e.target.value)
            }} type="text" placeholder="오늘의 할 일"></input>

            <button value={something} className="add" onClick={() => {
                var copy = [...todo];
                copy.push(something);
                addtodo(copy);

            }}
            >추가하기</button>
            <div className="mylist">
                {
                    todo.map((map, index) => {
                        return <li key={index} >{map} <button onClick={() => {
                            todo.splice(index, 1);
                            newthing(' ');
                        }} className="delete">🗑️</button>
                        </li>

                    })
                }

            </div>



        </div>

    );
}
export default Todo;
