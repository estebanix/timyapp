import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPersonRunning, faBookOpen, faBed, faComments, faTv } from '@fortawesome/free-solid-svg-icons'

export default [
    {
        id: 1,
        icon: <FontAwesomeIcon className="goals--container-icon" icon={faBriefcase} />,
        time: 48,
        color: "#CB997E"
    },
    {
        id: 2,
        icon: <FontAwesomeIcon className="goals--container-icon" icon={faPersonRunning} />,
        time: 15,
        color: "#DDBEA9"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon className="goals--container-icon" icon={faBookOpen} />,
        time: 6,
        color: "#FFE8D6"
    },
    {
        id: 4,
        icon: <FontAwesomeIcon className="goals--container-icon" icon={faBed} />,
        time: 51,
        color: "#B7B7A4"
    },
    {
        id: 5,
        icon: <FontAwesomeIcon className="goals--container-icon" icon={faComments} />,
        time: 7,
        color: "#A5A58D"
    },
    {
        id: 6,
        icon: <FontAwesomeIcon className="goals--container-icon" icon={faTv} />,
        time: 8,
        color: "#6B705C"
    }
]