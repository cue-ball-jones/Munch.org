import { useState, useEffect } from 'react'
import Pie from "./ProgressCircle";
import './App.css'



function App() {

  useEffect(() => {
    const lastReset = localStorage.getItem("lastReset");
    const today = new Date().toDateString();
    const streakNum = Number(localStorage.getItem("streak") || 0);

    if (lastReset !== today){

    const savedCal = Number(localStorage.getItem("totalCal") || 0);
    const savedPro = Number(localStorage.getItem("totalPro") || 0);
    const savedCalGoal = Number(localStorage.getItem("calGoal") || 0);
    const savedProGoal = Number(localStorage.getItem("proGoal") || 0);

      if(+savedCal >= +savedCalGoal && +savedPro >= +savedProGoal && savedCalGoal > 0 && savedProGoal > 0){
        localStorage.setItem("streak", streakNum + 1);
      }
      else{
        localStorage.setItem("streak", 0);
      }

      localStorage.setItem("totalCal", 0);
      localStorage.setItem("totalPro", 0);
      localStorage.setItem("totalCarb", 0);
      localStorage.setItem("totalFat", 0);
      
      localStorage.setItem("lastReset", today);
    }
  }, []);

  const streakVal = localStorage.getItem("streak");

  const [calGoal, setCalGoal] = useState(localStorage.getItem("calGoal"));

  const calGoalChange = (e) => {
    const newCalGoal = e.target.value;
    setCalGoal(newCalGoal);
    localStorage.setItem("calGoal", newCalGoal);
  };

  const [proGoal, setProGoal] = useState(localStorage.getItem("proGoal"));

  const proGoalChange = (e) => {
    const newProGoal = e.target.value;
    setProGoal(newProGoal);
    localStorage.setItem("proGoal", newProGoal);
  };

  const [carbGoal, setCarbGoal] = useState(localStorage.getItem("carbGoal"));

  const carbGoalChange = (e) => {
    const newCarbGoal = e.target.value;
    setCarbGoal(newCarbGoal);
    localStorage.setItem("carbGoal", newCarbGoal);
  };

  const [fatGoal, setFatGoal] = useState(localStorage.getItem("fatGoal"));

  const fatGoalChange = (e) => {
    const newFatGoal = e.target.value;
    setFatGoal(newFatGoal);
    localStorage.setItem("fatGoal", newFatGoal);
  };

  const [currCal, setCurrCal] = useState("");

  const currCalChange = (e) => {
    const newCurrCal = e.target.value;
    setCurrCal(newCurrCal);
  };

  const [currPro, setCurrPro] = useState("");

  const currProChange = (e) => {
    const newCurrPro = e.target.value;
    setCurrPro(newCurrPro);
  };

  const [currCarb, setCurrCarb] = useState("");

  const currCarbChange = (e) => {
    const newCurrCarb = e.target.value;
    setCurrCarb(newCurrCarb);
  };

  const [currFat, setCurrFat] = useState("");

  const currFatChange = (e) => {
    const newCurrFat = e.target.value;
    setCurrFat(newCurrFat);
  };

  const [totalCal, setTotalCal] = useState(localStorage.getItem("totalCal"));
  const [totalPro, setTotalPro] = useState(localStorage.getItem("totalPro"));
  const [totalCarb, setTotalCarb] = useState(localStorage.getItem("totalCarb"));
  const [totalFat, setTotalFat] = useState(localStorage.getItem("totalFat"));

  const totalChange = (e) => {
    const newTotalCal = +currCal + +totalCal;
    setTotalCal(newTotalCal);
    localStorage.setItem("totalCal", newTotalCal);
    const newTotalPro = +currPro + +totalPro;
    setTotalPro(newTotalPro);
    localStorage.setItem("totalPro", newTotalPro);
    const newTotalCarb = +currCarb + +totalCarb;
    setTotalCarb(newTotalCarb);
    localStorage.setItem("totalCarb", newTotalCarb);
    const newTotalFat = +currFat + +totalFat;
    setTotalFat(newTotalFat);
    localStorage.setItem("totalFat", newTotalFat);

    setCurrCal(0);
    setCurrPro(0);
    setCurrCarb(0);
    setCurrFat(0);

  };



  return (
      <>

        <header class="header">
          <h1>Munch.org</h1>
          <div class="streak">

            <div style={{position: 'relative', top: '0px', display: 'inline-block'}}>

            <span style={{fontSize: '1.1em', paddingRight: '2px'}}>{streakVal || 0}</span>
            
            <div style={{position: 'relative', top: '6px', display: 'inline-block'}}>
            <img src="/newStreak for adjacent.png" alt="streakLogo" style={{width: '30px'}} />
            </div>
          </div>
          </div>
        </header>

        <div class="background">
        
        <div>

          <div class="centerText">
            <h2>Current Stats</h2>
          </div>

          <div class="logContainer"> 

            <div class="styledDivRow">

            <div class="vertSpread">

              <Pie 
                currentVal={totalCal}
                totalVal={calGoal}
                units="Calories"
                colour="#2d426e"
              />
              
              <Pie 
                currentVal={totalCarb}
                totalVal={carbGoal}
                units="Carbs"
                colour="#2d426e"
              />

            </div>

            <div class="vertSpread">

              <Pie 
                currentVal={totalPro}
                totalVal={proGoal}
                units="Protein"
                colour="#2d426e"
              />
              
              <Pie 
                currentVal={totalFat}
                totalVal={fatGoal}
                units="Fat"
                colour="#2d426e"
              />

            </div>

            </div>

            </div>

            <div class="centerText">
              <h2>Remaining Macros</h2>
            </div>
            
            
            <div class="logContainer">
              <div class="styledDivRow">
              <div class="statsGrid">
                <span class="statValue">{calGoal - totalCal}</span>
                <span class="statLabel">Calories</span>

                <span class="statValue">{proGoal - totalPro}g</span>
                <span class="statLabel">Protein</span>

                <span class="statValue">{carbGoal - totalCarb}g</span>
                <span class="statLabel">Carbs</span>

                <span class="statValue">{fatGoal - totalFat}g</span>
                <span class="statLabel">Fat</span>
              </div>
              </div>
            </div>

            <div>

          <div class="centerText">
              <h2>Track Meal</h2>
            </div>

             <div class="logContainer">
              <div class="styledDivCol">
              <div class="statsGrid">
                <span class="statValueTrack">Calories:&nbsp;</span>
                <input class ="styledInputCal" inputMode="decimal" placeholder='0' value={currCal} onChange={currCalChange} />

                <span class="statValueTrack">Protein:&nbsp;</span>
                <span style={{position: 'relative'}}>
                  <input className="styledInput" inputMode="decimal" placeholder='0' value={currPro} onChange={currProChange} />
                  <span style={{position: 'absolute', right: '6.25vw', fontSize: '1.15em'}}>g</span>
                </span>

                <span class="statValueTrack">Carbs:&nbsp;</span>
                <span style={{position: 'relative'}}>
                  <input className="styledInput" inputMode="decimal" placeholder='0' value={currCarb} onChange={currCarbChange} />
                  <span style={{position: 'absolute', right: '6.25vw', fontSize: '1.15em'}}>g</span>
                </span>

                <span class="statValueTrack">Fat:&nbsp;</span>
                <span style={{position: 'relative'}}>
                  <input className="styledInput" inputMode="decimal" placeholder='0' value={currFat} onChange={currFatChange} />
                  <span style={{position: 'absolute', right: '6.25vw', fontSize: '1.15em'}}>g</span>
                </span>
                </div>

                <div style={{paddingTop: '0.5rem', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                <button style={{fontSize: '1em', paddingLeft: '5em', paddingRight: '5em', paddingTop: '0.075em', paddingBottom: '0.075em', boxShadow: '0 8px 16px 0 rgba(0, 0, 0, .15)'}} onClick={totalChange}>Eat!</button>
                </div>

              </div>
            </div>

            
          <div class="centerText">
            <h2>Goals</h2>
          </div>

          <div class="logContainer">
              <div class="styledDivCol">
              <div class="statsGrid">
                <input className="styledInput2" inputMode="decimal" placeholder='0' value={calGoal} onChange={calGoalChange} />
                <span class="statValueTrack2">&nbsp;Calories&nbsp;</span>
                
                <input className="styledInput2" inputMode="decimal" placeholder='0' value={proGoal} onChange={proGoalChange} />
                <span class="statValueTrack2">g Protein&nbsp;</span>

                <input className="styledInput2" inputMode="decimal" placeholder='0' value={carbGoal} onChange={carbGoalChange}/>
                <span class="statValueTrack2">g Carbs&nbsp;</span>

                <input className="styledInput2" inputMode="decimal" placeholder='0' value={fatGoal} onChange={fatGoalChange} />
                <span class="statValueTrack2">g Fat&nbsp;</span>
                
                  
                </div>

              </div>
            </div>


          </div>

          </div>
          
          
          <div style={{height: '4rem'}} />
        

        

      </div>


      </>
  )
}

export default App
