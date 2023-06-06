import React, {useState} from "react";
import modesData from "./datas/modes-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export default function ModeAll(props){

    const[isHovered, setIsHovered] = useState(false)
    const[activeMode, setActiveMode] = useState(false)

    const handleModeClick = (id) => {
      setActiveMode(id);
      props.handleMode(id)
    };

    const handleMouseEnter = (id) => {
        setIsHovered(id);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    const modes = modesData.map(dat => {
      const isActive = activeMode === dat.id;
      const isHovering = isHovered === dat.id;
  
      return (
        <div
          key={dat.id}
          className={`mini-mode--box ${isActive ? 'active' : ''}`}
          style={{ backgroundImage: `url(${require(`../images/${dat.cover}`)})`, backgroundSize: 'cover' }}
          onClick={() => handleModeClick(dat.id)}
          onMouseEnter={() => handleMouseEnter(dat.id)}
          onMouseLeave={handleMouseLeave}
        >
          {isHovering && !isActive && <p>{dat.title}</p>}
        </div>
      );
    });
    return(
        <main className="mode-all--container">
            <button onClick={props.handleClick} className="mode-all--btn"><FontAwesomeIcon icon={faXmark} /></button>
            <h3>Choose Mode</h3>
            <div className="mode--all-box">
            {modes}
            </div>
        </main>
    )
}