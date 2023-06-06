import React, {useState, useEffect}  from "react";
import data from "./datas/goals-data.js";
import weekgoal from "./datas/goals-weekly.js";
import Goal from "./Goal.js";

export default function GoalsAll(props){
    const[isBlue, setIsBlue] = useState(false)
    const[goalData, setGoalData] = useState([])
    const[isDaily, setIsDaily] = useState(true)
    const[isWeekly, setIsWeekly] = useState(false)

    const ids = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        const fetchedData = [];
      
        ids.forEach(id => {
          const data = localStorage.getItem(`today-${id}`);
          if (data) {
            fetchedData.push(JSON.parse(data));
          }
        });

        setGoalData(fetchedData);
      }, [goalData.length]);

      console.log(goalData)

    const components = data.map(dat => {
        return <Goal
            icon={dat.icon}
            click={isBlue}
            id={dat.id}
            key={dat.id}
            all={true}
        />
    })

    const componenetsWeekly = weekgoal.map(dat => {
        return <Goal
        icon={dat.icon}
        click={isBlue}
        id={dat.id}
        key={dat.id}
        all={true}
        weeklyTime={dat.time}
        weekly={isWeekly}
    />
    })

    const dailyStats = data.map((dat, index) => {
        const height = goalData[index];
        return (
          <div key={dat.id} className="goal-stat" style={{ height: `${height * 10}%`, backgroundColor: dat.color }}>
            {/* Render other content */}
          </div>
        );
      });
      

    const weeklyStats = weekgoal.map(dat => {
        return <div key={dat.id} className="goal-stat" style={{height: `${dat.time * 2}%`, backgroundColor: dat.color}}></div>
    })  
      

    function daily(){
        setIsDaily(true)
        setIsWeekly(false)
    }

    function weekly(){
        setIsWeekly(true)
        setIsDaily(false)
    }

    return(
        <main className="goalsall--container">
             <h2>Goals Stats</h2>
             <div className="goalsall--container-period">
                <h4 onClick={daily} className={`${isDaily && "is-current-period"}`}>Daily</h4>
                <h4 onClick={weekly} className={`${isWeekly && "is-current-period"}`}>Weekly</h4>
             </div>
             <div className="goalsall-statistic--box">
                {isDaily && dailyStats}
                {isWeekly && weeklyStats}
             </div>
             <div className="goalsall--componenets-box">
                {isDaily && components}
                {isWeekly && componenetsWeekly}
             </div>
        </main>
    )
}