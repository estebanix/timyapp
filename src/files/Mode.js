import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMountainSun} from '@fortawesome/free-solid-svg-icons';

export default function Mode(props){
    return(
        <main className={`mode--container ${props.darkMode && "mode--container-dark"}`} onClick={props.handleClick}>
            <FontAwesomeIcon icon={faMountainSun} />
        </main>
    )
}