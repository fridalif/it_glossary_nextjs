import { Component } from 'react';
import styles from './Body.module.css';
import { ContentBubble } from '../ContentBubble/ContentBubble';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { IoMdSearch } from "react-icons/io";
import axios from 'axios'

export class Body extends Component {
    constructor(props){
        super(props)
       
        this.state = {
            mode:this.props.mode,
            api_data:[]
        }
    }

    componentDidMount(){
        if(this.state.mode === 'Home' || this.state.mode === 'Documents'){
            axios.get('http://127.0.0.1:8000/api/documents/')
            .then(response=>{
                this.setState({api_data:response.data})
            })
            return
        }

        if(this.state.mode === 'Terms'){
            axios.get('http://127.0.0.1:8000/api/terms/')
            .then(response=>{
                
                this.setState({api_data:response.data})
            })
            return
        }
    }

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.bodyContentTitle} id='bodyContentTitle'>
                    {this.state.mode === 'Home' && <>Самые популярные документы</>}
                    {
                        (this.state.mode === 'Documents' || this.state.mode==='Terms') &&
                        <>
                            <input type='text' name='search' id='search' className={styles.searchField} placeholder='Поиск...'/>
                            <div className={styles.searchIcon}><IoMdSearch /></div>
                        </>
                    }
                </div>
                {
                    this.state.mode === 'Register' || this.state.mode === 'Login' 
                    ?
                        <RegisterForm mode={this.state.mode} />
                    :
                    this.state.api_data.map((item,index)=>(
                        <ContentBubble key={index} mode={this.state.mode} element={item}/>    
                    ))
                }
                
            </div>
        );
    }
}
