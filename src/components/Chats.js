import React, {useState, useEffect} from "react"
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "./firebase";
import { useAuth } from "../contexts/AuthContext"
import axios from "axios";


const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    console.log(user)
    const handleLogout = async() => {
        await auth.signOut();
        history.push('/');
    }

    //function that handle our images:
    const getFile = async(url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
    }

    useEffect(()=>{
       if(!user) {
        history.push('/');
        return;
       } 

       axios.get("https://api.chatengine.io/users/me", {
        headers: {
            "project-id":process.env.REACT_APP_CHAT_ENGINE_ID,
            "user-name":user.email,
            "user-secret":user.uid
        }
       })
       .then(() => {
        setLoading(false)
       })
       .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL)
            .then((avatar) => {
                formdata.append("avatar", avatar, avatar.name)
                axios.post('https://api.chatengine.io/users/', formdata, {
                    headers: {
                        "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY
                    }
                })
                .then(() => setLoading(false))
                .catch((error) => console.log(error))
            })
       })
    }, [user, history])

    if(!user || loading ) return "Loading..."
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">Unichat</div>
                <div onClick={handleLogout} className="logout-tab">Logout</div>
            </div>
            <ChatEngine 
            hight="calc(199vh - 66px)"
            projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
            userName={user.email}
            userSecret={user.uid}
            />
        </div>
    )
}

export default Chats;

//let's see if we're successfully getting data from the context

//how can we get data from a different component into this component using react context? create const {user}
//checking if we're getting actual data from firebase

//we have to call chat engine API to create chat user using those accounts

//make sure that we use the user data from useAuth to create new chat engine user 
//to create chat engine we import a few things from react: useRef, useState, useEffect

//if we have the user we want to make axios get call to the chat engine

// Axios to słynny moduł JavaScript. Jest on klientem HTTP dla przeglądarek i NodeJS opartym na obietnicach (promise). 

//catch - we collect the data to create new user

//blob contains files: images or any type of file that you want to transfer over in binary format
// .get - if we have user; post - we want to create


//49

