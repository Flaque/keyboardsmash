import { useState, useEffect, useRef } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("my title");

  // ComponentDidMount
  useEffect(function myEffect() {
    console.log("hi");
  }, []);

  function myOnClick() {
    setCount(count + 1);
  }

  return <button onClick={myOnClick}>clicks {count}</button>;
}

function MyPage() {
  return (
    <div>
      Hello: <MyButton />
    </div>
  );
}

// Class Components
// Functional Components + hooks

export default MyPage;
