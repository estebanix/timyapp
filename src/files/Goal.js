import React, {useState, useEffect} from "react";
import GoalsAll from "./GoalsAll";

export default function Goal(props){

    const [isClicked, setIsClicked] = useState(props.click)
    const[today, setToday] = useState(0)
    const[week, setWeek] = useState(props.weeklyTime)
    const[goal, setGoal] = useState(0)
    const[isHovering, setIsHovering] = useState(false)


    useEffect(() => {
        const data = localStorage.getItem(`today-${props.id}`);
        if(data){
            setToday(JSON.parse(data))
        }
        },[])

    useEffect(() => {
        localStorage.setItem(`today-${props.id}`, JSON.stringify(today))
    })

    useEffect(() => {
        const data = localStorage.getItem(`goal-${props.id}`);
        if(data){
            setGoal(JSON.parse(data))
        }
        },[])

    useEffect(() => {
        localStorage.setItem(`goal-${props.id}`, JSON.stringify(goal))
    })

    function changeUpToday(){
        setToday(old => old + 1)
    }

    function changeUpGoal(){
        setGoal(old => old + 1)
    }

    function changeDownToday(){
        if(today > 0){
            setToday(old => old - 1)   
        } else{
            setToday(0)
        }
    }

    function changeDownGoal(){
        if(goal > 0){
            setGoal(old => old - 1)   
        } else{
            setGoal(0)
        }
    }

    function handleMouseOver() {
        setIsHovering(true);
      };
    
      function handleMouseOut(){
        setIsHovering(false);
      };



    return(
        <div className={`${props.all && "all-color"} goals--container-activity-box`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
                     {props.icon}
                     <div className="activity-box--stats">
                        <div className="activity-box--stats-box">
                            <p>{props.weekly ? "This Week: " : "Today: "}: {props.weekly ? week : today} h</p>
                            <div className={`change-stats--btn ${isHovering && "show-btns"} ${props.all && "no-goals"}`}>
                                <button onClick={changeDownToday}>-</button>
                                <button onClick={changeUpToday}>+</button>
                            </div>
                        </div>
                        <div className={`activity-box--stats-box ${props.all && "no-goals"}`}>
                            <p>Goal: {goal} h/day</p>
                            <div className={`change-stats--btn ${isHovering && "show-btns"}`}>
                                <button onClick={changeDownGoal}>-</button>
                                <button onClick={changeUpGoal}>+</button>
                            </div>
                        </div>
                     </div>
                </div> 
    )
}