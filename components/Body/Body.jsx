import { useEffect, useState } from 'react';
import styles from './Body.module.css';
import { ContentBubble } from '../ContentBubble/ContentBubble';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { IoMdSearch } from "react-icons/io";
import axios from 'axios'

export function Body({mode}) {
    const [api_data, setApiData] = useState([]);
    const [query, setQuery] = useState('');
    const getInfoWithQuery = async ()=>{
        if(mode!=='Terms' && mode!=='Documents'){
            return [];
        }
        if(mode === 'Documents'){
            let response = await axios.get(`http://127.0.0.1:8000/api/documents/?query=${query}`)                
            return response.data
        }
        let response = await axios.get(`http://127.0.0.1:8000/api/terms/?query=${query}`)
        return response.data    
    }
    
    useEffect(() => {
        const getInfo = async ()=>{
            let data = await getInfoWithQuery()
            setApiData(data)
        }
        getInfo()
    },[query])
    
    return (
        <div className={styles.body}>
            <div className={styles.bodyContentTitle} id='bodyContentTitle'>
                {mode === 'Home' && <>Самые популярные документы</>}
                {
                    (mode === 'Documents' || mode==='Terms') &&
                    <>
                        <input type='text' name='search' id='search' className={styles.searchField} placeholder='Поиск...' onChange={(e) => {setQuery(e.target.value)}}/>
                        <div className={styles.searchIcon}><IoMdSearch /></div>
                    </>
                }
            </div>
            {
                mode === 'Register' || mode === 'Login' && <RegisterForm mode={mode} />
            }
                    
        </div>
    );
}