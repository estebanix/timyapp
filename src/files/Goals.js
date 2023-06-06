import React, {useState} from "react";
import data from "./datas/goals-data.js"
import Goal from "./Goal.js";

export default function Goals(props){

    const[isBlue, setIsBlue] = useState(false)
    

    const components = data.map(dat => {
        return <Goal
            icon={dat.icon}
            click={isBlue}
            id={dat.id}
            key={dat.id}
        />
    })
    
    return(
        <main className={`goals--container ${props.darkMode && "goals--container-dark"}`}>
            <h4>Daily Goals</h4>
            <div className="daily-goals--box">
                {components}
            </div>
        </main>
    )
}

