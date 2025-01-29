import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleNFLClick = () => 
  {
    setCurrentScreen('nfl');
  };

  const handleNBAClick = () => 
  {
    setCurrentScreen('nba');
  };

  const handleMLBClick = () => 
  {
    setCurrentScreen('mlb');
  };

  const handleEPLClick = () => 
  {
    setCurrentScreen('epl');
  };

  return (
    <div className="App">

      {currentScreen === 'home' && (
        <>
          <h1 className="title">SPORTS TRIVIA GAME</h1>

          <p className="rules">
            Rules: <br />
            1. Press the button below to select a sport <br />
            2. Answer trivia questions as fast as possible <br />
            3. No cheating, Google or AI is prohibited
          </p>

          <div className="button-container">

            <button className="button-82-pushable" onClick={handleNFLClick}>
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">NFL</span>
            </button>

            <button className="button-82-pushable" onClick={handleNBAClick}>
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">NBA</span>
            </button>

            <button className="button-82-pushable" onClick={handleMLBClick}>
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">MLB</span>
            </button>

            <button className="button-82-pushable" onClick={handleEPLClick}>
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">EPL</span>
            </button>

          </div>

          <div className="author">Made by Amraj Koonar.</div>

          <button className="custom-button">
            <div className="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
                <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
                <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
              </svg>
            </div>
            <p className="button-text">Go Back</p>
          </button>
        </>
      )}

          <label htmlFor="theme" className="theme">
                <span className="theme__toggle-wrap">
                  <input
                    id="theme"
                    className="theme__toggle"
                    type="checkbox"
                    role="switch"
                    name="theme"
                    value="dark"
                  />
                  <span className="theme__fill"></span>
                  <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                  </span>
                </span>
              </label>


            
          <button type="button" class="button">
            <span class="button__text">Refresh</span>
            <span class="button__icon"><svg class="svg" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path><path d="M0 0h48v48h-48z" fill="none"></path></svg></span>
          </button>


      

      {currentScreen === 'nfl' && (
        <div className="nfl-screen">
          <h1>NFL Trivia</h1>
          <p>Trivia questions will go here.</p>
        </div>
      )}

      {currentScreen === 'nba' && (
        <div className="nba-screen">
          <h1>NBA Trivia</h1>
          <p>Trivia questions will go here.</p>
        </div>
      )}

      {currentScreen === 'mlb' && (
        <div className="mlb-screen">
          <h1>MLB Trivia</h1>
          <p>Trivia questions will go here.</p>
        </div>
      )}

      {currentScreen === 'epl' && (
        <div className="epl-screen">
          <h1>EPL Trivia</h1>
          <p>Trivia questions will go here.</p>
        </div>
      )}

      

    </div>
  );
}

export default App;
