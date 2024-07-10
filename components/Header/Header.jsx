import styles from './Header.module.css';
import Image from 'next/image';
import { Component } from 'react';

export class Header extends Component {
    render(){
         return (
            <header className={styles.header}>
                <div className={styles.logoBlock}>
                   <Image src='/logo.png' alt='Логотип' width='100' height='100'/>
                </div>
                <div className={styles.titleBlock}>
                   <b> IT Глоссарий </b>
                </div>
                <div className={styles.documentsHeaderBlock}>
                    Документы
                </div>
                <div className={styles.terminsHeaderBlock}>
                    Термины
                </div>
                <div className={styles.registerHeaderBlock}>
                    Регистрация
                </div>
                <div className={styles.enterHeaderBlock}>
                    Вход
                </div>
            </header>
        )

    }
}
