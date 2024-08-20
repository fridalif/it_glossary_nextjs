import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import axios from "axios";
import { useState, useEffect } from 'react'

export default function Terms(){
    const [authUsername, setAuthUsername] = useState('')
    const [isStaff, setIsStaff] = useState(false)


    return (
        <>
            <Header authUsername={authUsername} isStaff={isStaff}/>
            <Body mode='Terms' />
        </>
    )
}