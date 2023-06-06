import React, {useState} from "react";
import Switch from "react-switch";

export default function Nav(props){

    return(
        <nav className="nav--container">
            <h2 className='logo--text'>TIMY</h2>
            <Switch className="dark--switch"
            onChange={props.handleChange}
            checked={props.checked}
            />
            <div className="nav--setting-box">
                <h4 onClick={props.handleGoalsAll}>Goals</h4>
                <h4 onClick={props.handleTasks}>Tasks</h4>
                <h4 onClick={props.handleHelp} className="nav--help">Help</h4>
            </div>
        </nav>
    )
}