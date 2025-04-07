import { useEffect } from "react";

const UpdateAtRender = () => {
  useEffect(() => {
    console.log("hi");
  }, []);

  return <div>UpdateAtRender</div>;
};

export default UpdateAtRender;
