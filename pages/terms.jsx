import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import axios from "axios";
import { useState, useEffect } from 'react'

export default function Terms(){

    return (
        <div className="main" style={{'display':'flex','height':'100%','width':"100%",'align-items':'center','flexDirection':'column','gap':'30px'}}>
            <Header />
            <Body mode='Terms' />
        </div>
    )
}