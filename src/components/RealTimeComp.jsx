import { Tldraw } from "tldraw";
import { useSyncDemo } from "@tldraw/sync";
import "tldraw/tldraw.css";

const RealTimeComp = () => {
  const store = useSyncDemo({ roomId: "myapp" });
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw store={store} />
    </div>
  );
};

export default RealTimeComp;
