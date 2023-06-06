import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Search(){

    const[show, setShow] = useState(false)

    return(
        <main className="search--container">
            <FontAwesomeIcon icon={faLink} className="links--icon" style={{color: "white"}} onClick={() => setShow(old => !old)} />
            <div className="search--box" style={{display: show ? "flex" : "none"}}>
                <a href="https://www.google.com/">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
            </div>
        </main>
    )
}