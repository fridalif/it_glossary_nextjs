import { Component } from 'react'
import styles from './RegisterForm.module.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

export class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            retypePassword: '',
            email:'',
            mode:this.props.mode
        }
    }

    changeMode(){
        if(this.state.mode === 'Register'){
            document.getElementById('password').value = ''
            document.getElementById('username').value = ''
            document.getElementById('retypePassword').value = ''
            document.getElementById('email').value = ''
            document.getElementById('loginForm').style.transform = 'translateX(0%)'
            document.getElementById('otherBlock').style.transform = 'translateX(0%)'
            this.setState({mode: 'Login', username:'', password:'', retypePassword:'', email:''})
            return
        }
        document.getElementById('password').value = ''
        document.getElementById('username').value = ''
        this.setState({mode: 'Register',username:'', password:'', retypePassword:'', email:''})
        document.getElementById('loginForm').style.transform = 'translateX(-100%)'
        document.getElementById('otherBlock').style.transform = 'translateX(100%)'    
    }
    
    render() {    
        return (
            <div className={styles.formsBody} id='formsBody'>
                <div className={styles.otherBlock} id='otherBlock'>
                    {
                        this.state.mode === 'Register'
                        ?
                            <h1> Регистрация </h1>
                        :
                            <h1> Вход </h1>
                    }
                </div>
                <div className={styles.loginFormBlock} id='loginForm'>
                    <form>
                        {
                        this.state.mode === 'Register' 
                        ?
                        <div className={styles.registerForm}>
                            <div className={styles.usernameInputBlock}>
                                <div className={styles.loginInputIcon}>
                                    <FaUser />
                                </div>
                                <input type='text' className={styles.loginInput} placeholder='Логин' name='username' id='username' onChange={(e) => this.setState({username: e.target.value})}/>
                            </div>                                    
                            <div className={styles.passwordInputBlock}>
                                <div className={styles.loginInputIcon}>
                                    <RiLockPasswordLine />
                                </div>
                                <input type='password' className={styles.loginInput} placeholder='Пароль' name='password' id='password' onChange={(e) => this.setState({password: e.target.value})}/>
                            </div>
                            <div className={styles.retypePasswordInputBlock}>
                                <div className={styles.loginInputIcon}>
                                    <RiLockPasswordLine />
                                </div>
                                <input type='password' className={styles.loginInput} placeholder='Повторите пароль' name='retypePassword' id='retypePassword' onChange={(e) => this.setState({retypePassword: e.target.value})}/>
                            </div>
                            <div className={styles.emailInputBlock}>
                                <div className={styles.loginInputIcon}>
                                    <MdOutlineAlternateEmail />
                                </div>
                                <input type='email' className={styles.loginInput} placeholder='Электронная почта' name='email' id='email' onChange={(e) => this.setState({email: e.target.value})}/>
                            </div>
                            <div className={styles.submitButtonRegister} onClick={()=>alert('Register')}>
                                Зарегистрироваться
                            </div>
                            <div className={styles.changeButtonRegister} onClick={() => this.changeMode()}>
                                Вход 
                            </div>   
                        </div>
                        :
                        <div className={styles.loginForm}>
                            <div className={styles.usernameInputBlock}>
                                <div className={styles.loginInputIcon}>
                                    <FaUser />
                                </div>
                                <input type='text' className={styles.loginInput} placeholder='Логин' name='username' id='username'  onChange={(e) => this.setState({username: e.target.value})}/>
                            </div>                                    
                            <div className={styles.passwordInputBlock}>
                                <div className={styles.loginInputIcon}>
                                    <RiLockPasswordLine />
                                </div>
                                <input type='password' className={styles.loginInput} placeholder='Пароль' name='password' id='password' onChange={(e) => this.setState({password: e.target.value})}/>
                            </div>
                            <div className={styles.submitButtonLogin} onClick={()=>alert('Eter')}>
                                Войти
                            </div>
                            <div className={styles.changeButtonLogin} onClick={() => this.changeMode()}>
                                Регистрация
                            </div>    
                        </div>        
                        }
                    </form>
                </div>
            </div>
        )
    }
}
