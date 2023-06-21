import React from "react"
import Login from "../components/Login.js"
// import { Routes } from 'react-router'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "../components/Chats.js";
// import Login from "./Login";

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
   <Router> 
   <AuthProvider>
         <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} /> 
          </Switch>   
          </AuthProvider>
      </Router> 
    </div>
  )
}

export default App

//react context - 1 big object that contains all the date, in this case user data, it wraps also other components
//we are wrapping all specific components in AuthProvider, then that handlesthe entire app state


// we're gonna use the data coming from the social firebase login and we're going to pair it with making API calls to chat engine to create those users

//we're going to mix and match, use the data, use the chat engine, thanx that we will be able to create real users




// 36.15
// https://www.youtube.com/watch?v=Bv9Js3QLOLY
