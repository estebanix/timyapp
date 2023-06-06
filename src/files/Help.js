import React from "react";

export default function Help(){
    return(
        <main className="help--container">
            <h2>HELP</h2>
            <div className="help--scroll-wrapper">
            <p>Dear user. Thank you for using the TIMY app. In this section you will find an explanation on the use of single-level components. The application is still in alpha version and therefore only organizes the data it stores on your localstorage.</p>
            <p>In the "Daily Goals" box, you can choose your daily goal for specific activities and then write down and track how you're doing on those goals. When you open Goals on the panel in the top right corner, you will see a graph and your current values for a certain period.</p>
            <p>On the right side of the chrome extension there is a box with tasks. There you can write down every task you are currently working on. A timer will be turned on when the cue comes up so you will know how much time to write down in Daily Goals. On the top right panel there is a box with the history of the tasks.</p>
            <p>In the Main Focus box, you can set the most important goal of your day and it will be a big reminder all day long.</p>
            <p>Small boxes are used for basic time and weather information. In the box with the mountain icon you can choose the theme of your extension.</p>
            <p>The buttons at the top of the screen are used to search and change the light and dark modes.</p>
            <p>If you didn't find the advice you were looking for here, feel free to contact us at samuelkertes@gmail.com</p>
            </div>
        </main>
    )
}