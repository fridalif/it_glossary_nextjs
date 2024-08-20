import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import { useState, useEffect } from 'react'
import axios from "axios"
export default function Documents(){
    return (
        <div className="main" style={{'display':'flex','height':'1080px','width':"1920px",'align-items':'center','flexDirection':'column','gap':'30px'}}>
            <Header />
            <Body mode='Documents' />
        </div>
    )
}