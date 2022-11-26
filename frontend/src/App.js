import { useState } from "react";
import Conversation from "./containers/client/Conversation/Conversation";
import VideoCall from "./containers/client/VideoCall/VideoCall";
import Client from "./containers/client/Client.jsx";
import { Button } from "@material-ui/core";
// import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Signup from "./containers/client/Singup/Signup";
import Login from "./containers/client/Login/Login";
import Sidebar from "./containers/shared/Sidebar/sidebar";
import Welcome from "./containers/client/header";

function App() {
  const [inCall, setInCall] = useState(false);
  return (
    <div className="App" style={{ height: "100px" }}>
      {/* <Router> */}
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Call
        </Button>
      )}
      {/* </Router> */}
    </div>
  );
}
export default App;
