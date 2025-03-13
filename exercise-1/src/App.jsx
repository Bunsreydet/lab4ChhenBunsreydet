import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isSunny, setIsSunny] = useState(false);
  const [isRainy, setIsRainy] = useState(false);
  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRainy(false);
    setIsSunny(true);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRainy(true);
    setIsSunny(false);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    if(isSunny) {
      return "It's sunny";
    } else if(isRainy) {
      return "It's rainy";
    } else {
      return "No weather";
    }
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    if(isSunny) {
      return {backgroundColor:"yellow"};
    } else if(isRainy) {
      return {backgroundColor:"blue"};
    }
      else {
      return {backgroundColor:"gray"};
    }
  }

  return (
    <main style={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;