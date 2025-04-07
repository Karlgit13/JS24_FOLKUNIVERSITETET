import { useState } from "react";

const Toggletext = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isVisible ? "Dölj Text" : "Visa Text"}
      </button>

      {isVisible && <p>här är texten</p>}
    </div>
  );
};

export default Toggletext;
