import Card from "@/components/Card";
import CounterComponent from "@/components/Counter";
import { useState } from "react";

export default function CounterPage() {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div style={{ backgroundColor: bgColor }}>
      <Card
        title="counter"
        content={<CounterComponent setBgColor={setBgColor}></CounterComponent>}
      ></Card>
    </div>
  );
}
