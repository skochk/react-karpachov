import React, { Component } from 'react';
import styles from './styles.module.scss';

class index extends Component {
    render() {

        return (
            <div className={styles.row}>
                <div className={styles.container}>
                    <div className={styles.item}>Главная</div>
                    <div className={styles.fuckingrow}></div>
                    <div className={styles.item}>Академия родительского мастерства</div>
                    <div className={styles.fuckingrow}></div>
                    <div className={styles.item}>Модуль 12</div>
                </div>
                
            </div>
        );
    }
}
index.defaultProps={

}

export default index;