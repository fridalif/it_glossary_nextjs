import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import { useState, useEffect } from 'react'
import axios from "axios"
export default function Home(){

    return (
        <div className="main" style={{'display':'flex','height':'100%','width':"100%",'alignItems':'center','flexDirection':'column','gap':'30px'}}>
            <Header />
            <Body mode='Home' />
        </div>
    )
}