import { Component } from 'react';
import styles from './Body.module.css';
import { ContentBubble } from '../ContentBubble/ContentBubble';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { IoMdSearch } from "react-icons/io";

export class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            mode:this.props.mode
        }
    }

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.bodyContentTitle} id='bodyContentTitle'>
                    {this.state.mode === 'Home' && <>Самые популярные документы</>}
                    {
                        this.state.mode === 'Documents' || this.state.mode==='Terms' &&
                        <>
                            <input type='text' name='search' id='search' className={styles.searchField} />
                            <div className={styles.searchIcon}><IoMdSearch /></div>
                        </>
                    }
                </div>
                {this.state.mode === 'Register' || this.state.mode === 'Login' ?
                  <RegisterForm mode={this.state.mode} />
                  :
                  <ContentBubble mode={this.state.mode} />
                }
                
            </div>
        );
    }
}
