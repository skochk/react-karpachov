import React, { Component } from 'react';
import styles from './styles.module.scss';
import logo from './img/logo.png'
import usericon from './img/usericon.png'

class index extends Component {
    render() {
        return (
            <>
                <div className={styles.header}>
                    <img src={logo}/>
                    <div className={styles.rightSide}>
                        <div>Главная</div>
                        <div>Материалы для вас</div>
                        <div>Календарь курсов</div>
                        <div><img src={usericon}/>Войти</div>
                    </div>
                </div>
            </>
        );
    }
}

export default index;