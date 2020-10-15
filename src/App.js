import React, { useContext } from "react";
import "./App.css";
import { Provider, Context } from "./components/Context";
import Routes from "./components/router";
import { useRoutes } from "hookrouter";
import { Spring } from "react-spring/renderprops";
function App() {
  const routes = useRoutes(Routes);
  return (
    <Spring
      from={{ marginTop: -100, opacity: 0 }}
      to={{ marginTop: 0, opacity: 1 }}
      config={{ duration: 800 }}
    >
      {(props) => (
        <div style={props}>
          <div className="App">
            <Provider>{routes}</Provider>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default App;
