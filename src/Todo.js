import React, {useState} from 'react';
import DateObject from "react-date-object";
import "./todo.css"


const Todo = () => {

    // Array to store Todo
    const [myTask, setTask] = useState(["Travel", "Design"]);

    //Input
    const [currentTask, setCurrentTask] = useState("")

    //Input Placeholder
    const [placeHolder, setPlaceHolder] = useState("Enter Task...")

    // Placeholder Color
    const [placeHolderColor, setplaceHolderColor] = useState(" ")


    //Input Function
    const collectIt = (event) => {
        setCurrentTask(event.target.value)
    }

    const undefinedTodo = "Undefined Todo"
    const sendData = () => {
        if (currentTask !== "") {
            if (currentTask.trim() === "") {
                setTask([...myTask, undefinedTodo])
                setCurrentTask("")
                setplaceHolderColor(" ")
                setPlaceHolder("Add Task...")
            } else {
                setTask([...myTask, currentTask])
                setCurrentTask("")
                setplaceHolderColor(" ")
                setPlaceHolder("Enter Task...")
            }
        } else {
            setplaceHolderColor("red")
            setPlaceHolder("Please Enter Task...")
        }
    }

    // DateObject
    const dateObject = new DateObject();

    return (
        <>
            <div className="input-group pb-4">
                <input type="text"
                       className={`form-control p-3 ${placeHolderColor}`}
                       onChange={collectIt}
                       value={currentTask}
                       placeholder={placeHolder}/>
                <button onClick={sendData}
                        className="btn btn-outline-secondary text-light"
                        type="button">
                    Add Task
                </button>
            </div>

            {
                myTask.map(function (i, j) {

                    // DeleteTask
                    function deleteTask(j) {
                        const newTask = [...myTask];
                        newTask.splice(j, 1)
                        setTask(newTask)
                        console.log(j)
                    }

                    return (
                        <>
                            <div className="accordion my-3"
                                 id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header"
                                        id="headingOne">
                                        <button className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={"#" + j}
                                                aria-expanded="false"
                                                aria-controls="collapseOne">
                                            <span>{j + 1}. {i}</span>
                                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span><i id={`${j}`}
                                                     className="fa-solid fa-trash-can deleteicon"
                                                     onClick={function () {
                                                         deleteTask(j)
                                                     }}></i></span>
                                        </button>
                                    </h2>
                                    <div id={`${j}`}
                                         className="accordion-collapse collapse"
                                         aria-labelledby="headingOne"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="form-floating">
                                                    <textarea className="form-control"
                                                              placeholder=" "
                                                              id="floatingTextarea"></textarea>
                                                <label htmlFor="floatingTextarea">Todo
                                                    Description
                                                    &nbsp;
                                                    <span className=" fw-lighter">
                                                        <small>{dateObject.format("DD/MM/YYYY hh:mm a")}</small>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }


        </>
    );
}


export default Todo;