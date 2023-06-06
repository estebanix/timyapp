import React, { useEffect, useState } from "react";

export default function TasksAll(props){
    const [tasks, setTasks] = useState(props.tasks)
    const flow = tasks.map(dat => {
        return <div className="history--task" key={dat.map(data => data.name)}>
            {dat.map(data => data.name)}
            <div className="history--task-time">
                {dat.map(data => data.finalMinutes)}:
                {dat.map(data => data.finalSeconds)}
            </div>
            </div>
    })

    return(
        <main className="tasksall--container">
            <h2>Tasks History</h2>
            <div className="tasks--all-box">
                <div className="tasks--all-box-wrapper" >
                    {flow}
                </div>
            </div>
        </main>
    )
}