import { useState } from "react";

export default function Counter({ setBgColor }) {
  const [counter, alterCounter] = useState(0);
  let updatedCounter = 0;

  const updateCounter = (type) => {
    if (type == "sum") {
      alterCounter(counter + 1);
      updatedCounter = counter + 1;
    } else {
      alterCounter(counter - 1);
      updatedCounter = counter - 1;
    }

    if (updatedCounter % 3 == 0 && updatedCounter !== 0) {
      setBgColor("#7ea876");
    } else {
      setBgColor("white");
    }
  };

  return (
    <div>
      <p> {counter} </p>
      <button onClick={() => updateCounter("sum")}> + </button>
      <button onClick={() => updateCounter("subtraction")}> - </button>
    </div>
  );
}
