import styles from './Header.module.css';
import Image from 'next/image';
import { Component } from 'react';
import logoSrc from './logo.jpg'

export function Header(){
         return (
            <div className={styles.header}>
                <div className={styles.logoBlock}>
                   <Image src={logoSrc} alt='Логотип' width={100} height={140}/>
                </div>
                <div>
                <a href='/'>
                    <div className={styles.titleBlock}>
                        <b> IT Глоссарий </b>
                    </div>
                </a>
                </div>
                <div>
                <a href='/documents'>
                    <div className={styles.documentsHeaderBlock}>
                        Документы
                    </div>
                </a>
                </div>
                <div>
                <a href ='/terms'>
                    <div className={styles.terminsHeaderBlock}>
                        Термины
                    </div>
                </a>
                </div>
        </div>
    )
}
