import { Component } from 'react';
import styles from './Body.module.css';
//import ContentBubble from './ContentBubble'
//import RegisterForm from './RegisterForm';

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
                    {this.state.mode === 'Documents' && <>Все документы</>}
                    {this.state.mode === 'Terms'&& <>Все термины</>}
                </div>
                {this.state.mode === 'Register' || this.state.mode === 'Login' ?
                  <>register</>
                  //<RegisterForm mode={this.state.mode} />
                  :
                  <>content</>
                  //<ContentBubble mode={this.state.mode} />
                }
                
            </div>
        );
    }
}
