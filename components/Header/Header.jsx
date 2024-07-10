import styles from './Header.module.css';
import Image from 'next/image';
import { Component } from 'react';
import logoSrc from './logo.jpg'

export class Header extends Component {
    render(){
         return (
            <header className={styles.header}>
                <div className={styles.logoBlock}>
                   <Image src={logoSrc} alt='Логотип' width={100} height={140}/>
                </div>
                <a href='/'>
                    <div className={styles.titleBlock} onclick={() => window.location.href = '/'}>
                        <b> IT Глоссарий </b>
                    </div>
                </a>
                <div className={styles.documentsHeaderBlock}>
                    Документы
                </div>
                <div className={styles.terminsHeaderBlock}>
                    Термины
                </div>
                <a href='/login'>
                    <div className={styles.registerHeaderBlock}>
                        Вход/Регистрация
                    </div>
                </a>
            </header>
        )

    }
}
