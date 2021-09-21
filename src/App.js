import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";

// import ViewStudent from "./pages/ViewStudent";
import Addstudent from "./pages/AddStudent";
// import Editstudent from "./pages/Editstudent";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/add-student" component={Addstudent} />
          {/* <Route path="/students" component={ViewStudent} />
          <Route path="/add-student" component={Addstudent} />
          <Route path="/edit-student/:id" component={Editstudent} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
