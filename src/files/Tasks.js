import React, { useState, useEffect } from "react";

export default function Tasks(props) {
  const [currentTasks, setCurrentTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    setCurrentTasks((old) => [...old, { name: inputValue, minutes: 0, seconds: 0 }]);
    setInputValue("");
  }

  function removeTask(name) {
    const removedTask = currentTasks.find((task) => task.name === name);
    if (removedTask) {
      const updatedTasks = currentTasks.filter((task) => task.name !== name);
      const finalTime = getFinalTime(removedTask);
      setCompletedTasks((prevTasks) => [...prevTasks, { ...removedTask, ...finalTime }]);
      setCurrentTasks(updatedTasks);
    }
  }

  function getFinalTime(task) {
    const finalMinutes = task.minutes;
    const finalSeconds = task.seconds.toString().padStart(2, "0");
    return { finalMinutes, finalSeconds };
  }

  function getInput(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  function stopSubmit(e) {
    e.preventDefault();
    console.log("refresh prevented");
  }

  useEffect(() => {
    currentTasks.forEach((task) => {
      task.timer = setInterval(() => {
        setCurrentTasks((old) => {
          const updatedTasks = old.map((t) => {
            if (t === task) {
              if (t.seconds === 59) {
                t.minutes += 1;
                t.seconds = 0;
              } else {
                t.seconds += 1;
              }
            }
            return t;
          });
          return updatedTasks;
        });
      }, 1000);
    });

    return () => {
      currentTasks.forEach((task) => clearInterval(task.timer));
    };
  }, [currentTasks]);

  const activeTaskComponents = currentTasks.map((dat) => {
    return (
      <div className="task--box">
        <button className="remove-task--btn" onClick={() => removeTask(dat.name)}></button>
        {dat.name}
        <p className="task--time">
          {dat.minutes.toString().padStart(2, "0")}:{dat.seconds.toString().padStart(2, "0")}
        </p>
      </div>
    );
  });

  useEffect(() => {
    if (completedTasks.length > 0) {
      const lastTask = completedTasks[completedTasks.length - 1];
      if (lastTask !== null) {
        props.handleAllTasks([lastTask]);
      }
    }
  }, [completedTasks.length]);

  return (
    <main className={`tasks--container ${props.darkMode && "tasks--container-dark"}`}>
      <h3>Active Tasks</h3>
      <div className="tasks--box">
        {activeTaskComponents}
        <div className="add-task--box">
          <button className={`add-task--btn ${props.darkMode && "add-task--btn-dark"}`} onClick={addTask}>
            +
          </button>
          <form className="add-task--form" onSubmit={stopSubmit}>
            <input
              className="add-task--input"
              onChange={getInput}
              value={inputValue}
              type="text"
              placeholder="What are you working on?"
            ></input>
          </form>
        </div>
      </div>
    </main>
  );
}
