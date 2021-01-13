import React, { useState } from "react";
const App = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <h1 className="greetings"> Hello, World! </h1>
      <a href="#" onClick={() => setClick(!click)}>Link</a>
      <p>{click ? "Clicked!" : null}</p>
    </div>
  );
};
export default App;
