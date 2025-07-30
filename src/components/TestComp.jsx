import React, { useEffect } from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const TestComp = () => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw persistenceKey={"key"} />
    </div>
  );
};

export default TestComp;
