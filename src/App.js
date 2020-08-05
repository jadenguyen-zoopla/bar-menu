import React, {useState} from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";
import {Settings, AddItem} from "./Settings/Settings";

export const App = () => {

  const [currentTitle, setTitle] = useState("My Cocktail bar");
  const [currentItem1, newItem1] = useState("Garlic Bread");
  const [currentItem2, newItem2] = useState("Chicken");
  const [currentItem3, newItem3] = useState("Bread");
  const [currentItem4, newItem4] = useState("Avocado");
  const [currentItem5, newItem5] = useState("Steak");

  // const [hue, setHue] = useState(0);
  // const [saturation, setSaturation] = useState(100);
  // const [brightness, setBrightness] = useState(50);

  // const color = {
  //   hue, saturation, brightness
  // };

  //     const setColor = color => {
  //       setHue(color.hue);
  //       setSaturation(color.saturation);
  //       setBrightness(color.brightness);
  //   };


  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>
        <Preview title={currentTitle} newItem1={currentItem1} newItem2={currentItem2} newItem3={currentItem3} newItem4={currentItem4} newItem5={currentItem5}/>
        <Settings selectedTitle={currentTitle} setTitle={setTitle}/>
        <AddItem selectedItem={currentItem1} setItem={newItem1}/>
        <AddItem selectedItem2={currentItem2} setItem={newItem2}/>
        <AddItem selectedItem3={currentItem3} setItem={newItem3}/>
        <AddItem selectedItem4={currentItem4} setItem={newItem4}/>
        <AddItem selectedItem5={currentItem5} setItem={newItem5}/>

        {/* <ColorSwab hue={selectedHue} saturation={selectedSaturation} brightness={selectedBrightness}/>
        <Slider name="Hue" selectedValue={selectedHue} setHue={setHue}/>
        <Slider name="Saturation" selectedValue={selectedSaturation} setHue={setSaturation}/>
        <Slider name="Brightness" selectedValue={selectedBrightness} setHue={setBrightness}/> */}
    </main>
  );
};