import React, { useState } from 'react';


function Todo() {


    let [todo, addtodo] = useState([]);
    let [something, newthing] = useState('');
    let [del, newdel] = useState(false);



    return (
        <div className="Listform">
            <h2>🖊️ Today's To Do List 🖊️</h2>
            <br />
            <hr className="line" />
            <input value={something} className="write" onChange={(e) => {
                newthing(e.target.value)
            }} type="text" placeholder="오늘의 할 일"></input>

            <button value={something} className="add" onClick={() => {
                var copy = [...todo];

                something === '' ?

                    alert("할 일을 입력해주세요")
                    :
                    copy.push(something);
                addtodo(copy);
                newthing('');



            }}
            >추가하기</button>
            <div className="mylist">
                {
                    todo.map((map, index) => {
                        return <li className={del ? 'checked' : 'notcheck'} key={index} >{map} <button onClick={() => {
                            newdel(true);

                        }} className="delete">🗑️</button>
                        </li>

                    })
                }
            </div>
            <button className="clear" onClick={() => {
                addtodo([])
            }}>전체 삭제</button>




        </div>

    );
}
export default Todo;
