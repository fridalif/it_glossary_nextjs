import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import { useState, useEffect } from 'react'
import axios from "axios"
export default function Documents(){
    const [isStaff, setIsStaff] = useState(false)

    return (
        <div className="main" style={{'display':'flex','height':'1080px','width':"1920px",'justify-content':'center'}}>
            <Header />
            <Body mode='Documents' />
        </div>
    )
}