import React, { useState, useEffect } from 'react';


function Todo() {

    // let [todo, addtodo] = useState([]);
    let [todo, addtodo] = useState(
        () => JSON.parse(window.localStorage.getItem("todo")) || []
    )
    let [something, newthing] = useState('');

    useEffect(() => {
        window.localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])



    return (
        <div className="Listform">
            <h2>🖊️ Today's To Do  🖊️</h2>
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
                    todo.map((list, index) => {
                        return <li key={index} >{list}

                            <button onClick={() => {
                                var todo_copy = todo;
                                todo_copy.splice(index, 1);
                                addtodo(todo_copy)
                                newthing(" ");
                                alert("할 일을 해결하였습니다.")

                            }} className="delete">🗑️</button>
                        </li>

                    })
                }

            </div>


            <button className="clear" onClick={() => {
                addtodo([])
            }}>전체 삭제</button>




        </div >

    );
}
export default Todo;
