import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";

//create the context
const AuthContext = React.createContext();

//creating f-ction, that we can use later to grab that context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    //renavigate somewhere - call useHistory
    const history = useHistory();

    useEffect(() => {
        //grab the user from firebase authentication:
        auth.onAuthStateChanged((user) => {
            //set it to the state
            setUser(user);
            setLoading(false);
            //using react router dom to push app to /chats
            // if (user) {
            //     history.push('/chats')}

            if (user) history.push('/chats')
        })
    }, [user, history])

    const value = { user }
        return(
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        )
    //useEffect wywoluje sie za kazdym razem, jak dependencje w tablicy sie zmienia
    // authenticate - czy user jest zalogowany czy nie
}


