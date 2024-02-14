import { useState } from "react";
import nameContext from "./useContext";
import { useContext } from "react";

const ReactContext = () => {
  const [name, setName] = useState("MUI");
  return (
    <nameContext.Provider value={{ name, setName }}>
      <>
        <br />
        This is Component1
        <Component2 />
      </>
    </nameContext.Provider>
  );
};

const Component2 = () => {
  return (
    <>
      <br />
      This is Component2
      <Component3 />
    </>
  );
};

const Component3 = () => {
  return (
    <>
      <br />
      This is Component3
      <Component4 />
    </>
  );
};

const Component4 = () => {
  return (
    <>
      <br />
      This is Component4
      <Component5 />
    </>
  );
};

const Component5 = () => {
  const data = useContext(nameContext);

  return (
    <>
      <br />
      This is Component5 got data as {data.name}
      <button
        onClick={() => {
          data.setName("____React World _____");
          console.log(data,'DATA PASSED to COMPONENT5');
        }}
      >
        Trigger
      </button>
    </>
  );
};
export default ReactContext;
