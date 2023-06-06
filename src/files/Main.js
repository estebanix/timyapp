import React, { useState } from "react";

export default function Main(props) {
  const [goal, setGoal] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleGoalSave = () => {
    localStorage.setItem("mainGoal", goal);
    setIsEditing(false);
  };

  const handleGoalClick = () => {
    setIsEditing(true);
  };

  const renderGoal = () => {
    if (isEditing) {
      return (
        <div className="main--input-box">
          <textarea value={goal} onChange={handleGoalChange} />
          <button onClick={handleGoalSave}>Confirm</button>
        </div>
      );
    } else {
      const savedGoal = localStorage.getItem("mainGoal");
      return savedGoal ? (
        <p className="saved--goal" onClick={handleGoalClick}>{savedGoal}</p>
      ) : (
        <p className="clickon--goal" onClick={handleGoalClick}>Click to set your daily goal</p>
      );
    }
  };

  return (
    <main className={`main--container ${props.darkMode && "main--container-dark"}`}>
      <h4>Your main focus for today is: </h4>
      {renderGoal()}
    </main>
  );
}
