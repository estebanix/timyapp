import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import Main from './files/Main';
import Nav from './files/Nav';
import Goals from './files/Goals';
import Tasks from './files/Tasks';
import GoalsAll from './files/GoalsAll';
import TasksAll from './files/TasksAll';
import Help from './files/Help';
import Mode from './files/Mode';
import Weather from './files/Weather';
import Time from './files/Time';
import ModeAll from './files/ModeAll';
import modesData from './files/datas/modes-data';
import Search from './files/Search';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [goalsAll, setGoalsAll] = useState(false)
  const [allModes, setAllModes] = useState(false)
  const [help, setHelp] = useState(false)
  const [tasksAll, setTasksAll] = useState(false)
  const [activeMode, setActiveMode] = useState(2)
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const storedActiveMode = localStorage.getItem("activeMode");
    if (storedActiveMode) {
      setActiveMode(parseInt(storedActiveMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeMode", activeMode.toString());
  }, [activeMode]);

  /* START NWM FLOW */

  useEffect(() => {
    const storedTasks = localStorage.getItem("all_tasks");
    setAllTasks(JSON.parse(storedTasks) || []);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("all_tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  /* END NWM FLOW */
  function handleChange(){
    setDarkMode(oldState => !oldState)
  }

    const currentMode = modesData.find(mode => mode.id === activeMode);
    const styles = {
    backgroundImage: darkMode ? `url(${require(`./images/${currentMode.dark_mode}`)})` : `url(${require(`./images/${currentMode.light_mode}`)})`
  };
    

      function openGoalsAll(){
        setGoalsAll (old => !old)
        setHelp(false)
        setTasksAll(false)
      }

      function openHelp(){
        setHelp(old => !old)
        setGoalsAll(false)
        setTasksAll(false)
      }

      function openTasksAll(){
        setTasksAll(old => !old)
        setGoalsAll(false)
        setHelp(false)
      }

      function openModesAll(){
        setAllModes(old => !old)
      }

      function getCurrentMode(e){
        setActiveMode(e)
      }

      function getAllTasks(e){
        setAllTasks(old => [...old, e])
      }

  return (
   <main style={styles} className={`main--screen ${darkMode && "main--screen-dark"}`}>
    <Nav 
        handleChange={ () => handleChange()} 
        checked={darkMode} 
        handleGoalsAll={openGoalsAll} 
        handleHelp={openHelp}
        handleTasks={openTasksAll}
      />
    <Main darkMode = {darkMode}/>
    <Goals darkMode = {darkMode}/>
    <Tasks darkMode = {darkMode} handleAllTasks = {getAllTasks}/>
    <Mode handleClick = {openModesAll} darkMode = {darkMode}/>
    <Weather darkMode = {darkMode}/>
    <Time darkMode = {darkMode}/>
    {tasksAll && <TasksAll tasks={allTasks} />}
    {goalsAll && <GoalsAll />}
    {help && <Help />}
    {allModes && <ModeAll handleClick = {openModesAll} handleMode = {getCurrentMode} />}
    <Search />
   </main>
  );
}

export default App;
