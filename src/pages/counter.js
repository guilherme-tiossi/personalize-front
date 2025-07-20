import CounterCard from "@/components/CounterCard";
import CounterComponent from "@/components/Counter";
import { useState } from "react";

export default function CounterPage() {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div style={{ backgroundColor: bgColor }}>
      <div>
        <CounterCard
          title="counter"
          content={
            <CounterComponent setBgColor={setBgColor}></CounterComponent>
          }
        ></CounterCard>
      </div>
    </div>
  );
}
