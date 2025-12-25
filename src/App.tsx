import { useState, useCallback } from "react";
import React from "react";

const Child = React.memo(({ handle }) => {
  console.log("Child rendering");

  return (
    <button onClick={handle}>
      Hello
    </button>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleclick = useCallback(() => {
    console.log("child click");
  }, []);

  return (
    <>
      <div
        onClick={() => setCount(count + 1)}
        className="w-10 h-10 bg-yellow"
      >
        This is Parent component: {count}
      </div>

      <Child handle={handleclick} />
    </>
  );
}

export default Parent;
