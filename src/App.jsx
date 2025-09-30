import { useState } from "react";
import Button from "./components/button";

const App = () => {
  let [count, setCount] = useState(0);
  const handleClick = (count, opt) => {
    if (opt === "plus") {
      count++;
      if (count > 10) {
        alert("tidak boleh melebihi 10");
        return 10;
      }
    } else if (opt === "min") {
      count--;
      if (count < 0) {
        alert("Tidak boleh kurang dari 0");
        return 0;
      }
    }
    return count;
  };

  return (
    <main className="h-screen justify-items-center content-center">
      <div className="flex gap-10 items-center justify-around text-5xl">
        <Button opt="-" onClick={() => setCount(handleClick(count, "min"))}></Button>
        {count}
        <Button opt="+" onClick={() => setCount(handleClick(count, "plus"))}></Button>
      </div>
    </main>
  );
};

export default App;
