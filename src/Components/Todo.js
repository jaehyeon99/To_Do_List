import React, { useState, useEffect } from 'react';


function Todo() {

    // let [todo, addtodo] = useState([]);
    let [todo, addtodo] = useState(
        () => JSON.parse(window.localStorage.getItem("todo")) || [""]
    )
    let [something, newthing] = useState('');

    useEffect(() => {
        window.localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])



    return (
        <div className="Listform">
            <h2>ποΈ Today's To Do  ποΈ</h2>
            <br />
            <hr className="line" />

            <input value={something} className="write" onChange={(e) => {
                newthing(e.target.value)
            }} type="text" placeholder="μ€λμ ν  μΌ"></input>

            <button value={something} className="add" onClick={() => {
                var copy = [...todo];
                something === '' ?

                    alert("ν  μΌμ μλ ₯ν΄μ£ΌμΈμ")
                    :
                    copy.push(something);
                addtodo(copy);

                newthing('');



            }}
            >μΆκ°νκΈ°</button>
            <div className="mylist">

                {
                    todo.map((list, index) => {
                        return <li key={index} >{list}

                            <button onClick={() => {
                                var todo_copy = [...todo]
                                todo_copy.splice(index, 1);
                                addtodo(todo_copy)
                                newthing(" ");
                                alert("ν  μΌμ ν΄κ²°νμμ΅λλ€.")

                            }} className="delete">ποΈ</button>
                        </li>

                    })
                }

            </div>


            <button className="clear" onClick={() => {
                addtodo([])
            }}>μ μ²΄ μ­μ </button>




        </div >

    );
}
export default Todo;
