
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Chat from './Chat';
import Login from "./Login";
import Sidebar from './Sidebar';
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue(); 
  return (
    //BEM naming convention

    <div className="App">
     {!user ? (
       <Login/>
     ) : (
      <div className="app_body">
      <Router>
        <Switch>
          <Route path = "/rooms/:roomId">
             <Sidebar/>
             <Chat/>
          </Route>
          <Route path = "/">
          <Sidebar/>

          </Route> 
        </Switch>
      </Router>
      

      </div>
     )}
      
    </div>
  );
}

export default App;
