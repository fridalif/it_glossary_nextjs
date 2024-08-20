import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import { useState, useEffect } from 'react'
import axios from "axios"
export default function Documents(){
    const [authUsername, setAuthUsername] = useState('')
    const [isStaff, setIsStaff] = useState(false)

    return (
        <>
            <Header authUsername={authUsername} isStaff={isStaff}/>
            <Body mode='Documents' />
        </>
    )
}