import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return (
    <div>
      <h1>hi, {name}</h1>
    </div>
  );
};

export default Greeting;
