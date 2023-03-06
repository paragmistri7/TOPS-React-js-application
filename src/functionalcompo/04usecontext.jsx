import React from "react";
import { useContext } from "react";

const themes = {
  dark: {
    a: "yellow",
    b: "3px",
    c: "solid",
  },
  light: {
    a: "#467094",
    b: "#984546",
    c: "solid",
  },
};
const Themecontext01 = React.createContext(themes.dark);
const Usecontext01 = () => {
  return (
    <>
      <Themebutton />
      <Themecontext01.Provider value={themes.light}>
        <Themebutton />
      </Themecontext01.Provider>
    </>
  );
};
function Themebutton() {
  const theme = useContext(Themecontext01);
  return (
    <>
      <button
        style={{ background: theme.a, border: theme.b, borderStyle: theme.c }}
      >
        color change
      </button>
    </>
  );
}
export default Usecontext01;
