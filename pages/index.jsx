import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import { useState, useEffect } from 'react'
import axios from "axios"
export default function Home(){

    return (
        <>
            <Header />
            <Body mode='Home' />
        </>
    )
}