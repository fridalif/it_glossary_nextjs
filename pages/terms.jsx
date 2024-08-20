import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import axios from "axios";
import { useState, useEffect } from 'react'

export default function Terms(){

    return (
        <>
            <Header />
            <Body mode='Terms' />
        </>
    )
}