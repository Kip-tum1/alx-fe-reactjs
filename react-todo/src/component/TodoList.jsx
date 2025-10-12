import { useSyncExternalStore } from "react";
import { useState } from "react";

function TodoList(){
    const [tasks, setTask] = useState();
    const [newTask, setNewTask] = useState({})
    function handleChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(!newTask.trim() == ""){

            setTask (t => [...t, newTask]);
            setNewTask("")
        }
    }

    function deleteTask(index){
        const update = tasks.filter((_, i) => i !== index);
        setTask(update)
    }


    return(
        <div>
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick={addTask}>Add-Task</button>
            </div>
            <ol>                
                {tasks.map((task, index) => 
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={() => deleteTask(index)}>DeleteTask</button>
                </li>
                
                )}
            </ol>
        </div>
    )
}
export default TodoList;