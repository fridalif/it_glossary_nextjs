import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import { useState, useEffect } from 'react'
import axios from "axios"

export default function Login(){
    const [authUsername, setAuthUsername] = useState('')
    const [isStaff, setIsStaff] = useState(false)

    useEffect(() =>{
        let accessToken = localStorage.getItem('access') || null
        if (accessToken){
            axios
                .get('http://127.0.0.1:8000/api/mydata/', {headers: {Authorization: `ITGlossary ${accessToken}`}})
                .then((response) => {
                    setAuthUsername(response.data.username)
                    setIsStaff(response.data.is_Staff)
                })
                .catch((error) => {
                    let refreshToken = localStorage.getItem('refresh')
                    axios
                        .post('http://127.0.0.1:8000/api/token/refresh/', {refresh: refreshToken})
                        .then((response) => {
                            localStorage.setItem('access', response.data.access)
                            let accessToken = localStorage.getItem('access')
                            axios
                                .get('http://127.0.0.1:8000/api/mydata/', {headers: {Authorization: `ITGlossary ${accessToken}`}})
                                .then((response) => {
                                    setAuthUsername(response.data.username)
                                    setIsStaff(response.data.is_Staff)
                                })
                        })
                })
        }
    }, []);

    return (
        <>
            <Header authUsername={authUsername} isStaff={isStaff}/>
            <Body mode='Login' authUsername={authUsername} isStaff={isStaff}/>
        </>
    )
}