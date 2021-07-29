import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [input, setInput] = useState("");
  const [numOfPeople, setnumOfPeople] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const [percent, setPercent] = useState("");

  useEffect(() => {
    if ((input !== "") & (numOfPeople !== "") & (percent !== "")) {
      const perPerson = (input * (percent / 100)) / numOfPeople;
      const totalPerson = input / numOfPeople + perPerson;

      setTipPerPerson(perPerson);
      setTotalPerPerson(totalPerson);
    }
  }, [input, numOfPeople, percent]);

  const handleCustomInput = (e) => {
    setPercent(e.target.value);
    console.log(percent);
  };

  const handleReset = () => {
    setnumOfPeople("");
    setInput("");
    setPercent("");
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  return (
    <div className="app">
      <div className="content">
        <h1>S P L I T T E R</h1>
        <div className="calculator">
          <div className="calculator__input">
            <div className="calculator__bill">
              <label htmlFor="bill">Bill</label>
              <input
                type="number"
                name="bill"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="0"
              />
            </div>
            <div className="calculator__selecttip">
              <p>Select tip %</p>
              <div className="tip_buttons_grid">
                <Button value={5} setPercent={setPercent}>
                  5%
                </Button>

                <Button value={10} setPercent={setPercent}>
                  10%
                </Button>
                <Button value={15} setPercent={setPercent}>
                  15%
                </Button>
                <Button value={25} setPercent={setPercent}>
                  25%
                </Button>
                <Button value={50} setPercent={setPercent}>
                  50%
                </Button>
                <input
                  type="number"
                  className="custom-input"
                  placeholder="Custom"
                  onChange={handleCustomInput}
                />
              </div>
            </div>
            <div className="calculator__numofpeople">
              <label htmlFor="numofpeople">Number of People</label>
              <input
                type="number"
                name="numofpeople"
                placeholder="0"
                value={numOfPeople}
                onChange={(e) => setnumOfPeople(e.target.value)}
              />
            </div>
          </div>
          <div className="calculator__output">
            <div className="output__text">
              <div className="tip__amount">
                <h3>
                  Tip Amount <span>/ person</span>
                </h3>
                <h1>${tipPerPerson}</h1>
              </div>
              <div className="tip__total">
                <h3>
                  Total <span>/ person</span>
                </h3>
                <h1>${totalPerPerson}</h1>
              </div>
            </div>
            <button className="reset__button" onClick={handleReset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
