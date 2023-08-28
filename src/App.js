import { useState } from "react";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Steps Challenge</h2>
      <div>
        <StepsComponent step={step} setStep={setStep} />
      </div>
      <div>
        <CountsComponent count={count} setCount={setCount} />
      </div>
      <div>
        <DateText step={step} count={count} />
      </div>
    </div>
  );
};

const StepsComponent = ({ step, setStep }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <button
        style={{ display: "inline" }}
        onClick={step > 1 ? () => setStep((s) => s - 1) : (s) => 1}
      >
        -
      </button>
      <span>Step: {step}</span>
      <button style={{ display: "inline" }} onClick={() => setStep(step + 1)}>
        +
      </button>
    </div>
  );
};

const CountsComponent = ({ count, setCount }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <button style={{ display: "inline" }} onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>Count: {count}</span>
      <button style={{ display: "inline" }} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

const DateText = ({ step, count }) => {
  const currentDate = new Date();
  const date = new Date();
  date.setDate(date.getDate() + step * count);
  let preText = "";
  if (date.getTime() === currentDate.getTime()) {
    preText = "Today is";
  } else if (date.getTime() > currentDate.getTime()) {
    preText = `${step * count} days from today is`;
  } else {
    preText = `${Math.abs(step * count)} days ago was`;
  }
  return (
    <div>
      <p>
        <span>{preText} </span>
        <span>{date.toDateString()}.</span>
      </p>
    </div>
  );
};
