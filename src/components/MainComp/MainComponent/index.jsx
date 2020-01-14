import React, { Component } from 'react';
import styles from './styles.module.scss'
import Progressbar from '../MainComponent/Progressbar'
class index extends Component {
    render() {
        return (
            <div className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.leftbox}>
                        <div className={styles.stringh1}>1 ГОД, 3-Й МЕСЯЦ</div>
                        <div className={styles.info_text}>Прохождение этой темы позволит вам избежать частных ошибок  при воспитании детей от 0 до 3 лет. Результат - правильные и четкие шаги для достижения цели.</div>
                        <Progressbar/>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;