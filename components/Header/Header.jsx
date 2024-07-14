import styles from './Header.module.css';
import Image from 'next/image';
import { Component } from 'react';
import logoSrc from './logo.jpg'

export class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
         return (
            <header className={styles.header}>
                <div className={styles.logoBlock}>
                   <Image src={logoSrc} alt='Логотип' width={100} height={140}/>
                </div>
                <a href='/'>
                    <div className={styles.titleBlock}>
                        <b> IT Глоссарий </b>
                    </div>
                </a>
                <a href='/documents'>
                    <div className={styles.documentsHeaderBlock}>
                        Документы
                    </div>
                </a>
                <a href ='/terms'>
                    <div className={styles.terminsHeaderBlock}>
                        Термины
                    </div>
                </a>
                <a href='/login'>
                    <div className={styles.registerHeaderBlock}>
                        {this.props.authUsername === ''
                        ?
                            <>Вход/Регистрация</>
                        :
                            <div onClick={localStorage.removeItem('access') || localStorage.removeItem('refresh')}>{this.props.authUsername} Выход</div>
                        }
                    </div>
                </a>
            </header>
        )

    }
}
