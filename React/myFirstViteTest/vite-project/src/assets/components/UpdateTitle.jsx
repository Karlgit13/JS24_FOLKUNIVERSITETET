import { useEffect, useState } from "react";

const UpdateTitle = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Räknare ${counter}`;
  });

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Öka</button>
    </div>
  );
};

export default UpdateTitle;
