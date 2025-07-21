import { useEffect, useState } from "react";
import styles from "@/styles/Counter.module.css";

export default function Counter({ setBgColor }) {
  let updatedCounter;

  useEffect(() => {
    const storedCounter = localStorage.getItem("counter");
    if (storedCounter !== null) {
      alterCounter(Number(storedCounter));
      if (storedCounter > 0) {
        alterSubtractionButton(styles.button);
      }
      updatedCounter = storedCounter;
    } else {
      updatedCounter = 0;
    }
  }, []);

  const [counter, alterCounter] = useState(updatedCounter);
  const [subtractionButton, alterSubtractionButton] = useState(
    styles.disabledButton
  );

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  const updateCounter = (type) => {
    if (type == "sum") {
      alterCounter(counter + 1);
      updatedCounter = counter + 1;

      if (updatedCounter > 0) {
        alterSubtractionButton(styles.button);
      }
    } else {
      if (counter - 1 <= 0) {
        alterSubtractionButton(styles.disabledButton);
        if (counter - 1 < 0) return;
      }
      alterCounter(counter - 1);
      updatedCounter = counter - 1;
    }

    if (updatedCounter % 3 == 0 && updatedCounter !== 0) {
      setBgColor("#aebea9ff");
    } else {
      setBgColor("white");
    }
  };

  return (
    <div>
      <p className={styles.counter}> {counter} </p>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={() => updateCounter("sum")}>
          +
        </button>
        <button
          className={subtractionButton}
          onClick={() => updateCounter("subtraction")}
        >
          -
        </button>
      </div>
    </div>
  );
}
