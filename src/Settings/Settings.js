import React from "react";
import * as styles from "./Settings.module.scss";

export const Settings = ({selectedTitle, setTitle}) => {
    const updateTitle = (event) => {
        const newTitle = event.target.value;
        setTitle (newTitle);
    }  
    return (
        <section>
            <h2>Settings</h2>
            <div>
            <label>Change Title: </label>
            <input onChange={updateTitle} value={selectedTitle}></input>
            
            </div>
        </section>
    );
};

export const AddItem = ({selectedItem, setItem}) => {

    const changeItem = (event) => {
        setItem(event.target.value)
    };

    return (
        <section>
            <label>Change Item: </label>
            <input onChange={changeItem}></input>
        </section>
    )
}


// export const ColorSwab = ({hue, saturation, brightness}) => {
//     let swabStyle = {
//         background: `hsl(${hue}, ${saturation}, ${brightness})`
//     }

//     return (
//         <div className={styles.colorSquare} style={swabStyle}></div>
        
//     );
// };

// export const Slider = ({name, selectedValue, setHue}) => {
//     const updatedSlider = (event) => {
//         const newPosition = event.target.value;
//         setHue (newPosition);
//     }

//     return (
//         <div>
//             <label>{name}</label>
//             <input onChange={updatedSlider} type="range" min="0" max="360" value={selectedValue}></input>
//         </div>
//     );
// };