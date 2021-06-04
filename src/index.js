import React, { useState } from "react";
import ReactDOM from "react-dom";

import dynamic from "./dynamic";

const Modal = dynamic(() => import("./Modal"));

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Hi!</h1>
      <button onClick={() => setOpen(true)}>Click Me</button>
      {open && <Modal />}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));