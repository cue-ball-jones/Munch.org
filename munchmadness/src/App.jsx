import { useState, useEffect } from 'react'
import Pie from "./ProgressCircle";
import './App.css'


function App() {

  useEffect(() => {
    const lastReset = localStorage.getItem("lastReset");
    const today = new Date().toDateString();
    const streakNum = Number(localStorage.getItem("streak") || 0);

    if (lastReset !== today){
      if(+totalCal >= +calGoal && +totalPro >= +proGoal){
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

  const [currCal, setCurrCal] = useState(0);

  const currCalChange = (e) => {
    const newCurrCal = e.target.value;
    setCurrCal(newCurrCal);
  };

  const [currPro, setCurrPro] = useState(0);

  const currProChange = (e) => {
    const newCurrPro = e.target.value;
    setCurrPro(newCurrPro);
  };

  const [currCarb, setCurrCarb] = useState(0);

  const currCarbChange = (e) => {
    const newCurrCarb = e.target.value;
    setCurrCarb(newCurrCarb);
  };

  const [currFat, setCurrFat] = useState(0);

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

    alert("Eated");
  };



  return (
      <div>

        {/*start of pie chart guy code*/}       
        <div>
          <Pie 
            currentVal={totalCal}
            totalVal={calGoal}
            units="Calories"
            colour="red"
            size="25vw"
          />
        </div>


        <div class="streak">
          <h3>Streak:&nbsp;</h3>
          <h3>{streakVal}</h3>
        </div>

        <div>
          <h1>Munch.org</h1>
        </div>
        
        <div>
          <h2>Current Stats</h2>

          <div class="logContainer"> 

            <div class="vertSpread">
              <div>
                <p>Calories:</p>
                <p>{totalCal}</p>
              </div>
            </div>
            
            <div class="goals">
              <h4>Goals</h4>

              <div class="zontDiv">
                <p>Calories: &nbsp;</p>
                <input
                  type="number"
                  value={calGoal}
                  onChange={calGoalChange}
                />
              </div>
              
              <div class="zontDiv">
                <p>Protein: &nbsp;</p>
                <input
                  type="number"
                  value={proGoal}
                  onChange={proGoalChange}
                />
              </div>

              <div class="zontDiv">
                <p>Carbohydrates:&nbsp;</p>
                <input
                  type="number"
                  value={carbGoal}
                  onChange={carbGoalChange}
                />
              </div>

              <div class="zontDiv">
                <p>Fat:&nbsp;</p>
                <input
                  type="number"
                  value={fatGoal}
                  onChange={fatGoalChange}
                />
              </div>
              
            </div>

          </div>
          
          <div class="logContainer"> 
            <div>
              <p>Protein:</p>
              <p>{totalPro}</p>
            </div>
            
            <div>
              <p>Carbohydrates:</p>
              <p>{totalCarb}</p>
            </div>

            <div>
              <p>Fat:</p>
              <p>{totalFat}</p>
            </div>
          </div>
          
        </div>

        <div>
          <h2>Track Meal</h2>

          <div class="logContainer">
         
            <div>
              <p>Calories:</p>
              <input
                type="number"
                value={currCal}
                onChange={currCalChange}
              />
              <p>Carbohydrates:</p>
              <input
                type="number"
                value={currCarb}
                onChange={currCarbChange}
              />
            </div>

            <div>
              <p>Protein:</p>
              <input
                type="number"
                value={currPro}
                onChange={currProChange}
              />
              <p>Fat:</p>
              <input
                type="number"
                value={currFat}
                onChange={currFatChange}
              />
            </div>

          </div>
        </div>

        <div class="logButton">
          <button onClick={totalChange}>
            Eat!
          </button>
        </div>

      </div>
  )
}

export default App
